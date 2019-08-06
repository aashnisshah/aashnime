import React from "react"
import NavigationLink from "./NavigationLink"
import styled from "styled-components"
import { phone } from "../utils/breakpoints"

const navigationLinks = [
  {
    title: "Work",
    link: "/work"
  }, {
    title: "About",
    link: "/about"
  }, {
    title: "Speaking",
    link: "/speaking"
  }, {
    title: "Press",
    link: "/press"
  }, {
    title: "Blog",
    link: "/blog"
  }, {
    title: "Contact",
    link: "/contact"
  }
]

const HomePageNav = styled.div`
  margin: 12px 0px;
  text-align: center;
  font-size: 2em;
  @media(min-width: ${phone}) {
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
  @media(min-width: ${phone}) {
    display: inline-block;
  }
`;

const HomePageNavigation = () => (
  <HomePageNav>
    <NavigationUl>
      {navigationLinks.map(({title, link}, id) => {
        return <NavigationLi key={id}><NavigationLink link={link} title={title} /></NavigationLi>
      })}
    </NavigationUl>
  </HomePageNav>
)

export default HomePageNavigation
