import * as React from "react";
import HeroSection from '../components/HeroSection.jsx';
import Header from '../components/Header.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Footer from '../components/Footer.jsx';
import Blog from '../components/Blog.jsx';
import { Helmet } from 'react-helmet';
import { graphql } from "gatsby"

export default function Index({ data }) {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <>
      <Helmet>
        <title>David Rajec's Portfolio</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-224074954-1"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-224074954-1');`}
        </script>
      </Helmet>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Blog posts={posts} />
      <Footer />
    </>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`