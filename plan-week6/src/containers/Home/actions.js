import axios from 'axios';
import { actions } from './enums'
//import { get } from 'lodash'

const baseUrl='http://localhost:3004'
const FECTH_LIST_EMPLOYEE_URL = 'employees'

export const fecthListEmployee = () => async dispatch => {
  const response = await axios.get(`${baseUrl}/${FECTH_LIST_EMPLOYEE_URL}`)
  if (response) {
    dispatch({
      type: actions.FECTH_LIST_EMPLOYEES,
      payload: response.data || []
    })
  }
}

export const deleteEmployeeById = Id => async dispatch => {
  const response = await axios.delete(`${baseUrl}/${FECTH_LIST_EMPLOYEE_URL}/${Id}`)
  const { status = 0 } = response
  if (status === 200) { 
    dispatch(fecthListEmployee())
  }
}

