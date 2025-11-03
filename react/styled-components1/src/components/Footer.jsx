import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xl} 0;
  text-align: center;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`

const Text = styled.p`
  opacity: 0.8;
  margin-bottom: ${props => props.theme.spacing.sm};
`

const Link = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Text>Styled Components 튜토리얼 프로젝트</Text>
        <Text>
          더 알아보기: <Link href="https://styled-components.com" target="_blank" rel="noopener noreferrer">공식 문서</Link>
        </Text>
      </Container>
    </StyledFooter>
  )
}

export default Footer


