import React from "react"
import styled from "styled-components"
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaStackOverflow,
  FaLinkedin,
  FaDev,
} from "react-icons/fa"

const CenteredSocialLinks = styled.div`
  text-align: center;
  margin-bottom: 24px;
`

const SocialLink = styled.a`
  padding: 24px;
  width: 100px;
  height: 200px;
`

class SocialLinks extends React.Component {
  render() {
    const iconSize = this.props.iconSize || 32

    return (
      <CenteredSocialLinks>
        <SocialLink
          href="https://twitter.com/aashnisshah"
          target="_blank"
          ref="noopener noreferrer"
        >
          <FaTwitter size={iconSize} />
        </SocialLink>
        <SocialLink
          href="https://instagram.com/aashnisshah"
          target="_blank"
          ref="noopener noreferrer"
        >
          <FaInstagram size={iconSize} />
        </SocialLink>
        <SocialLink
          href="https://github.com/aashnisshah"
          target="_blank"
          ref="noopener noreferrer"
        >
          <FaGithub size={iconSize} />
        </SocialLink>
        <SocialLink
          href="https://stackoverflow.com/users/1989265/aashnisshah"
          target="_blank"
          ref="noopener noreferrer"
        >
          <FaStackOverflow size={iconSize} />
        </SocialLink>
        <SocialLink
          href="https://linkedin.com/in/aashnisshah"
          target="_blank"
          ref="noopener noreferrer"
        >
          <FaLinkedin size={iconSize} />
        </SocialLink>
        <SocialLink
          href="https://dev.to/aashnisshah"
          target="_blank"
          ref="noopener noreferrer"
        >
          <FaDev size={iconSize} />
        </SocialLink>
      </CenteredSocialLinks>
    )
  }
}

export default SocialLinks
