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

export const resetEmployee = () => dispatch => {
  dispatch({
    type: actions.RESET_EMPLOYEE
  })
}

export const updateEmployee = (employee, Id) =>  async dispatch =>{
  const response = await axios.put(`${baseUrl}/${FECTH_LIST_EMPLOYEE_URL}/${Id}`, employee)
  const { data = {},  status = 0 } = response
  if (status === 200) {
    dispatch({
      type: actions.UPDATE_EMPLOYEE,
      payload: data || {}
    })
  }
}

