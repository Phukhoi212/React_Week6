import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { getEmployeeById } from "./actions";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { get } from "lodash";
import { Paper, Typography, Button } from "@material-ui/core";
import InputComponent from "../../components/InputComponent/InputComponent";

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
  }
});

class Detail extends React.Component {
  componentDidMount() {
    console.log("Id", this.props.match.params.id);
    this.props.getEmployeeById(this.props.match.params.id);
  }

  onClickBackButton= () => {
    this.props.history.push("/");
  }

  render() {
    console.log("router", this.props);
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
        </div>
        <div className={classes.right}>
          <div className={classes.profile}>
            <Paper className={classes.info}>
              <Typography style={{ fontWeight: "bold", color: "blue" }}>
                INFO
              </Typography>
              <InputComponent text="First Name" value={employee.first_name} />
              <InputComponent text="Last Name" value={employee.last_name} />
              <InputComponent text="Title" value={employee.title} />
            </Paper>
            <Paper className={classes.info}>
              <Typography style={{ fontWeight: "bold", color: "blue" }}>
                ADDRESS
              </Typography>
              <InputComponent
                text="City"
                value={get(employee.account, "address.city", "")}
              />
              <InputComponent
                text="Country"
                value={get(employee.account, "address.country", "")}
              />
              <InputComponent
                text="Street"
                value={get(employee.account, "address.street", "")}
              />
            </Paper>
            <Paper className={classes.info}>
              <Typography style={{ fontWeight: "bold", color: "blue" }}>
                USER
              </Typography>
              <InputComponent
                text="User Name"
                value={get(employee.account, "userName", "")}
              />
              <InputComponent
                text="Email"
                value={get(employee.account, "email", "")}
              />
            </Paper>
          </div>
          <div className={classes.bt_gr}>
            <Button className={classes.btn} variant="contained" color="default" onClick={this.onClickBackButton}>
              Back
            </Button>
            <Button className={classes.btn} variant="contained" color="primary">
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
    getEmployeeById
  })
)(withRouter(Detail));
