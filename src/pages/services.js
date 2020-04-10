import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ServicesPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Services | Aashni" />
        <h1>Services</h1>
        <h2>Coaching</h2>
        <p>
          Job hunting is scary, whether you're looking for an internship, your
          first job after college, or you're seasoned but looking for the next
          great thing. I'd love to help you gain confidence, prep and ace the
          interview. I've given over 100 interviews in the last 2 years, and
          have given plenty of talks on prepping for the job interview process.
        </p>

        <p>
          We'll cover everything from building up your resume and portfolio, to
          finding and applying for jobs, and practicing with mock interviews.
          I'll share some of the resources I've been using to land interviews
          for years, and hype you up before any interview.
        </p>

        <p>
          Sounds like what you need? Schedule an{" "}
          <a
            href="https://calendly.com/aashnisshah/connect"
            target="_blank"
            rel="noopener noreferrer"
          >
            introductory call
          </a>{" "}
          now!
        </p>

        <h2>Consulting</h2>
        <p>
          Are you building a startup and trying to figure out where and how to
          get started technically? I've built many products and projects
          end-to-end and would love to share my knowledge.
        </p>

        <p>
          Our sessions can cover basic ideation and validation techniques to
          deeper technical dives to understand how to build your idea.
        </p>

        <p>
          Interested?
          <a
            href="https://calendly.com/aashnisshah/connect"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Let's connect
          </a>
          !
        </p>
      </Layout>
    )
  }
}

export default ServicesPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
