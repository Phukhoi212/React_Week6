import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = () => ({
  root: {
    marginTop: '1rem'
  },
  text: {
    float: "left",
    fontWeight: "bold"
  }
});

class InputComponent extends React.Component {

  state={
    valueText: ''
  }

  onChangeValue = (e) => {
    this.setState({
      valueText: e.target.value,
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <label className={classes.text}>{this.props.text}</label>
        <TextField
          name={this.props.name}
          onChange={this.onChangeValue}
          fullWidth
          value={this.props.value}
          required={this.props.required}
        />
      </div>
    );
  }
}

export default withStyles(useStyles)(InputComponent);
