import {UserModel} from './model/user.model';


export interface AppState {
  readonly users: UserModel[];
}
