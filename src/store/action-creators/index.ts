import * as UserActionCreators from "./user"
import * as TodoActionTypes from "./todo"

export default {
  ...TodoActionTypes,
  ...UserActionCreators
}