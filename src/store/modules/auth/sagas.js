import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '../../../services/api';

import {signInSuccess, signUpSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload.data;
    const response = yield call(api.post, 'sessions', {email, password});
    const {token} = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro na autentificacao', 'Verifique seus dados de entrada');
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  let response = null;
  try {
    const {name, email, password} = payload.data;

    response = yield call(api.post, 'users', {name, email, password});

    Alert.alert('Usuario criado com sucesso');
    yield put(signUpSuccess(response.data));
  } catch (err) {
    Alert.alert('Ocorreu um erro', 'Tente novamente');
    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return;

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('persist/REHYDRATE', setToken),
]);
