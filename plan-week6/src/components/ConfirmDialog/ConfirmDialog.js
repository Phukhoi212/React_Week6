import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class ConfirmDialog extends React.Component {

  render() {
    return (
      <div>
        <Dialog
          open={this.props.openDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle id="alert-dialog-slide-title">
            REMOVE EMPLOYEE
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {this.props.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={this.props.onClickConfirmDeleteEmployee} color="primary">
              OK
            </Button>
            <Button variant="contained" onClick={this.props.onCloseConfirmDialog} color="primary">
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default ConfirmDialog;