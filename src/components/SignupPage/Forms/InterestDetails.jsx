import { Autocomplete, Grid } from "@mui/material";
import React from "react";
import InputField from "../../FormFields/InputField";

const interests = [
  { label: "Web Developement", value: "Web Developement" },
  { label: "App Development", value: "App Development" },
  { label: "Data Science", value: "Data Science" },
  { label: "Data Analyst", value: "Data Analyst" },
  { label: "Quality Analyst", value: "Quality Analyst" },
  { label: "Software Development", value: "Software Development" },
  { label: "Machine Learning", value: "Machine Learning" },
  { label: "Artificial intelligence", value: "Artificial intelligence" },
  { label: "Python Programming", value: "Python Programming" },
  { label: "React Developer", value: "React Developer" },
  { label: "Laravel Developer", value: "Laravel Developer" },
];

function InterestDetails() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Autocomplete
            multiple
            id="interest"
            name="interest"
            options={interests}
            renderInput={(params) => (
              <InputField
                {...params}
                name="interest"
                label="Area of interest *"
                fullWidth
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default InterestDetails;
