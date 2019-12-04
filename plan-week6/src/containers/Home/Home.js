import React from 'react';
import TableUsers from '../../components/Table/TableUsers';
import { fecthListEmployee } from "./actions";
import { connect } from "react-redux";
import compose from "recompose/compose";

class Home extends React.Component{

  componentDidMount() {
    this.props.fecthListEmployee();
  }
  
  render(){
    return(
      <div>
        <TableUsers listEmployee={this.props.listEmployee}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listEmployee: state.EmployeeReducer
  };
};

export default compose(
  connect(mapStateToProps, {
    fecthListEmployee
  })
)(Home);