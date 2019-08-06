import React from "react"
import styled from "styled-components"
import { phone } from "../utils/breakpoints"

const Link = styled.a`
  text-decoration: none;
`;

const SocialLinkImage = styled.img`
  margin: 12px 12px;
  width: 48px;
  height: 48px;
  display: inline;
  @media(min-width: ${phone}) {
    width: 32px;
    height: 32px;
  }
`;

const SocialLink = ({link, title, image}) => (
  <Link href={link} alt={title} rel="noopenner noreferrer">
    <SocialLinkImage src={image} alt={title} />
  </Link>
)

export default SocialLink
