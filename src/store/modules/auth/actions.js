export function signInRequest(data) {
  return {
    type: "@auth/SIGN_IN_REQUEST",
    payload: { data }
  };
}

export function signInSuccess({ user, token }) {
  return {
    type: "@auth/SIGN_IN_SUCCESS",
    payload: { user, token }
  };
}

export function signUpRequest(data) {
  return {
    type: "@auth/SIGN_UP_REQUEST",
    payload: { data }
  };
}

export function signUpSuccess() {
  return {
    type: "@auth/SIGN_UP_SUCCESS"
  };
}

export function logout() {
  return {
    type: "@auth/LOGOUT"
  };
}

export function signFailure() {
  return {
    type: "@auth/SIGN_FAILURE"
  };
}
