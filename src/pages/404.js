import * as React from "react"
import { graphql } from "gatsby"

const NotFoundPage = ({ data }) => {
  return (
    <>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist, sorry!</p>
    </>
  );
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`