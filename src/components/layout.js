import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

import { rhythm } from "../utils/typography"
import navigationLinks from "../utils/navigationLinks"
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

const NavigationLink = styled.a`
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

const NavBar = styled.nav`
  font-size: 0.8em;
`

const MainNav = styled.span`
  list-style-type: none;
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
    let header, formattedNavigation

    formattedNavigation = navigationLinks.map(({ link, name }) => {
      return (
        <NavigationItem key={name}>
          <NavigationLink href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </NavigationLink>
        </NavigationItem>
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
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>{formattedNavigation}</footer>
      </div>
    )
  }
}

export default Layout
