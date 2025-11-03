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

const Code = styled.pre`
  background: ${props => props.theme.colors.gray[100]};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.md};
  overflow-x: auto;
  font-size: 0.875rem;
  margin: 0;
`

function BasicExample() {
  return (
    <Card>
      <Title>1. 기본 사용법</Title>
      <Description>
        styled 함수를 사용하여 기본 스타일 컴포넌트를 만들 수 있습니다.
      </Description>
      <Code>{`const Button = styled.button\`
  background: #6366f1;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
\`

<Button>클릭하세요</Button>`}</Code>
    </Card>
  )
}

export default BasicExample


