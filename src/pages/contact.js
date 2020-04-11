import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaStackOverflow,
  FaLinkedin,
} from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Form = styled.form`
  background-color: none;
`

const FormFields = styled.div`
  margin: 18px 0px;
`

const InputField = styled.input`
  background-color: #1ba098;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 12px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #efede7;
  }
`

const TextField = styled.textarea`
  background-color: #1ba098;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px;
  width: 100%;
  rows: 20;
  ::placeholder {
    color: #efede7;
  }
`

const SubmitButton = styled.button`
  background-color: #1ba098;
  border: none;
  width: 100%;
  color: #efede7;
  border-radius: 4px;
  padding: 12px;
`

const HiddenFields = styled.div`
  display: none;
`

const SocialLink = styled.a`
  padding: 24px;
  width: 100px;
  height: 200px;
`

class ContactPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact | Aashni" />
        <h1>Get in Touch</h1>
        <p>Hey there! Looking to get in touch? I'd love to hear from you.</p>

        <p>You can find me online @aashnisshah:</p>
        <p>
          <SocialLink
            href="https://twitter.com/aashnisshah"
            target="_blank"
            ref="noopener noreferrer"
          >
            <FaTwitter size={50} />
          </SocialLink>
          <SocialLink
            href="https://instagram.com/aashnisshah"
            target="_blank"
            ref="noopener noreferrer"
          >
            <FaInstagram size={50} />
          </SocialLink>
          <SocialLink
            href="https://github.com/aashnisshah"
            target="_blank"
            ref="noopener noreferrer"
          >
            <FaGithub size={50} />
          </SocialLink>
          <SocialLink
            href="https://stackoverflow.com/users/1989265/aashnisshah"
            target="_blank"
            ref="noopener noreferrer"
          >
            <FaStackOverflow size={50} />
          </SocialLink>
          <SocialLink
            href="https://linkedin.com/in/aashnisshah"
            target="_blank"
            ref="noopener noreferrer"
          >
            <FaLinkedin size={50} />
          </SocialLink>
        </p>

        <p>
          You can also send me an email at contact[at]aashni.me, or fill out the
          form below.
        </p>
        <Form
          name="contact"
          method="POST"
          action="success"
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
            <TextField
              type="text"
              name="message"
              placeholder="Message"
              rows="6"
            />
          </FormFields>
          <HiddenFields>
            <input type="hidden" name="bot-field" />
          </HiddenFields>
          <HiddenFields>
            <input type="hidden" name="form-name" value="contact" />
          </HiddenFields>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
        <hr />
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
