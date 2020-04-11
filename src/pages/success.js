import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SuccessPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Aashni" />
        <h1>Success!</h1>
        <p>Yay! Your form was submitted successfully!</p>
        <p>
          Why not read some <Link to={"/blog"}>blog posts</Link> in the
          meantime?
        </p>
      </Layout>
    )
  }
}

export default SuccessPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
