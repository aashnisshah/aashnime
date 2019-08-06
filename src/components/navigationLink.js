import React from "react"
import styled from "styled-components"
import { aquagreen, offblack } from "../utils/colors"

const Link = styled.a`
  text-decoration: none;
  margin: 0 12px;
  color: ${offblack};
  font-family: Roboto;
  :hover {
    color: ${aquagreen};
    font-syle: italic
  }
`;

const NavigationLink = ({link, title}) => (
  <Link href={link} alt={title} rel="noopenner noreferrer">{title}</Link>
)

export default NavigationLink
