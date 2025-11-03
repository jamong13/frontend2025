import React, { useState } from 'react'
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

const DemoButton = styled.button`
  background: ${props => {
    if (props.variant === 'primary') return props.theme.colors.primary
    if (props.variant === 'secondary') return props.theme.colors.secondary
    if (props.variant === 'accent') return props.theme.colors.accent
    return props.theme.colors.gray[300]
  }};
  color: ${props => props.variant ? props.theme.colors.white : props.theme.colors.dark};
  border: none;
  padding: ${props => props.size === 'large' ? '1rem 2rem' : props.size === 'small' ? '0.5rem 1rem' : '0.75rem 1.5rem'};
  border-radius: ${props => props.theme.borderRadius.md};
  cursor: pointer;
  font-weight: 600;
  margin: 0.5rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.sm};
  margin-top: ${props => props.theme.spacing.md};
`

function PropsExample() {
  const [variant, setVariant] = useState('primary')

  return (
    <Card>
      <Title>2. Props를 이용한 조건부 스타일</Title>
      <Description>
        컴포넌트에 전달된 props를 기반으로 동적으로 스타일을 변경할 수 있습니다.
      </Description>
      <ButtonGroup>
        <DemoButton variant="primary" size="medium">Primary</DemoButton>
        <DemoButton variant="secondary" size="medium">Secondary</DemoButton>
        <DemoButton variant="accent" size="large">Accent Large</DemoButton>
        <DemoButton size="small">Default Small</DemoButton>
      </ButtonGroup>
      <Code>{`const Button = styled.button\`
  background: \${props => 
    props.variant === 'primary' 
      ? '#6366f1' 
      : '#8b5cf6'
  };
  padding: \${props => 
    props.size === 'large' 
      ? '1rem 2rem' 
      : '0.75rem 1.5rem'
  };
\`

<Button variant="primary" size="large">클릭</Button>`}</Code>
    </Card>
  )
}

const Code = styled.pre`
  background: ${props => props.theme.colors.gray[100]};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  overflow-x: auto;
  font-size: 0.875rem;
  margin-top: ${props => props.theme.spacing.md};
  margin-bottom: 0;
`

export default PropsExample


