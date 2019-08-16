import React from "react";
import "../style/main.css";
import { Navigation } from "../components";
import styled from "styled-components";
import { phone } from "../utils/breakpoints";

const MainDiv = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  @media (min-width: ${phone}) {
    place-items: left;
  }
`;

const ContactPage = () => (
  <MainDiv>
    <Navigation />
  </MainDiv>
);

export default ContactPage;
