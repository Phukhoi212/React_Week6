import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import InputComponent from "../InputComponent/InputComponent";
// import { getEmployeeById } from "../../containers/Details/actions";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { get } from "lodash";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

class FormEdit extends React.Component {
  state = {
    open: false
  };

  // componentDidMount() {
  //   // console.log("Id", this.props.match.params.id);
  //   this.props.getEmployeeById(this.props.Id);
  // }


  handleClose = () => {
    this.setState({
      open: false
    });
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
            <InputComponent text="First Name" value={emPloyee.first_name} />
            <InputComponent text="Last Name" value={emPloyee.last_name} />
            <InputComponent text="Title" value={emPloyee.title} />
            <InputComponent text="Email" value={get(emPloyee.account, "email", "")} />
            <InputComponent text="Image" value={get(emPloyee, "account.image", "")} />
            <img
              style={{margin: '2rem', width: 150, height: 200 }}
              src={get(emPloyee, "account.image", "")}
              alt=""
            />
            <InputComponent text="User Name" value={get(emPloyee.account, "userName", "")} />
            <InputComponent text="Street" value={get(emPloyee.account, "address.street", "")} />
            <InputComponent text="Country" value={get(emPloyee.account, "address.country", "")} />
            <InputComponent text="City" value={get(emPloyee.account, "address.city", "")} />
          </DialogContent>
          <DialogActions>
            <Button style={{ margin: '1rem' }} variant="contained" onClick={this.handleClose} color="primary">
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
  }))(FormEdit)
