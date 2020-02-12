import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars, FaCopyright, FaHeart } from "react-icons/fa"

import { rhythm } from "../utils/typography"
import navigationLinks from "../utils/navigationLinks"
import socialLinks from "../utils/socialLinks"
import "../styles/main.css"

const NavbarToggle = styled.span`
  position: absolute;
  right: 20px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const TitleLink = styled.span`
  font-family: Zeyada;
  display: inline;
  font-size: 1.6em;
  text-decoration: none;
`

const NavList = styled.ul`
  @media screen and (min-width: 768px) {
    display: inline;
    float: right;
    line-height: 0px;
  }
`

const NavBar = styled.nav`
  font-size: 0.8em;
`

const MainNav = styled.span`
  list-style-type: none;
`

const NavigationLink = styled.p`
  text-decoration: none;
  text-align: center;
  padding-right: 0.8em;
  box-shadow: none;
`

const NavigationItem = styled.li`
  text-align: center;
  margin: 15px auto;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`

const SocialLink = styled.a`
  text-decoration: none;
  text-align: center;
  padding-right: 0.8em;
  box-shadow: none;
`

const SocialItem = styled.li`
  text-align: center;
  margin: 15px auto;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`

const Footer = styled.footer`
  background-color: #051622;
  color: #efede7;
  text-align: center;
  font-size: 0.8em;
`

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isClosed: false,
    }
  }
  render() {
    const { title, children } = this.props
    let header, formattedNavigation, formattedSocial

    formattedNavigation = navigationLinks.map(({ link, name }) => {
      return (
        <NavigationItem key={name}>
          <NavigationLink href={link} target="_blank" rel="noopener noreferrer">
            <Link to={link}>{name}</Link>
          </NavigationLink>
        </NavigationItem>
      )
    })

    formattedSocial = socialLinks.map(({ link, name }) => {
      return (
        <SocialItem key={name}>
          <SocialLink href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </SocialLink>
        </SocialItem>
      )
    })

    header = (
      <NavBar>
        <NavbarToggle
          onClick={() => {
            this.setState({ isClosed: !this.state.isClosed })
          }}
        >
          <FaBars />
        </NavbarToggle>
        <TitleLink>
          <Link to={`/`}>{title}</Link>
        </TitleLink>
        <MainNav className={`menu ${this.state.isClosed ? "" : " active"}`}>
          <NavList>{formattedNavigation}</NavList>{" "}
        </MainNav>
      </NavBar>
    )

    return (
      <div>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            minHeight: `100%`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <p>{formattedSocial}</p>
            <p>
              Interested in collaborating?{" "}
              <Link to={`/contact`}>Get in touch!</Link>
            </p>
            <p>
              Made with <FaHeart /> in Toronto, Canada
              <br />
              <FaCopyright /> Aashni Shah 2020
            </p>
          </div>
        </Footer>
      </div>
    )
  }
}

export default Layout
