import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"

import { rhythm } from "../utils/typography"
import navigationLinks from "../utils/navigationLinks"
import "../styles/main.css"

const NavbarToggle = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`

const TitleLink = styled.p`
  font-family: Zeyada;
  display: inline-block;
  font-size: 1.6em;
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
`

const NavBar = styled.nav`
  font-size: 0.8em;
`

const MainNav = styled.ul`
  list-style-type: none;
`

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
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
            console.log("click", this.state.isOpen)
            this.setState({ isOpen: !this.state.isOpen })
          }}
        >
          <FaBars />
        </NavbarToggle>
        <TitleLink>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </TitleLink>
        <MainNav className={`menu ${this.state.isOpen ? " active" : ""}`}>
          {formattedNavigation}
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
