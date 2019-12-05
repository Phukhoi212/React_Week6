import axios from 'axios';
import { actions } from './enums'
//import { get } from 'lodash'

const baseUrl='http://localhost:3004'
const FECTH_LIST_EMPLOYEE_URL = 'employees'


export const getEmployeeById = Id => async dispatch => {
  const response = await axios.get(`${baseUrl}/${FECTH_LIST_EMPLOYEE_URL}/${Id}`)
  if (response) {
    dispatch({
      type: actions.FECTH_EMPLOYEES,
      payload: response.data || "",
    })
  }
}

