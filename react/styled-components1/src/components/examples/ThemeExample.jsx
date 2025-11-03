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

const ThemeShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${props => props.theme.spacing.md};
  margin: ${props => props.theme.spacing.lg} 0;
`

const ColorBox = styled.div`
  background: ${props => props.color};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.md};
  text-align: center;
  color: ${props => {
    const color = props.color.toLowerCase()
    if (color.includes('#f') || color.includes('#e') || color.includes('light')) {
      return props.theme.colors.dark
    }
    return props.theme.colors.white
  }};
  font-weight: 600;
  box-shadow: ${props => props.theme.shadows.sm};
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

function ThemeExample() {
  return (
    <Card>
      <Title>4. 테마 사용하기</Title>
      <Description>
        ThemeProvider를 통해 테마를 전역으로 공유하고 사용할 수 있습니다.
      </Description>
      <ThemeShowcase>
        <ColorBox color="#6366f1">Primary</ColorBox>
        <ColorBox color="#8b5cf6">Secondary</ColorBox>
        <ColorBox color="#ec4899">Accent</ColorBox>
        <ColorBox color="#f8fafc">Light</ColorBox>
      </ThemeShowcase>
      <Code>{`// theme.js
const theme = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
  }
}

// App.jsx
<ThemeProvider theme={theme}>
  <YourComponent />
</ThemeProvider>

// Component
const Button = styled.button\`
  background: \${props => props.theme.colors.primary};
\``}</Code>
    </Card>
  )
}

export default ThemeExample


