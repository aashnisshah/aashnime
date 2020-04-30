import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars, FaCopyright, FaHeart } from "react-icons/fa"

import { rhythm } from "../utils/typography"
import navigationLinks from "../utils/navigationLinks"
import SocialLinks from "../utils/socialLinks"
import SubscribeBlock from "../components/subscribe"
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
  margin: auto auto;
  list-style-type: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`

const NotificationBar = styled.div`
  margin: 0px;
  background-color: #051622;
  color: #efede7;
  text-align: center;
  font-size: 0.8em;
`

const NotificationMessage = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: rhythm(24);
  padding: ${rhythm(0.5)} ${rhythm(3 / 4)};
  font-size: 0.8em;
`

const NotificationClose = styled.button`
  background: none !important;
  padding: 8px;
  border: none;
  color: #1ba098;
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
      isClosed: true,
      showNotifications: false,
    }
  }
  render() {
    const { title, children } = this.props
    let header, formattedNavigation

    formattedNavigation = navigationLinks.map(({ link, name, target }) => {
      if (target === "") {
        return (
          <NavigationItem key={name}>
            <NavigationLink>
              <Link to={link}>{name}</Link>
            </NavigationLink>
          </NavigationItem>
        )
      } else {
        return (
          <NavigationItem key={name}>
            <NavigationLink>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </NavigationLink>
          </NavigationItem>
        )
      }
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
        <NotificationBar
          className={`notifications ${
            this.state.showNotifications ? "" : " hide"
          }`}
        >
          <NotificationMessage>
            Want to help the fight against COVID-19? Take part in this{" "}
            <a
              href="https://quiznight.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              virtual quiz night fundraiser
            </a>{" "}
            on April 25th, 5pm EST.
            <NotificationClose
              onClick={() => this.setState({ showNotifications: false })}
            >
              close
            </NotificationClose>
          </NotificationMessage>
        </NotificationBar>
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

          <SubscribeBlock />
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
            <SocialLinks iconSize={32} />
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
