import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { StaticImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const photoStyles = {
  zIndex: 1,
  width: '100%',
  height: '100%',
  borderRadius: 5,
}

export default function About() {
  return (
    <>
    <Box id="about" sx={{ backgroundColor: '#0069d0'}} >
      <Container maxWidth="md" sx={{ display: { xs: 'none', md: 'block'} }} >
        <Box pt={8} pb={5}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Grid item sm={8}>
              <Container sx={{ borderBottom: '2px solid rgba(247, 106, 243, 1)', marginBottom: '2%', color: 'white' }}>
                <Typography component="h2" variant="h4" gutterBottom>
                  About Me
                </Typography>
              </Container>
              <Typography variant="subtitle1" sx={{ color: 'white' }} paragraph>
                Programming has become my passion. For the past 1.5 years, I have been focused on coding and building web applications. I started out coding about 12 hours per week while working a fulltime job as an editor in academic publishing, focusing on computer science fundamentals, understanding web functionality, and creating small applications.
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'white' }} paragraph>
                After a year, I decided to jump into Hack Reactor. The bootcamp had been an amazing experience for me–a place where I could solidify my confidence in building fullstack applications. In my practice and at Hack Reactor, I continued to improve my dexterity in creating modern interactive UIs using various front end technologies such as React.js, jQuery, vanilla Javascript, CSS, and Material UI. I learned how to make a backend server using Express.js and Node.js, and the infrastructure needed to host my applications using AWS. I also learned how to set up and query PostgreSQL and MongoDB databases with my applications.
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'white' }} paragraph>
                One exciting project I completed during my bootcamp exploration involved scaling using AWS, detailed in the blogpost <a href="/scale-a-server">here</a>.
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'white' }} paragraph>
                I’m currently having a blast using these skills on personal projects while seeking professional opportunities to do so, too!
              </Typography>
            </Grid>
            <Grid item sx={{ position: "relative" }} sm={3}>
              <StaticImage
                src="../images/david_rl.jpg"
                alt='David Rajec profile image'
                style={photoStyles}
              />
              <Box sx={{ width: "100%", height: "100%", borderRadius: '5px', top: '10px', left: '10px', position: "absolute", border: "1px solid rgba(247, 106, 243, 1)", zIndex: '0' }}></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container maxWidth="md" sx={{ display: { xs: 'block', md: 'none'} }} >
        <Box pt={8} pb={5}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <Container sx={{ borderBottom: '2px solid rgba(247, 106, 243, 1)', marginBottom: '2%', color: 'white' }}>
                <Typography component="h2" variant="h4" gutterBottom>
                  About Me
                </Typography>
              </Container>
              <Typography variant="subtitle1" sx={{ color: 'white' }} paragraph>
                For the past 2 years, I have been focused on coding and building web applications. I started out coding about 12 hours per week while working a fulltime job as an editor in academic publishing, learning about computer science fundamentals, understanding how the web works, and creating small applications.
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'white' }} paragraph>
                After about a year, I decided to jump into Hack Reactor. The bootcamp had been an amazing experience–a place where I could solidify my confidence in building fullstack applications. In my practice and at Hack Reactor, I continued to improve my dexterity in creating modern interactive UIs using various front-end technologies such as React.js, jQuery, vanilla Javascript, CSS, and Material UI. I learned how to integrate and query PostgreSQL and MongoDB databases into my applications. I mastered how to make a backend server using Express.js and Node.js, and the infrastructure needed to host my applications using AWS.
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'white' }} paragraph>
                One exciting project I completed during my bootcamp exploration involved scaling using AWS, detailed in the blogpost <a href="/scale-a-server">here</a>.
              </Typography>
              <Typography variant="subtitle1" sx={{ color: 'white' }} paragraph>
                I’m currently having a blast using these skills on personal projects while seeking professional opportunities to do so, too!
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
    </>
  );
}
