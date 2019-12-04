import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Link as RouterLink } from "react-router-dom";
import AddEmComponent from '../AddEmComponent/AddEmComponent'


const useStyles = theme => ({
  root: {
    width: "100%",
    marginTop: "2rem",
    overflowX: "auto"
  },
  table: {
    minWidth: 650,
    border: "1px solid gray"
  },
  title: {
    color: "#000",
    fontWeight: "bold"
  },
});

class TableUsers extends React.Component {
  render() {
    const { classes } = this.props;
    const list = this.props.listEmployee;
    return (
      <Paper className={classes.root}>
        <AddEmComponent/>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.title}>ID</TableCell>

              <TableCell align="right" className={classes.title}>
                Name
              </TableCell>

              <TableCell align="right" className={classes.title}>
                Email
              </TableCell>
              <TableCell align="right" className={classes.title}>
                City
              </TableCell>
              <TableCell align="right" className={classes.title}>
                UserName
              </TableCell>
              <TableCell align="center" className={classes.title}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map(em => (
              <TableRow key={em.id}>
                <TableCell scope="row">{em.id}</TableCell>

                <TableCell align="right">
                  <RouterLink
                    to={{
                      pathname: `/employees/${em.id}`
                    }}
                  >
                    {em.first_name} {em.last_name}
                  </RouterLink>
                </TableCell>

                <TableCell align="right">{em.account.email}</TableCell>
                <TableCell align="right">{em.account.address.city}</TableCell>
                <TableCell align="right">{em.account.userName}</TableCell>
                <TableCell align="center">
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(useStyles)(TableUsers);
