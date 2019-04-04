import {Actions, CREATE_CUSTOMER, DELETE_CUSTOMER} from '../action/home-page.action';
import {UserModel} from '../model/user.model';

const initialState: UserModel = {
    completed: true,
    id: 9,
    title: 'string',
    userId: 1,
  }
;

export function homePageReducer(
  state: UserModel[] = [initialState],
  action: Actions) {

  switch (action.type) {
    case CREATE_CUSTOMER:
      return [...state, action.payload];

    case DELETE_CUSTOMER:
      return state.filter(({id}) => id !== action.id);

    default:
      return state;
  }
}
