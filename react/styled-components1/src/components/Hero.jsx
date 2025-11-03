import React from 'react'
import styled from 'styled-components'

const StyledHero = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.xxl} 0;
  text-align: center;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: ${props => props.theme.spacing.md};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: ${props => props.theme.spacing.xl};
  opacity: 0.9;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1rem;
  }
`

const Button = styled.button`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  border: none;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${props => props.theme.borderRadius.full};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: ${props => props.theme.shadows.lg};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.xl};
  }

  &:active {
    transform: translateY(0);
  }
`

function Hero() {
  return (
    <StyledHero id="home">
      <Container>
        <Title>Styled Components 배우기</Title>
        <Subtitle>
          React를 위한 CSS-in-JS 라이브러리로, 스타일을 컴포넌트 단위로 작성할 수 있습니다.
        </Subtitle>
        <Button>시작하기</Button>
      </Container>
    </StyledHero>
  )
}

export default Hero


