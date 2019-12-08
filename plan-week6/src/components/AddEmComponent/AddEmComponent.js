import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import InputComponent from "../InputComponent/InputComponent";
import { createEmployee } from "../../containers/Home/actions";
import { connect } from "react-redux";
import compose from "recompose/compose";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class DialogComponent extends React.Component {
  state = {
    open: false,
    fName: '',
    lName: '',
    email: '',
  };

  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  onChangeValue = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClickCreate = () => {
    this.props.createEmployee(this.state.fName, this.state.lName, this.state.email)
    this.handleClose()
  }

  render() {
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
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={this.onChangeValue}
              id="fName"
              label="First Name"
              name="fName"
              autoComplete="fName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={this.onChangeValue}
              id="lName"
              label="Last Name"
              name="lName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={this.onChangeValue}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
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
    //employee: state.DetailEmployeeReducer
  };
};

export default compose(
  connect(mapStateToProps, {
    createEmployee
  }))(DialogComponent);
