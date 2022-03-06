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
      <Card sx={{ display: 'flex', boxShadow: '2px 2px 2px rgba(209, 117, 5, 0.5)', color: '#fff', backgroundColor: '#424242' }}>
        <div>
          <CardContent>
            <Typography variant='h5' paragraph>
              <Box component='span' sx={{ borderBottom: '2px solid rgba(209, 117, 5, 0.5)' }}>{title}</Box>
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
        <CardMedia component='img' image={imageUrl} sx={{ display: { xs: 'none', md: 'block'}, width: '180px'}}>
        </CardMedia>
      </Card>
    </Grid>
  );
}

const Projects = () => {
  return (
    <Box sx={{ backgroundColor: '#303030', color: '#fff', width: '100vw', }}>
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
      "This is the portfolio you're on! Features of this portfolio include: header, hero section, about me, projects, footer, blog, and blog posts (using markdown files). The portfolio is fully responsive, using material-ui's Hidden component to tactfully show/hide/transform certain features at different screen sizes.",
    imageUrl: portfolio,
    tags: ["React", "Material UI", "Gatsby.js", "AWS S3"],
    links: [
      {
        icon: GithubIcon,
        href: "https://github.com/beezymc/portfolio_revisited",
      }
    ],
  },
  {
    title: "Ratings and Reviews",
    description:
      "This project involved scaling a backend API endpoint for a shopping web application. This required a few steps: ETL of previously-stored data into a new Postgres database, developing a REDIS store, creating a server with efficient queries to that database/REDIS store, deploying the server (with REDIS cache, using docker and docker-compose) and database to AWS EC2, scaling the server to multiple EC2 instances, and introducing a new EC2 instance with an nginx load balancer. See the github readme for additional details.",
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
      "In this project, two engineers and I built the product view page of a shopping web application. Features I implemented include: client-side routing using React-Router, maintaining global state with Redux, the creation of a related items carousel component, the development of an outfits carousel component, and deployment via AWS EC2 and Docker.",
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
      "This is a 2-day project in which I created an app that allows a user to create a weekly availability calendar and share that calendar with others, who can then schedule activities using that availability as a reference. It makes use of unique ids to generate a unique availability page every time a calendar is created.",
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