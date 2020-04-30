import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const Form = styled.form`
  background-color: none;
`

const FormFields = styled.div`
  margin: 18px 0px;
`

const InputField = styled.input`
  background-color: #efede7;
  border: none;
  border-radius: 4px;
  width: 100%;
  padding: 12px;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #051622;
  }
`

const SubmitButton = styled.button`
  background-color: #051622;
  border: none;
  border: 2px #051622 solid;
  width: 100%;
  color: #efede7;
  border-radius: 4px;
  padding: 12px;
`

const HiddenFields = styled.div`
  display: none;
`

const SubscribeTitle = styled.h2`
  font-size: 1.5em;
  margin: 0.3em 0;
  padding-top: 8px;
  @media screen and (min-width: 768px) {
    padding-top: 0px;
  }
`

const SubscribeBox = styled.div`
  width: 100%;
  background: none;
  background-color: #1ba098;
  margin: auto;
  padding: 24px 4px;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    padding-bottom: 0px;
  }
`

const SubscribeIntro = styled.div`
  padding: 0px 24px;
  @media screen and (min-width: 768px) {
    width: 50%;
    float: left;
    height: 250px;
  }
`

const SubscribeForm = styled.div`
  padding: 0px 24px;
  @media screen and (min-width: 768px) {
    margin-left: 50%;
    height: 260px;
  }
`

class SubscribeBlock extends React.Component {
  render() {
    return (
      <SubscribeBox>
        <SubscribeIntro>
          <SubscribeTitle>Subscribe</SubscribeTitle>
          <p>
            Every week I'll send you an email with my latest posts, as well as
            resources I find around the internet on Software Development,
            Product Management and Startups.
          </p>
        </SubscribeIntro>
        <SubscribeForm>
          <Form
            name="newsletter"
            method="POST"
            action="https://aashni.me/confirm"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <FormFields>
              <InputField type="text" name="name" placeholder="Your Name" />
            </FormFields>
            <FormFields>
              <InputField type="text" name="email" placeholder="Your Email" />
            </FormFields>
            <HiddenFields>
              <input type="hidden" name="bot-field" />
            </HiddenFields>
            <HiddenFields>
              <input type="hidden" name="form-name" value="newsletter" />
            </HiddenFields>
            <SubmitButton type="submit">Subscribe</SubmitButton>
          </Form>
        </SubscribeForm>
      </SubscribeBox>
    )
  }
}

export default SubscribeBlock

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
