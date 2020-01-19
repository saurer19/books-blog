import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ToggleDark from "./toggleDark"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

      header = (
        <Header>
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
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
        <ToggleDark />

        </Header>

      )
    
    return (
      <Wrapper>
        <Content
        >
          <header>{header}</header>
          <Main>{children}</Main>
        </Content>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bg);
  color: var(--textNormal);
  display: flex;
  flex-direction: column;
  transition: color 0.2s ease-out, background 0.2s ease-out;
  a{
    color: var(--textLink)
  }

`;
const Header = styled.header`
  display:flex;
  justify-content:space-between

`;
const Main = styled.main`
`
const Content = styled.div`
margin: 0 auto;
  min-height: 100%;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  flex: 1 0 auto;
`
const Footer = styled.footer`
  text-align: center;
  padding: 24px;
  flex-shrink: 0;
`;

export default Layout
