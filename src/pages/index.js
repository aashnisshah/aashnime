import React from "react";
import "../style/main.css";
import { MainComponent, Navigation, WorkComponent } from "../components";
import styled from "styled-components";
import { phone } from "../utils/breakpoints";
import { BrowserRouter as Router, Route } from "react-router-dom";

const MainDiv = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  @media (min-width: ${phone}) {
    place-items: left;
  }
`;

const IndexPage = () => (
  <MainDiv>
    <Router>
      <Navigation />
      <Route path="/" exact component={MainComponent} />
      <Route path="/work" exact component={WorkComponent} />
    </Router>
  </MainDiv>
);

export default IndexPage;
