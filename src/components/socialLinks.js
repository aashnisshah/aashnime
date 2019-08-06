import React from "react"
import SocialLink from "./SocialLink"
import styled from "styled-components"
import { github, instagram, linkedin, stackoverflow, twitter } from "../utils/images"

const socialLinks = [
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/aashnisshah",
    image: linkedin
  }, {
    title: "Github",
    link: "https://github.com/aashnisshah",
    image: github
  }, {
    title: "Twitter",
    link: "https://twitter.com/aashnisshah",
    image: twitter
  }, {
    title: "Instagram",
    link: "https://instagram.com/aashnisshah",
    image: instagram
  }, {
    title: "Stackoverflow",
    link: "https://stackoverflow.com/users/1989265/aashnisshah",
    image: stackoverflow
  }
]

const SocialDiv = styled.div`
  list-style: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const SocialLinks = () => (
  <SocialDiv>
    {socialLinks.map(({title, link, image}, id) => {
      return <SocialLink key={id} link={link} title={title} image={image}/>
    })}
  </SocialDiv>
)

export default SocialLinks
