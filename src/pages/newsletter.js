import React from "react"
import { graphql } from "gatsby"
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaStackOverflow,
  FaLinkedin,
} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Subscribe to my Newsletter</h1>
        <p>
          Hey all! In this newsletter, I'll be sharing updates, announcements
          and resources straight to your inbox. This includes exciting things
          I've found around the internet, interesting events and updates from my
          blog. Oh, and the occasional (probably really bad) jokes too!
        </p>
        <p>I promise not to spam you!</p>
      </Layout>
    )
  }
}

export default ContactPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
