import { Grid, Autocomplete } from "@mui/material";
import React from "react";
import colleges from "../../../data/collegeName";
import InputField from "../../FormFields/InputField";

const courses = [
  { label: "Information Technology", value: "Information Technology" },
  { label: "Computer Science", value: "Computer Science" },
  { label: "Civil Engineering", value: "Civil Engineering" },
  { label: "Electronics Engineering", value: "Electronics Engineering" },
  { label: "Electrical Engineering", value: "Electrical Engineering" },
  { label: "Mechanical Engineering", value: "Mechanical Engineering" },
  { label: "Production Engineering", value: "Production Engineering" },
  { label: "Mathemetics", value: "Mathemetics" },
];

const cities = [
  { label: "Anand", value: "Anand" },
  { label: "Rajkot", value: "Rajkot" },
  { label: "Junagadh", value: "Junagadh" },
  { label: "Vadodara", value: "Vadodara" },
  { label: "Ahemadabad", value: "Ahemadabad" },
  { label: "Surat", value: "Surat" },
];

function CollegeDetails(props) {
  const {
    formField: { college, course, city },
    setFieldValue,
    values,
  } = props;

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Autocomplete
            id="college"
            name="college"
            options={colleges}
            onChange={(e, value) => {
              setFieldValue("college", value ? value.value : "");
            }}
            renderInput={(params) => (
              <InputField
                {...params}
                name={college.name}
                label={college.label}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            id="course"
            name="course"
            options={courses}
            onChange={(e, value) => {
              setFieldValue("course", value ? value.value : "");
            }}
            renderInput={(params) => (
              <InputField
                {...params}
                name={course.name}
                label={course.label}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            id="city"
            name="city"
            options={cities}
            onChange={(e, value) => {
              setFieldValue("city", value ? value.value : "");
            }}
            renderInput={(params) => (
              <InputField
                {...params}
                name={city.name}
                label={city.label}
                fullWidth
              />
            )}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CollegeDetails;
