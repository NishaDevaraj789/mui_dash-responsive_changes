import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MediaUploadZone from "./MediaUploadZone";

const steps = ["Select / Preview", "Upload"];

export default function MediaUploadStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [hasFile, sethasFile] = React.useState(false);
  const [isUploaded, setisUploaded] = React.useState(false);

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const sendDataToParent = (hasFile, isUploaded) => {
    // the callback. Use a better name
    sethasFile(hasFile);
    setisUploaded(isUploaded);
  };

  return (
    <Box
      sx={{
        p: 2,
        mb: 2,
        width: "100%",
        height:"570px",
        // position:"absolute",
        backgroundColor: "white",
        borderRadius: "10px",
        boxSizing: "border-box",
        boxShadow: "0px 0px 10px silver",
        // overflow:"-moz-hidden-unscrollable"
     }}
    >
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 4, mb: 1, textAlign: "center" }}>
            Thanks for using video search !
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <MediaUploadZone
            stepIndex={activeStep}
            sendDataToParent={sendDataToParent}
            reset
          />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleReset}
              sx={{ mr: 1 }}
            >
              Reset
            </Button>
            <Box 
            
            sx={{
               // Align children to the right
              flex: "1 1 auto",
              ml: 1 ,
            }}/>

            {activeStep === 0 ? (
              <Button onClick={handleNext} sx={{ mr: 1 }} disabled={!hasFile} >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            ) : (
              <Button onClick={handleNext}   disabled={!isUploaded}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
