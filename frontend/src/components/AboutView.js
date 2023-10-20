import React from "react";
import { Typography, Grid, CardMedia } from "@mui/material";
import Title from "./Title";
function AboutView() {
  return (
    <>
      <Typography
        sx={{
          p: 2,
          mb: 2,
          backgroundColor: "white",
          borderRadius: "10px",
          boxSizing: "border-box",
          boxShadow: "0px 0px 10px silver",
        }}
        component="div"
        variant="div"
      >
        <Typography
          sx={{
            p: 2,
            fontSize: "14px",
          }}
          component="div"
          variant="body"
        >
         At VideoSrch, our mission is to empower individuals, businesses, and
        organizations to harness the potential of their video content. We
        believe that every video holds valuable information, and we're here to
        help you unlock it. Whether you're a content creator, educator, or
        business professional, VideoSrch is your trusted partner in managing,
        processing, and searching through videos.
        </Typography>
        <Typography
          sx={{
            p: 2,
            fontSize: "14px",
          }}
          component="div"
          variant="body"
        >
          theDigitalworkers builds and delivers a BOT based digital workforce
          that are trained and backed by NLP and OCR engines which help
          organisations to strengthen their RPA software platform which is
          robust, highly scalable, powerful and flexible. Our digital platform
          enables business operations to be agile, cost-effective through rapid
          automation of mundane and manual tasks by creating an IT supported
          “digital workforce”.
        </Typography>
        <Typography
          sx={{
            p: 1,
            m: 1,
            borderBottom: "1px solid gray",
          }}
          component="div"
          variant="body"
        >
          <Title color="primary">
            So how does Robotic Process Automation work?
          </Title>
        </Typography>
        <Typography
          sx={{
            p: 2,
            fontSize: "14px",
          }}
          component="div"
          variant="body"
        >
          RPA BOTs or theDigitalworkers BOTs are trained to learn and adapt to
          all user tasks just like a human would do, and streamline the business
          processes in various organisations and as such build a human
          interaction with the likes of voice, chat, email, text or any form the
          organisations would prefer their final data to be. Multiply them, and
          instantly deploy more as you go. They constantly report on their
          progress so you can go even bigger and better by using operational and
          business predictability, while improving strategically.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5.7}>
            <Typography
              sx={{
                p: 2,
              }}
              component="div"
              variant="body"
            >
              RPA BOTs or theDigitalworkers BOTs are trained to learn and adapt
              to all user tasks just like a human would do, and streamline the
              business processes in various organisations and as such build a
              human interaction with the likes of voice, chat, email, text or
              any form the organisations would prefer their final data to be.
              Multiply them, and instantly deploy more as you go. They
              constantly report on their progress so you can go even bigger and
              better by using operational and business predictability, while
              improving strategically
            </Typography>
          </Grid>
          <Grid item xs={5.7}>
            <CardMedia
              component="img"
              //   height="20"
              image="https://botaiml.com/images/aboutus-right.gif"
              alt="green iguana"
            />
          </Grid>
        </Grid>
      </Typography>
    </>
  );
}

export default AboutView;
