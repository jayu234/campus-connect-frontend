import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  Grid,
} from "@mui/material";
import { Formik, Form } from "formik";

import PersonalDetails from "./Forms/PersonalDetails";
import CollegeDetails from "./Forms/CollegeDetails";
import Credentials from "./Forms/Credentials";
import InterestDetails from "./Forms/InterestDetails";
import SignupSuccess from "./SignupSuccess";

import validationSchema from "./FormModel/validationSchema";
import model from "./FormModel/model";
import initialValues from "./FormModel/initialValues";

import { useDispatch } from "react-redux"
import { userSignup } from "../../store/userSlice"

const steps = [
  "Personal Details",
  "Login Details",
  "Education Details",
  "Area of Interest",
];
const { formId, formField } = model;

export default function SignupForm() {
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const dispatch = useDispatch();

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const _renderStepContent = (step, setFieldValue, values)=>{
    switch (step) {
      case 0:
        return <PersonalDetails formField={formField} />;
      case 1:
        return <Credentials formField={formField} />;
      case 2:
        return <CollegeDetails formField={formField} setFieldValue={setFieldValue} values={values} />;
      case 3:
        return <InterestDetails/>;
      default:
        return <div>Not Found</div>;
    }
  }
  async function _submitForm(values, actions) {
    dispatch(userSignup(values));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      console.log({...values, interest: ["Web Developement", "App Development", "Data Science"]});
      _submitForm({...values, interest: ["Web Developement", "App Development", "Data Science"]}, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Signup
      </Typography>
      <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start'  , marginTop: '1.5rem' }}>
        <Grid component={"aside"} item xs={3}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item xs={9}>
          <React.Fragment>
            {activeStep === steps.length ? (
              <SignupSuccess />
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting, setFieldValue, values }) => (
                  <Form id={formId}>
                    {_renderStepContent(activeStep, setFieldValue, values)}

                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      {activeStep !== 0 && (
                        <Button
                          onClick={_handleBack}
                          sx={{ marginTop: "24px", marginLeft: "8px" }}
                        >
                          Back
                        </Button>
                      )}
                      <div style={{ margin: "8px" }}>
                        <Button
                          disabled={isSubmitting}
                          type="submit"
                          variant="contained"
                          color="primary"
                          sx={{ marginTop: "24px", marginLeft: "8px" }}
                        >
                          {isLastStep ? "Sign up" : "Next"}
                        </Button>
                        {isSubmitting && (
                          <CircularProgress
                            size={24}
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </React.Fragment>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
