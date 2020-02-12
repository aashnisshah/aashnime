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

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Aashni" />
        <h1>Aashni Shah</h1>
        <ProfilePicCircle src={ProfilePic} />
        <Subtitle>Product Manager, Software Engineer & Public Speaker</Subtitle>

        <p>
          Hi! A quick little intro about me: I'm passionate about creating a
          better tomorrow using technology. My happy place is thinking about
          internationalization, dealing with funky edge cases, and building a
          great user experience.
        </p>

        <p>
          I enjoy teaching and inspiring other technologists through my public
          speaking and writing. I've had the opportunity to speak at events
          organized by FITC, the University of Toronto. I have also been
          featured as the Top 50 Inspiring Women in Canada by the Government of
          Canada's International Women's Day #StemForChange project, and a few
          more.
        </p>

        <p>
          Currently I run{" "}
          <a
            href="http://elixirlabs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elixir Labs
          </a>
          , a non profit that builds solutions for nonprofit organizations with
          mandates to affect social, environmental and economic good.
        </p>

        <p>
          Feel free to <Link to={`/contact`}>get in touch</Link> - I'd love to
          get to know you too!
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
