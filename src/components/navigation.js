import React from "react";
import NavigationLink from "./NavigationLink";
import styled from "styled-components";
import { phone } from "../utils/breakpoints";
import { NavigationLinks } from "../utils/config";
import { MyRouter } from "../utils/router";
import { BrowserRouter as Router } from "react-router-dom";

const HomePageNav = styled.div`
  margin: 12px 0px;
  text-align: center;
  font-size: 1.6em;
  @media (min-width: ${phone}) {
    font-size: 1.2 em;
  }
`;

const NavigationUl = styled.ul`
  list-style: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
  word-wrap: break-word;
`;

const NavigationLi = styled.li`
  display: block;
  padding: 12px 0px;
  @media (min-width: ${phone}) {
    display: inline-block;
  }
`;

const Navigation = () => (
  <Router>
    <HomePageNav>
      <NavigationUl>
        {NavigationLinks.map(({ title, link }, id) => {
          return (
            <NavigationLi key={id}>
              <NavigationLink link={link} title={title} />
            </NavigationLi>
          );
        })}
      </NavigationUl>
    </HomePageNav>
    <MyRouter />
  </Router>
);

export default Navigation;
