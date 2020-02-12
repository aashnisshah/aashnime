import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Form = styled.form`
  background-color: none;
`

const FormFields = styled.div`
  margin: 18px 0px;
`

const Label = styled.label`
  padding: 20px;
`

const InputField = styled.input`
  background-color: #efede7;
  border: none;
  border-bottom: 2px #051622 solid;
  width: 100%;
  focus {
    outline: none;
  }
  ::placeholder {
    color: #051622;
  }
`

const TextField = styled.textarea`
  background-color: #efede7;
  border: none;
  border-bottom: 2px #051622 solid;
  width: 100%;
`

const SubmitButton = styled.button`
  background-color: #051622;
  border: none;
  border: 2px #051622 solid;
  width: 100%;
  color: #efede7;
`

const HiddenFields = styled.div`
  display: none;
`

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact | Aashni" />
        <h1>Get in Touch</h1>
        <p>
          Hey there! Looking to get in touch? I'd love to hear from you. Send me
          an email at contact[at]aashni.me, or fill out the form below.
        </p>
        <Form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <FormFields>
            <InputField type="text" name="name" placeholder="Name" />
          </FormFields>
          <FormFields>
            <InputField type="text" name="email" placeholder="Email" />
          </FormFields>
          <FormFields>
            <TextField type="text" name="message" placeholder="Message" />
          </FormFields>
          <HiddenFields>
            <input type="hidden" name="bot-field" />
          </HiddenFields>
          <HiddenFields>
            <input type="hidden" name="form-name" value="contact" />
          </HiddenFields>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
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
