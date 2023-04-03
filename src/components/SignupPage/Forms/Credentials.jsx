import { Grid} from "@mui/material";
import React from "react";
import InputField from "../../FormFields/InputField";

function Credentials(props) {
  const {
    formField: { phone, email, password, confirmPassword },
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={phone.name} label={phone.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={email.name} label={email.label} fullWidth autoComplete="username"/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField type="password" autoComplete="new-password" name={password.name} label={password.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField type="password" autoComplete="new-password" name={confirmPassword.name} label={confirmPassword.label} fullWidth/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Credentials;
