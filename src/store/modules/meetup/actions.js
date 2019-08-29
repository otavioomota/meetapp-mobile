export function meetupSubscriptionRequest(meetup_id) {
  return {
    type: '@meetup/SUBSCRIPTION_REQUEST',
    payload: {
      meetup_id,
    },
  };
}
export function meetupSubscriptionSuccess() {
  return {
    type: '@meetup/SUBSCRIPTION_SUCCESS',
  };
}

export function meetupSubscriptionCancelRequest(meetup_id) {
  return {
    type: '@meetup/SUBSCRIPTION_CANCEL_REQUEST',
    payload: {
      meetup_id,
    },
  };
}

export function meetupSubscriptionCancelSuccess() {
  return {
    type: '@meetup/SUBSCRIPTION_CANCEL_SUCCESS',
  };
}

export function meetupSubscriptionFailure() {
  return {
    type: '@meetup/SUBSCRIPTION_FAILURE',
  };
}
