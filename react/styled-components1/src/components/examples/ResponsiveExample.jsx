import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
  }
`

const Title = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: 1.5rem;
`

const Description = styled.p`
  color: ${props => props.theme.colors.gray[600]};
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.6;
`

const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing.md};
  margin: ${props => props.theme.spacing.lg} 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const GridItem = styled.div`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Code = styled.pre`
  background: ${props => props.theme.colors.gray[100]};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  overflow-x: auto;
  font-size: 0.875rem;
  margin-top: ${props => props.theme.spacing.md};
  margin-bottom: 0;
`

function ResponsiveExample() {
  return (
    <Card>
      <Title>5. 반응형 디자인</Title>
      <Description>
        미디어 쿼리를 사용하여 반응형 스타일을 적용할 수 있습니다.
      </Description>
      <ResponsiveGrid>
        <GridItem>1</GridItem>
        <GridItem>2</GridItem>
        <GridItem>3</GridItem>
        <GridItem>4</GridItem>
      </ResponsiveGrid>
      <Code>{`const Grid = styled.div\`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  @media (max-width: \${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: \${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
\``}</Code>
    </Card>
  )
}

export default ResponsiveExample


