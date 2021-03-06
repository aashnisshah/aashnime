import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Uh Oh!</h1>
        <p>
          Seems like this page just went pouff!{" "}
          <Link to={"/contact"}>Let me know</Link> so I can fix it.
        </p>
        <p>
          Why not read some <Link to={`/blog`}>blog posts</Link> in the
          meantime?
        </p>
      </Layout>
    )
  }
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
