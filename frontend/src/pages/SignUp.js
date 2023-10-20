import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Link as MuiLink } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import bot_logo from "../assets/bot_logo.png";

import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { Form, Link, useNavigation, useActionData } from "react-router-dom";
import SimpleBackdrop from "../components/SimpleBackdrop";
import Title from "../components/Title";
import videosrch_logo from "../assets/videosrch_logo.jpg"; // Replace with your image path
import StickyFooter from "../components/footer/StickyFooter";
import { CardMedia, Typography } from "@mui/material";

function SignUp() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const data = useActionData();

  useEffect(() => {
    // clear form data
  }, [data]);

  return (
    <>
      <CssBaseline />
      {isSubmitting && <SimpleBackdrop />}
      <Grid container component="main" sx={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            background: "linear-gradient(to bottom, #3f51b5, #2196f3)",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            // Adjust width and padding for mobile screens
            "@media (max-width: 600px)": {
              width: "100%",
              padding: "1rem",
            },
          }}
        >
          <CardMedia
            component="img"
            image={videosrch_logo} // Replace with your image path
            alt="VideoSrch Logo" // Replace with your alt text
            sx={{
              width: "90%", // Adjust the width for mobile screens
              maxWidth: "300px", // Limit the maximum width of the image
              borderRadius: "20px", // Add border radius to the image
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
            }}
          />
          <Typography variant="h4" component="div" mt={2} sx={{ fontSize: "18px" }}>
            VideoSrch
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
       <Paper
  elevation={6}
  sx={{
    width: "100%",
    maxWidth: "500px",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#f0f0f0", // Light gray background color
  }}
>
 

 

            {data && data.message && (
              <Alert severity="error">{data.message}</Alert>
            )}
            {data && data.errors && (
              <ul>
                {Object.values(data.errors).map((err) => (
                  <Alert severity="warning" key={err}>
                    {err}
                  </Alert>
                ))}
              </ul>
            )}
               <CardMedia
            component="img"
            image={bot_logo}
            alt="Paella dish"
            sx={{
              width: "15%",
              margin: "auto",
              paddingTop: "5%",
              paddingBottom: "2%",
            }}
          />
          <Form
            method="post"
            noValidate={false}
            style={{
              padding: "5%",
              // border: "1px solid black",
              borderRadius: "5px",
            }}
          >
             <Title color="primary">SignUp</Title>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}
              </Button>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Link to="/login">
                    <MuiLink variant="body2" fontSize="15px">
                      {" Sign in"}
                    </MuiLink>
                  </Link>
                </Grid>
                <Grid item xs={6}>
                </Grid>
              </Grid>
            </Box>
          </Form>
		  
		  
          </Paper>
        </Grid>
      </Grid>
      <StickyFooter />
    </>
  );
}

export default SignUp;
