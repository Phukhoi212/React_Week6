import axios from 'axios';
import { actions } from './enums'
//import { get } from 'lodash'

const baseUrl = 'http://localhost:3004'
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

export const createEmployee = (first_Name, last_Name, email) => async dispatch => {
  const response = await axios.post(`${baseUrl}/${FECTH_LIST_EMPLOYEE_URL}`,
    {
      "first_name": first_Name,
      "last_name": last_Name,
      "title": "title",
      "account": {
        "email": email,
        "image": "https://s3.amazonaws.com/uifaces/faces/twitter/adammarsbar/128.jpg",
        "userName": "userName",
        "address": {
          "street": "street",
          "city": "city",
          "country": "country"
        }
      }
    })
  const { status = 0 } = response
  if (status === 200) {
    dispatch(fecthListEmployee())
  }
}



