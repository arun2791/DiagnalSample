/* 
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as contents from './contentsReducer';
export default Object.assign(contents, loadingReducer);
