import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import { createEmployee, updateEmployee } from "../../containers/Home/actions";
import { resetEmployee } from "../../containers/Details/actions"
import { connect } from "react-redux";
import { get } from "lodash";
import compose from "recompose/compose";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class DialogComponent extends React.Component {
  state = {
    first_Name: '',
    last_Name: '',
    title: '',
    email: '',
    image: '',
    userName: '',
    street: '',
    city: '',
    country: '',
    open: false,
    id: ''
  };

  componentWillUnmount() {
    this.props.resetEmployee()
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  onChangeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  onClickCreate = () => {
    const employee = {
      first_name: this.state.first_Name,
      last_name: this.state.last_Name,
      title: this.state.title,
      account: {
        email: this.state.email,
        image: this.state.image,
        userName: this.state.userName,
        address: {
          street: this.state.street,
          city: this.state.city,
          country: this.state.country,
        }
      }
    }
    this.props.createEmployee(employee)
    this.handleClose()
  }

  render() {

    const emPloyee = this.props.employee;
    console.log('props', this.state.open, this.props.openEdit, emPloyee.id)
    return (
      <div>
        <Button
          style={{ margin: "2rem", float: "left" }}
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Add EmPloyee
        </Button>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          onBackdropClick={this.props.onBackdropClick}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          maxWidth="md"
          fullWidth
        >
          <DialogTitle id="alert-dialog-slide-title">
            ADD EMPLOYEE
              </DialogTitle>
          <DialogContent>
            <TextField fullWidth onChange={this.onChangeValue} label="First Name" name="first_Name" />
            <TextField fullWidth onChange={this.onChangeValue} label="Last Name" name="last_Name" />
            <TextField fullWidth onChange={this.onChangeValue} label="Email Address" name="email" />
            <TextField fullWidth onChange={this.onChangeValue} label="Title" name="title" />
            <TextField fullWidth onChange={this.onChangeValue} label="Image" name="image" />
            <TextField fullWidth onChange={this.onChangeValue} label="User Name" name="userName" />
            <TextField fullWidth onChange={this.onChangeValue} label="Street" name="street" />
            <TextField fullWidth onChange={this.onChangeValue} label="Country" name="country" />
            <TextField fullWidth onChange={this.onChangeValue} label="City" name="city" />
          </DialogContent>
          <DialogActions>
            <Button style={{ margin: '1rem' }} variant="contained" onClick={this.onClickCreate} color="primary">
              CREATE
                </Button>
            <Button style={{ margin: '1rem' }} variant="contained" onClick={this.handleClose} color="primary">
              CANCEL
                </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employee: state.DetailEmployeeReducer
  };
};

export default compose(
  connect(mapStateToProps, {
    createEmployee,
    resetEmployee,
    updateEmployee
  }))(DialogComponent);
