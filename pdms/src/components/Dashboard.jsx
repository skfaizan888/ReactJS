import React from "react";
import {
  Grid,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
} from "@mui/material";

export const Dashboard = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          +Add
        </Grid>
        <Grid item>
          <Table>
            <TableHead className="header">
              <TableRow>
                <TableCell className="headeritem">#</TableCell>
                <TableCell className="headeritem">First Name</TableCell>
                <TableCell className="headeritem">Last Name</TableCell>
                <TableCell className="headeritem">Email</TableCell>
                <TableCell className="headeritem">State</TableCell>
                <TableCell className="headeritem">City</TableCell>
                <TableCell className="headeritem">Pincode</TableCell>
                <TableCell className="headeritem" colSpan={2} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Akshay</TableCell>
                <TableCell>Patil</TableCell>
                <TableCell>akshay@gmail.com</TableCell>
                <TableCell>Goa</TableCell>
                <TableCell>Panjim</TableCell>
                <TableCell>45310</TableCell>
                <TableCell>
                  <Button className="btn" variant="contained">
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button className="btn" color="error" variant="contained">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
