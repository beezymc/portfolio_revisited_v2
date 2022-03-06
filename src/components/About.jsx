import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { StaticImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import David from "../images/david_rl.jpg";

const content = [
  'I’m passionate about taking my creative energy into building efficient and highly functional web technologies to scale.',
  'Through my experience as an editor in the publishing industry, I honed a strong attention to detail, a penchant for leadership, the capacity to meet cutthroat deadlines, and an ability to explore budding technologies.',
  'That experience also extends to authorship, through which I’ve penned one fantasy novel and am currently gathering ideas for a sci-fi epic. I’m no stranger to planning and producing creative works.',
  'More recently, I had the opportunity to work with other software engineers in various sprints to create full-stack applications. I made it a priority to solve for problems that would benefit the group as a whole, whether it be engineering how our app would manage global state, or determining how our app’s components would flow together via client-side routing. Needless to say, I’m all about leaving my collaborators with a strong, positive impression.',
];

const photoStyles = {
  zIndex: 1,
  width: '100%',
  height: '100%',
  borderRadius: 5,
}

export default function About() {
  return (
    <Box id="about" sx={{ backgroundColor: 'rgb(36 21 10 / 87%)' }}>
      <Container maxWidth="md" >
        <Box pt={8} pb={5}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
          >
            <Grid item sm={8}>
              <Container sx={{ borderBottom: '2px solid rgba(209, 117, 5, 0.5)', marginBottom: '2%', color: 'white' }}>
                <Typography component="h2" variant="h4" gutterBottom>
                  About Me
                </Typography>
              </Container>
              {content.map((text) => (
                <Typography variant="subtitle1" key={text} sx={{ color: 'white' }} paragraph>
                  {text}
                </Typography>
              ))}
            </Grid>
            <Grid item sx={{ display: { xs: 'none', md: 'block'}, position: "relative" }} sm={3}>
              <StaticImage
                src="../images/david_rl.jpg"
                alt='David Rajec profile image'
                style={photoStyles}
              />
              <Box sx={{ width: "100%", height: "100%", borderRadius: '5px', top: '10px', left: '10px', position: "absolute", border: "1px solid #d17505", zIndex: '0' }}></Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
