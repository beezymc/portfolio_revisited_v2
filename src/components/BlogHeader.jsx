import React from 'react';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/ToolBar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Header = () => {
  return (
    <AppBar position='sticky' sx={{ color: '#fff', backgroundColor: '#212121' }}>
      <Container maxWidth='md'>
        <ToolBar disableGutters>
          <Avatar sx={{ marginRight: 'auto', color: '#fff', backgroundColor: 'black', borderRadius: 0, height: 30, border: '2px solid gray', width: 80, borderLeft: '12px solid transparent', borderRight: '12px solid transparent' }}>
            <Link sx={{ color: '#fff', textDecoration: 'none', '&:hover': { color: '#90CAF9' } }} href='/'>
              {"<D />"}
            </Link>
          </Avatar>
          <Box sx={{ display: { xs: 'none', md: 'block'}, textAlign: 'center', margin: 'auto', paddingRight: '50px'}}>
            <Typography component='h1' variant='h4'>
              David Rajec's Blog
            </Typography>
          </Box>
          <Button sx={{ marginRight: '20px' }} href='mailto:david.rajec@gmail.com' variant='outlined' color='primary'>
            Get in Touch!
          </Button>
        </ToolBar>
      </Container>
    </AppBar>
  );
};

export default Header;