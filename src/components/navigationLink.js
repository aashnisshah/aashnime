import React from "react";
import styled from "styled-components";
import { aquagreen, offblack } from "../utils/colors";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 18px;
  color: ${offblack};
  font-family: Roboto;
  :hover {
    color: ${aquagreen};
    font-syle: italic;
  }
`;

const NavigationLink = ({ link, title }) => (
  <StyledLink to={link}>{title}</StyledLink>
);

export default NavigationLink;
