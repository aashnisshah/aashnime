import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About | Aashni" />
        <h1>About Me</h1>
        <p>
          Hi! A quick little intro about me: I'm passionate about creating a
          better tomorrow using technology. My happy place is thinking about
          internationalization, dealing with funky edge cases, and building a
          great user experience.
        </p>

        <p>
          I enjoy teaching and inspiring other technologists through my public
          speaking and writing. I've had the opportunity to speak at events
          organized by FITC, and the University of Toronto. I have also been
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

        <p>
          I have most recently worked at Square, working on the Cash App. I have
          previously worked at LivEpicly in Jakarta, Indonesia. Amazon in
          Seattle, USA. OANDA in Toronto, Canada. Microsoft in Vancouver Canada.
          I'm currently exploring new opportunities - if you're company is
          hiring then <Link to={`/contact`}>I'd love to know</Link>!
        </p>
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
