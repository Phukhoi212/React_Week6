import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import InputComponent from "../InputComponent/InputComponent";
import { updateEmployee } from "../../containers/Home/actions";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { get } from "lodash";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class FormEdit extends React.Component {
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

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  handleUpdateEm = (Id) => {
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
    this.props.updateEmployee(employee)
    this.handleClose()
  }

  onChangeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const emPloyee = this.props.employee;

    return (
      <div>
        <Dialog
          open={this.props.openFormEdit}
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
            EDIT EMPLOYEE
              </DialogTitle>
          <DialogContent>
            <TextField fullWidth label="First Name" defaultValue={emPloyee.first_name} name="first_Name" />
            <TextField fullWidth label="Last Name" value={emPloyee.last_name} name="last_Name" />
            <TextField fullWidth label="Title" value={emPloyee.title} name="title" />
            <TextField fullWidth label="Email" value={get(emPloyee.account, "email", "")} name="email" />
            <TextField fullWidth label="Image" value={get(emPloyee, "account.image", "")} name="image" />
            <img
              style={{ margin: '2rem', width: 150, height: 200 }}
              src={get(emPloyee, "account.image", "")}
              alt=""
            />
            <TextField fullWidth label="User Name" value={get(emPloyee.account, "userName", "")} name="userName" />
            <TextField fullWidth label="Street" value={get(emPloyee.account, "address.street", "")} name="street" />
            <TextField fullWidth label="Country" value={get(emPloyee.account, "address.country", "")} name="country" />
            <TextField fullWidth label="City" value={get(emPloyee.account, "address.city", "")} name="city" />
          </DialogContent>
          <DialogActions>
            <Button style={{ margin: '1rem' }} variant="contained" onClick={() => this.handleUpdateEm(emPloyee.id)} color="primary">
              SAVE
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
    updateEmployee
  }))(FormEdit)
