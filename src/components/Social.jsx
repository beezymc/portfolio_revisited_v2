import React from 'react';
import Github from '@mui/icons-material/Github';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const socialItems = [
  {icon: Github, url: 'https://github.com/beezymc'},
  {icon: Twitter, url: 'https://twitter.com/drajec'},
  {icon: LinkedIn, url: 'https://www.linkedin.com/in/davidrajec/'}
];

const Social = ({ direction }) => {
  return (
    <div>
      <Grid container direction={direction || 'row'} spacing={1}>
        {socialItems.map((item, index) => (
          <Grid item key={index}>
            <Link href={item.url} target="_blank">
              <IconButton sx={{ "&:hover, &.Mui-focusVisible": { backgroundColor: "rgba(255, 255, 255, .3)" } }}>
                <item.icon sx={{ color: '#fff' }}/>
              </IconButton>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Social;