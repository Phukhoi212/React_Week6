import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import InputComponent from "../InputComponent/InputComponent";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class DialogComponent extends React.Component {
  state = {
    open: false
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
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          maxWidth="md"
          fullWidth
        >
          <DialogTitle id="alert-dialog-slide-title">
            ADD EMPLOYEE
          </DialogTitle>
          <DialogContent>
            <InputComponent text="First Name"/>
            <InputComponent text="Last Name"/>
            <InputComponent text="Title"/>
            <InputComponent text="Email"/>
            <InputComponent text="Image"/>
            <InputComponent text="User Name"/>
            <InputComponent text="Street"/>
            <InputComponent text="Country"/>
            <InputComponent text="City"/>            
          </DialogContent>
          <DialogActions>
            <Button style={{margin: '1rem'}} variant="contained" onClick={this.handleClose} color="primary">
              CREATE
            </Button>
            <Button style={{margin: '1rem'}} variant="contained" onClick={this.handleClose} color="primary">
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DialogComponent;
