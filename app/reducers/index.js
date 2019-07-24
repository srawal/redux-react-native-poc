/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import { reducer as form } from 'redux-form/immutable';
export default Object.assign(loginReducer, loadingReducer,form);
