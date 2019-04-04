import {Action} from '@ngrx/store';
import {UserModel} from '../model/user.model';

export const CREATE_CUSTOMER = 'Customer_Create';
export const DELETE_CUSTOMER = 'Customer_Delete';

export class CreateCustomer implements Action {
  readonly type = CREATE_CUSTOMER;

  constructor(public payload: UserModel) {
  }
}

export class DeleteCustomer implements Action {
  readonly type = DELETE_CUSTOMER;

  constructor(public id: number) {
  }
}

export type Actions = CreateCustomer | DeleteCustomer;
