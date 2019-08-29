import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {updateProfileSuccess, updateProfileFailure} from './actions';
import api from '../../../services/api';

export function* updateProfile({payload}) {
  try {
    const {name, email, ...rest} = payload.data;

    const profile = {name, email, ...(rest.oldPassword ? rest : {})};

    const userUpdated = yield call(api.put, 'users', profile);

    Alert.alert('Atualizado', 'Seu perfil foi atualizado com sucesso');

    yield put(updateProfileSuccess(userUpdated.data));
  } catch (err) {
    Alert.alert('Erro', 'confira seus dados');

    yield put(updateProfileFailure());
  }
}
export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
