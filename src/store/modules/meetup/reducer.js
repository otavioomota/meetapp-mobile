import { produce } from "immer";

const INITIAL_STATE = {
  meetup: null
};

export default function MeetupReducer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case "@meetup/MORE_DETAILS": {
        draft.meetup = action.payload.meetup;
        break;
      }
      case "@meetup/CANCELATION_SUCCESS": {
        draft.meetup = null;
        break;
      }
      case "@meetup/CREATE_PAGE": {
        draft.meetup = null;
        break;
      }
      case "@meetup/UPDATE_SUCCESS": {
        draft.meetup = action.payload.data;
        break;
      }
      case "@auth/LOGOUT": {
        draft.meetup = null;
        break;
      }
      default:
        break;
    }
  });
}
