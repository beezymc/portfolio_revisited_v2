import React, { useState } from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/ToolBar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Resume from '../../static/David Rajec Resume.pdf';

const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '/blog'},
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky' sx={{ color: '#fff', backgroundColor: '#212121' }}>
      <Container maxWidth='md'>
        <ToolBar disableGutters>
          <Avatar sx={{ marginRight: 'auto', color: '#fff', backgroundColor: 'black', borderRadius: 0, height: 30, border: '2px solid gray', width: 80, borderLeft: '12px solid transparent', borderRight: '12px solid transparent' }}>
            <Link href='#home' sx={{ color: '#fff', textDecoration: 'none', '&:hover': { color: '#d17505' } }}>
              {"<D />"}
            </Link>
          </Avatar>
            {navigationLinks.map((item, index) => (
              <Link
                sx={{ display: { xs: 'none', md: 'block' }, color: '#fff', marginRight: '20px', '&:hover': { color: '#d17505' } }}
                color='textPrimary'
                variant='button'
                underline='none'
                href={item.href}
                key={index}
              >
                {item.name}
              </Link>
            ))}
            <Button sx={{ display: { xs: 'none', md: 'block' }, marginRight: '20px' }} href='/David Rajec Resume.pdf' variant='outlined' color='error'>
              Resume
            </Button>
          <IconButton onClick={() => setOpen(true)} sx={{ display: { xs: 'block', md: 'none' }, "&:hover, &.Mui-focusVisible": { backgroundColor: "rgba(255, 255, 255, .3)" }}}>
            <MenuIcon sx={{ display: { xs: 'block', md: 'none'}, color: '#fff' }}/>
          </IconButton>
        </ToolBar>
      </Container>
      <SwipeableDrawer PaperProps={{ sx: { backgroundColor: "#424242", color: "#fff" }}} anchor='right' open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)}>
        <div>
          <IconButton onClick={() => setOpen(false)} sx={{ "&:hover, &.Mui-focusVisible": { backgroundColor: "rgba(255, 255, 255, .3)" }}}>
            <ChevronRightIcon sx={{ color: '#fff' }}/>
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item, index) => (
            <ListItem key={index}>
              <Link
                color='#fff'
                variant='button'
                underline='none'
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
          <ListItem>
            <Button href={Resume} variant='outlined' color='error'>
              Resume
            </Button>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Header;