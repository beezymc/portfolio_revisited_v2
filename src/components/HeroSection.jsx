import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Social from './Social.jsx';
import Zoom from '@mui/material/Zoom';
import { StaticImage } from 'gatsby-plugin-image';
import Background from '../images/Moon_Monster2.jpeg';

const heroStyles = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  zIndex: '1'
}

const HeroSection = () => {
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => {
    setShouldShow(true);
  }, []);
  return (
    <Paper sx={{ height: '92vh', position: 'relative' }} id='home'>
      <StaticImage
        style={heroStyles}
        src="../images/Moon_Monster2.jpeg"
        alt='San Diego Skyline'
      />
      <Box sx={{ backgroundColor: 'rgba(0,0,0,0.4)', height: '100%', width: '100%', position: 'absolute', zIndex: '2' }} />
      <Container maxWidth='md' sx={{ height: '100%' }}>
        <Grid container
          justifyContent='space-between'
          alignItems='center'
          sx={{ height: '100%', zIndex: '100', position: 'relative' }}
        >
          <Zoom in={shouldShow}>
            <Grid item sm={8}>
              <Typography component='h1' variant='h3' sx={{ color: '#fff' }}>
                Hi, my name is David! I'm a software engineer.
              </Typography>
              <Typography variant='h5' sx={{ color: '#fff' }}>
                I build websites, web applications, and responsive components with the goal of creating a fantastic user experience.
              </Typography>
              <Box my={2}>
                <Button href='mailto:david.rajec@gmail.com' variant='outlined' color='error'>
                  Get in Touch!
                </Button>
              </Box>
            </Grid>
          </Zoom>
          <Grid item sx={{ display: { xs: 'none', md: 'block' }}}>
            <Social direction={'column'}/>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default HeroSection;