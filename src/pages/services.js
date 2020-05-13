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
        <h2>Career Coaching</h2>
        <p>
          Whether you're looking for an internship, your first job after
          college, or you're a seasoned professional looking for your next gig,
          job hunting is painful, scary and exhausting. I've conducted over 100
          interviews in the last 2 years, as well as given talks on how to prep
          for the job hunt. Don't struggle alone - schedule an exploratory call
          now!
          <ul>
            <li>build up your resume and portfolio</li>
            <li>how to find jobs and apply to them</li>
            <li>practice makes perfect, so we'll do some mock interviews</li>
            <li>
              access to resources I've used for years to land interviews and get
              job offers
            </li>
            <li>lot's of hype and support</li>
          </ul>
        </p>

        <h3>
          <a
            href="https://calendly.com/aashnisshah/connect"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule an introductory call now!
          </a>
        </h3>

        <h2>Freelance Work</h2>
        <p>
          Working on an interesting project and need an extra set of hands? I
          have hands on experience with Software Engineering and Product
          Management. With my experience leading Elixir Labs, I have experience
          solving engineering and product problems, validating product ideas,
          hiring a team and making team synergies work better. Take the next
          steps to grow your business and set up an exploratory call now!
        </p>

        <h3>
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
        </h3>
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
