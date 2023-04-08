import { Autocomplete, Grid, TextField } from "@mui/material";
import React from "react";
import { Field} from "formik";

const interestsData = [
  "Web Developement",
  "App Development",
  "Data Science",
  "Data Analyst",
  "Quality Analyst",
  "Software Development",
  "Machine Learning",
  "Artificial intelligence",
  "Python Programming",
  "React Developer",
  "Laravel Developer",
];
function InterestDetails(props) {
  const {formField: { interests }} = props;
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Field name="interests">
            {({ field, form }) => (
              <Autocomplete
                multiple
                disableCloseOnSelect
                options={interestsData}
                getOptionLabel={(option) => option}
                defaultValue={[]}
                value={field.value}
                onChange={(event, newValue) => {
                  form.setFieldValue('interests', newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label={interests.label}
                    error={
                      form.touched.interests &&
                      Boolean(form.errors.interests)
                    }
                    helperText={
                      form.touched.interests && form.errors.interests
                    }
                  />
                )}
              />
            )}
          </Field>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default InterestDetails;
