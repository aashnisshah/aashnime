import React from "react"
import { graphql } from "gatsby"
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
  margin: 20px;
`

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Aashni" />
        <h1>Aashni Shah</h1>
        <ProfilePicCircle src={ProfilePic} />
        <Subtitle>Tech, Philanthropy, Travel and Photography</Subtitle>

        <p>
          Hi there! My name is Aashni and I run{" "}
          <a
            href="https://elixirlabs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elixir Labs
          </a>
          . In my free time I enjoy photography, travelling and Scuba Diving!
        </p>

        <p>
          Fun fact: I once fell out of a helicopter and lived to tell the tale!
        </p>
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
