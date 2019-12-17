import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { getEmployeeById, resetEmployee, updateEmployee } from "./actions";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { get } from "lodash";
import { Paper, Typography, Button, IconButton } from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DoneAllIcon from "@material-ui/icons/DoneAll";

const useStyles = () => ({
  root: {
    width: "100%",
    height: "auto",
    display: "flex"
  },
  left: {
    width: "20%",
    height: "auto"
  },
  image: {
    marginTop: "1rem",
    width: "80%",
    height: 280
  },
  right: {
    width: "80%"
  },
  profile: {
    display: "flex"
  },
  info: {
    width: "35%",
    padding: "2rem",
    margin: "1rem"
  },
  bt_gr: {
    float: "right"
  },
  btn: {
    margin: "1rem"
  },
  text: {
    float: "left",
    fontWeight: "bold"
  }
});

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employ: {},
      success: false
    };
  }

  componentDidMount() {
    this.props.getEmployeeById(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.resetEmployee();
  }

  handleUpdateEm = Id => {
    const employState = this.state.employ;
    const employee = {
      first_name: employState.first_name,
      last_name: employState.last_name,
      title: employState.title,
      account: {
        email: employState.email || get(employState.account, "email", ""),
        image: employState.image || get(employState, "account.image", ""),
        userName:
          employState.userName || get(employState.account, "userName", ""),
        address: {
          street:
            employState.street ||
            get(employState.account, "address.street", ""),
          city:
            employState.city || get(employState.account, "address.city", ""),
          country:
            employState.country ||
            get(employState.account, "address.country", ""),
        }
      }
    };
    this.props.updateEmployee(employee, Id);
    this.setState({ success: true });
  };

  onChangeValue = e => {
    const { name, value } = e.target;
    this.setState(prevState => {
      prevState = this.props.employee;
      prevState[name] = value;
      return { employ: prevState };
    });
  };

  onClickBackButton = () => {
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    const employ = this.props.employee;
    return (
      <div className={classes.root}>
        <div className={classes.left}>
          <img
            className={classes.image}
            src={get(employ, "account.image", "")}
            alt=""
          />
          <IconButton>
            <AddAPhotoIcon color="primary" />
          </IconButton>
        </div>
        <div className={classes.right}>
          <div className={classes.profile}>
            <Paper className={classes.info}>
              <Typography style={{ fontWeight: "bold", color: "blue" }}>
                INFO
              </Typography>
              <label className={classes.text}>First Name</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                defaultValue={employ.first_name}
                name="first_name"
                onChange={this.onChangeValue}
              />
              <label className={classes.text}>Last Name</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="Title"
                defaultValue={employ.last_name}
                name="last_name"
                onChange={this.onChangeValue}
              />
              <label className={classes.text}>Title</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="Title"
                defaultValue={employ.title}
                name="title"
                onChange={this.onChangeValue}
              />
            </Paper>
            <Paper className={classes.info}>
              <Typography style={{ fontWeight: "bold", color: "blue" }}>
                INFO
              </Typography>
              <label className={classes.text}>Street</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="Street"
                defaultValue={get(employ.account, "address.street", "")}
                name="street"
                onChange={this.onChangeValue}
              />
              <label className={classes.text}>Country</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="Country"
                defaultValue={get(employ.account, "address.country", "")}
                name="country"
                onChange={this.onChangeValue}
              />
              <label className={classes.text}>City</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="City"
                defaultValue={get(employ.account, "address.city", "")}
                name="city"
                onChange={this.onChangeValue}
              />
            </Paper>
            <Paper className={classes.info}>
              <Typography style={{ fontWeight: "bold", color: "blue" }}>
                INFO
              </Typography>
              <label className={classes.text}>User Name</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="User Name"
                defaultValue={get(employ.account, "userName", "")}
                name="userName"
                onChange={this.onChangeValue}
              />
              <label className={classes.text}>Email</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="Email"
                defaultValue={get(employ.account, "email", "")}
                name="email"
                onChange={this.onChangeValue}
              />
            </Paper>
          </div>
          <div className={classes.bt_gr}>
            <Button
              className={classes.btn}
              variant="contained"
              color="default"
              onClick={this.onClickBackButton}
            >
              Back
            </Button>
            <Button
              className={classes.btn}
              onClick={() => this.handleUpdateEm(employ.id)}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
            <Button
              className={classes.btn}
              variant="contained"
              color="secondary"
            >
              Cancel
            </Button>
          </div>
        </div>
        <Dialog
          open={this.state.success}
          keepMounted
          onClose={this.handleClose}
          onBackdropClick={() => this.setState({ success: false })}
          maxWidth="lg"
        >
          <DialogContent>
            Update Success!!! <DoneAllIcon color="green" />
          </DialogContent>
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
  withStyles(useStyles),
  connect(mapStateToProps, {
    getEmployeeById,
    resetEmployee,
    updateEmployee
  })
)(withRouter(Detail));
