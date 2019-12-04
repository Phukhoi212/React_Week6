import { combineReducers } from 'redux';
import EmployeeReducer from '../containers/Home/reducers';
import DetailEmployeeReducer from '../containers/Details/reducers';

const myReducer = combineReducers({
    EmployeeReducer,
    DetailEmployeeReducer
});
export default myReducer