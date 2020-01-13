import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import footerLinks from "../utils/footerLinks"

const FooterLink = styled.a`
  text-decoration: none;
  text-align: center;
  padding-right: 10px;
  box-shadow: none;
`

const FooterItem = styled.li`
  display: inline-block;
`

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header, footer

    header = (
      <h3
        style={{
          fontFamily: `Zeyada`,
          marginTop: 0,
        }}
      >
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
      </h3>
    )

    footer = footerLinks.map(({ link, name }) => {
      return (
        <FooterItem key={name}>
          <FooterLink href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </FooterLink>
        </FooterItem>
      )
    })

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
        <footer>{footer}</footer>
      </div>
    )
  }
}

export default Layout
