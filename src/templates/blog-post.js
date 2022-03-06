import * as React from "react"
import { graphql } from "gatsby"
import BlogHeader from '../components/BlogHeader.jsx';
import BlogFooter from '../components/BlogFooter.jsx';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const headerImageStyles = {
  height: '100%',
  width: '100%',
  objectFit: 'contain'
};

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <BlogHeader />
      <Box sx={{ backgroundColor: '#303030', height: '100%', width: '100%', zIndex: '-1', paddingTop: '2%' }}>
        <Container maxWidth='md' id='blog' sx={{ marginTop: '3%', padding: '4% 4% 4%', paddingBottom: '1%',borderRadius: '5px', backgroundColor: '#424242', color: '#fff' }}>
          <Box>
            <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: '900', paddingBottom: '2%' }}>
              <Box component='span' sx={{ borderBottom: '2px solid rgba(209, 117, 5, 0.5)' }}>{post.frontmatter.title}</Box>
            </Typography>
            <Box sx={{ textAlign: 'center', paddingBottom: '2%' }}>
              {post.frontmatter.date}
            </Box>
            <Box sx={{ height: '40vh' }}>
              <img src={post.frontmatter.description} style={headerImageStyles} alt='Blog Header'/>
            </Box>
            <Typography variant='body1' sx={{ lineHeight: '2em' }} component='div' dangerouslySetInnerHTML={{ __html: post.html }}>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '4%', marginTop: '4%' }}>
            <Button href='/blog' variant='outlined' color='error'>
              View More Posts
            </Button>
          </Box>
        </Container>
      </Box>
      <BlogFooter />
    </>
  );
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`