import React from 'react';
import GithubIcon from '@mui/icons-material/Github';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import catwalk from '../images/Catwalk.png';
import portfolio from '../images/Portfolio.png';
import ratingsReviews from '../images/Ratings_Reviews.png';
import sayWhen from '../images/SayWhen.png';


const Project = ({ title, description, imageUrl, tags, links }) => {
  return (
    <Grid item>
      <Card sx={{ display: 'flex', boxShadow: '2px 2px 2px rgba(247, 106, 243, 0.5)', color: '#fff', backgroundColor: '#424242' }}>
        <div>
          <CardContent>
            <Typography variant='h5' paragraph>
              <Box component='span' sx={{ borderBottom: '2px solid rgba(247, 106, 243, 0.5)' }}>{title}</Box>
            </Typography>
            <Typography variant='subtitle1' paragraph>
              {description}
            </Typography>
            <Box sx={{ display: { xs: 'block', md: 'none' }}}>
              {tags.map((tag) => (
                <Chip
                  sx={{ marginRight: '5px', marginBottom: '5px', color: '#fff' }}
                  label={tag}
                  variant='outlined'
                  key={tag}
                />
              ))}
            </Box>
          </CardContent>
          <CardActions>
            <Box sx={{ marginRight: 'auto' }}>
              {links.map((linkItem, index) => (
                <IconButton href={linkItem.href} key={index} target="_blank" sx={{ "&:hover, &.Mui-focusVisible": { backgroundColor: "rgba(255, 255, 255, .3)" }}}>
                  <linkItem.icon sx={{ color: '#fff' }}/>
                </IconButton>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' }}}>
              {tags.map((tag) => (
                <Chip
                  sx={{ marginRight: '5px', marginBottom: '5px', color: '#fff' }}
                  label={tag}
                  variant='outlined'
                  key={tag}
                />
              ))}
            </Box>
          </CardActions>
        </div>
        <CardMedia component='img' image={imageUrl} sx={{ display: { xs: 'none', md: 'block'}, width: '150px'}}>
        </CardMedia>
      </Card>
    </Grid>
  );
}

const Projects = () => {
  return (
    <Box sx={{ backgroundColor: '#303030', color: '#fff', width: '100vw', paddingBottom: '5%' }}>
      <Container maxWidth='md' id='projects' >
        <Box pt={8} mb={2}>
          <Typography variant='h4'>Projects</Typography>
        </Box>
        <Grid container direction='column' spacing={4}>
          {projectsData.map((data, index) => (
            <Project {...data} key={index}/>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;

const projectsData = [
  {
    title: "This Portfolio",
    description:
      "This is the portfolio you're on! Features of this portfolio include: header, hero section, about me, projects, footer, blog, and blog posts.",
    imageUrl: portfolio,
    tags: ["React", "Material UI", "Gatsby.js", "AWS S3"],
    links: [
      {
        icon: GithubIcon,
        href: "https://github.com/beezymc/portfolio_revisited_v2",
      }
    ],
  },
  {
    title: "Ratings and Reviews",
    description:
      "This project involved scaling a backend API endpoint for a shopping web application. The following was required: ETL of previously-stored data into a new database, developing a cache, creating a server with efficient queries, deploying the server and database, scaling the server to multiple instances, and introducing a load balancer.",
    imageUrl: ratingsReviews,
    tags: ["Node", "Express", "PostgreSQL", "Nginx", "REDIS", "Docker", "NewRelic", "AWS EC2/Cloudwatch"],
    links: [
      {
        icon: GithubIcon,
        href: "https://github.com/beezymc/Ratings-and-Reviews",
      },
    ],
  },
  {
    title: "Catwalk",
    description:
      "In this project, two colleagues and I built the product view page of a shopping app. Features I implemented include: client-side routing, global state management, the creation of related items and outfits carousel components, and deployment.",
    imageUrl: catwalk,
    tags: ["Node", "Express", "React", "React-Router", "Redux", "CSS3", "HTML5", "Docker", "AWS EC2"],
    links: [
      {
        icon: GithubIcon,
        href: "https://github.com/beezymc/Catwalk",
      },
      {
        icon: OpenInNewIcon,
        href: "http://54.210.174.187/product/63609/",
      },
    ],
  },
  {
    title: "SayWhen!",
    description:
      "This is a 2-day project in which I created an app that allows a user to create a weekly availability calendar and share that calendar with others, who can then schedule activities using that availability as a reference.",
    imageUrl: sayWhen,
    tags: ["Node", "PostgreSQL", "Prisma", "Next.js", "Material UI", "Vercel"],
    links: [
      {
        icon: GithubIcon,
        href: "https://github.com/beezymc/SayWhen",
      },
      {
        icon: OpenInNewIcon,
        href: "https://saywhen.vercel.app/",
      },
    ],
  },
];