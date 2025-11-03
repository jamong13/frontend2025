import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.sm};
  padding: ${props => props.theme.spacing.md} 0;
  position: sticky;
  top: 0;
  z-index: 100;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Nav = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
`

const NavLink = styled.a`
  color: ${props => props.theme.colors.gray[600]};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${props => props.theme.colors.primary};
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`

function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo>Styled Components</Logo>
        <Nav>
          <NavLink href="#home">홈</NavLink>
          <NavLink href="#examples">예제</NavLink>
          <NavLink href="#about">소개</NavLink>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header


