import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfilePic from "../../content/assets/aashni.jpg"

const Subtitle = styled.p`
  font-weight: 300;
  font-size: 1.2em;
  font-style: italic;
`

const ProfilePicCircle = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  border: 3px solid #1ba098;
  float: right;
`

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About | Aashni" />
        <h1>About Me</h1>
        <p>This page is a WIP.</p>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
