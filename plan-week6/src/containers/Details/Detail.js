import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { getEmployeeById, resetEmployee } from "./actions";
import { updateEmployee } from "../Home/actions";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { get } from "lodash";
import { Paper, Typography, Button, IconButton } from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

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
      employee: {}
    };
  }

  componentDidMount() {
    this.props.getEmployeeById(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.resetEmployee();
  }

  componentDidUpdate(prevState) {
    console.log("prev", prevState.employee, this.state);
    if (prevState.employee !== this.state.employee) {
      console.log("here");
    }
  }

  handleUpdateEm = Id => {
    const employ = this.props.employee;
    this.props.updateEmployee(employ, Id);
    this.onClickBackButton();
  };

  onChangeValue = e => {
    console.log("logs", [e.target.name], e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onClickBackButton = () => {
    this.props.history.push("/");
  };

  render() {
    console.log("--opop", this.state.employee);
    const { classes } = this.props;
    const employee = this.props.employee;
    return (
      <div className={classes.root}>
        <div className={classes.left}>
          <img
            className={classes.image}
            src={get(employee, "account.image", "")}
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
                defaultValue={employee.first_name}
                name="first_Name"
                onChange={this.onChangeValue}
              />
              <label className={classes.text}>Last Name</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="Last Name"
                defaultValue={employee.last_name}
                name="last_Name"
                onChange={this.onChangeValue}
              />
              <label className={classes.text}>Title</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="Title"
                defaultValue={employee.title}
                name="title"
                onChange={this.onChangeValue}
              />
            </Paper>
            <Paper className={classes.info}>
              <Typography style={{ fontWeight: "bold", color: "blue" }}>
                ADDRESS
              </Typography>
              <label className={classes.text}>Street</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="Street"
                defaultValue={get(employee.account, "address.street", "")}
                name="street"
                onChange={this.onChangeValue}
              />
              <label className={classes.text}>Country</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="Country"
                defaultValue={get(employee.account, "address.country", "")}
                name="country"
                onChange={this.onChangeValue}
              />
              <label className={classes.text}>City</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="City"
                defaultValue={get(employee.account, "address.city", "")}
                name="city"
                onChange={this.onChangeValue}
              />
            </Paper>
            <Paper className={classes.info}>
              <Typography style={{ fontWeight: "bold", color: "blue" }}>
                USER
              </Typography>
              <label className={classes.text}>User Name</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="User Name"
                defaultValue={get(employee.account, "userName", "")}
                name="userName"
                onChange={this.onChangeValue}
              />
              <label className={classes.text}>Email</label>
              <input
                style={{ width: "100%", height: 40, border: "none" }}
                fullWidth
                label="Email"
                defaultValue={get(employee.account, "email", "")}
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
              onClick={() => this.handleUpdateEm(employee.id)}
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
