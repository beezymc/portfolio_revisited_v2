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

const heroStyles = {
  height: '100%',
  zIndex: '1',
}

const smallHeroStyles = {
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
    <>
      <Paper sx={{ height: '92vh', display: { xs: 'none', md: 'block' } }} id='home'>
        <Grid container
          sx={{ height: '100%', zIndex: '100', width: '100%' }}
        >
          <Grid item xs={6} sx={{ height: '100%', width: '100%' }}>
            <StaticImage
              style={heroStyles}
              src="../images/david_art.png"
              alt='David Art'
            />
          </Grid>
          <Zoom in={shouldShow}>
            <Grid item xs={6} >
              <Container sx={{ height: '100%', justifyContent: "center", alignItems: 'center', display: 'flex', flexDirection: 'column',}}>
                <Typography component='h1' variant='h3' sx={{ color: '#fff', paddingLeft: '10%', paddingRight: '10%' }}>
                  Hi, I'm David! I'm a web developer.
                </Typography>
                <Typography variant='h5' mb={2} sx={{ color: '#fff' , paddingLeft: '10%', paddingRight: '10%' }}>
                  I build websites, web applications, and responsive components with the goal of creating a fantastic user experience.
                </Typography>
                <Grid item sx={{ justifyContent: 'left', display: 'flex' }}>
                  <Social direction={'row'}/>
                </Grid>
                <Box my={2}>
                  <Button href='mailto:david.rajec@gmail.com' variant='outlined' color='primary'>
                    Get in Touch!
                  </Button>
                </Box>
              </Container>
            </Grid>
          </Zoom>
        </Grid>
      </Paper>
      <Paper sx={{ height: '88vh', position: 'relative', display: { xs: 'block', md: 'none' } }} id='home'>
        <StaticImage
          style={smallHeroStyles}
          src="../images/david_art.png"
          alt='David Art Photo'
        />
        <Box sx={{ backgroundColor: 'rgba(0,0,0,0.8)', height: '100%', width: '100%', position: 'absolute', zIndex: '2' }} />
        <Container maxWidth='md' sx={{ height: '100%' }}>
          <Grid container
          justifyContent='center'
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
              <Grid item>
                <Social direction={'row'}/>
              </Grid>
              <Box my={2}>
                <Button href='mailto:david.rajec@gmail.com' variant='outlined' color='primary'>
                  Get in Touch!
                </Button>
              </Box>
            </Grid>
          </Zoom>
        </Grid>
      </Container>
    </Paper>
  </>
  );
};

export default HeroSection;