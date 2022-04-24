import React from "react";
import { Grid, TextField, Button } from "@mui/material";

export const AddPatient = () => {
  return (
    <div>
      <h2>Add Patient</h2>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField label="First Name" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Last Name" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Email" variant="outlined" />
        </Grid>
        <Grid item xs={6}></Grid>

        <Grid item xs={2}>
          <TextField label="State" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="City" variant="outlined" />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Pincode" variant="outlined" />
        </Grid>
      </Grid>
    </div>
  );
};
