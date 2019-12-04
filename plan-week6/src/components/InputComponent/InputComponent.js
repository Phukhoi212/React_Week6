import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Input } from "@material-ui/core";

const useStyles = () => ({
  root:{
    marginTop: '1rem'
  },
  text: {
    float: "left",
    fontWeight: "bold"
  }
});

class InputComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <label className={classes.text}>{this.props.text}</label>
        <Input fullWidth value={this.props.value} />
      </div>
    );
  }
}

export default withStyles(useStyles)(InputComponent);
