import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Aashni" />
        <h1>Aashni Shah</h1>
        <p>I make things, and I do things.</p>

        <Link style={{ boxShadow: `none` }} to={"blog/"}>
          Blog
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
