import * as React from "react"
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';

export default function Blog({ posts }) {
  return (
    <Box sx={{ paddingBottom: '3%', backgroundColor: '#212121', zIndex: '-1'}}>
      <Container maxWidth='md' id='blog'>
        <Box pt={8} mb={2}>
          <Typography variant='h4'>Blog</Typography>
        </Box>
        <Grid container direction='column' spacing={5}>
          {posts.map(post => {
            return (
              <Grid item key={post.fields.slug}>
                <Card sx={{ color: '#fff', backgroundColor: '#424242', display: 'flex', boxShadow: '2px 2px 2px rgba(247, 106, 243, .5)' }}>
                  <div>
                    <Link href={`${post.fields.slug}`} sx={{ textDecoration: 'none' }}>
                      <CardContent sx={{ color: '#fff', textDecoration: 'none', marginTop: '2%', '&:hover': { color: '#90CAF9' }}}>
                        <Typography variant='h5' paragraph>
                          <Box component='span' sx={{ borderBottom: '2px solid rgba(247, 106, 243, .5)' }}>{post.frontmatter.title}</Box>
                        </Typography>
                        <Typography variant='caption' paragraph>
                          {post.frontmatter.date}
                        </Typography>
                        <Typography variant='subtitle1' paragraph>
                          {post.excerpt}
                        </Typography>
                      </CardContent>
                    </Link>
                  </div>
                  <CardMedia image={post.frontmatter.description} sx={{ display: { xs: 'none', md: 'block'}, width: '180px'}}></CardMedia>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  )
}