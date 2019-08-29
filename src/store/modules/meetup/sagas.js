import {all, call, put, takeLatest} from 'redux-saga/effects';
import {Alert} from 'react-native';

import {
  meetupSubscriptionSuccess,
  meetupSubscriptionCancelRequest,
  meetupSubscriptionFailure,
} from './actions';

import api from '../../../services/api';

export function* meetupSubscription({payload}) {
  try {
    const {meetup_id} = payload;
    yield call(api.post, `subscriptions/${meetup_id}`);

    Alert.alert('Sucesso !', 'sua inscricao foi realizada');
    yield put(meetupSubscriptionSuccess());
  } catch (err) {
    Alert.alert('Erro', `${err.response.data.error}`);
    yield put(meetupSubscriptionFailure());
  }
}

export function* meetupSubscriptionCancel({payload}) {
  try {
    const {meetup_id} = payload;
    yield call(api.delete, `subscriptions/${meetup_id}`);

    Alert.alert('Sucesso !', 'sua inscricao foi cancelada');
    yield put(meetupSubscriptionCancelRequest());
  } catch (err) {
    Alert.alert('Erro', `${err.response.data.error}`);
    yield put(meetupSubscriptionFailure());
  }
}

export default all([
  takeLatest('@meetup/SUBSCRIPTION_REQUEST', meetupSubscription),
  takeLatest('@meetup/SUBSCRIPTION_CANCEL_REQUEST', meetupSubscriptionCancel),
]);
