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

const NestedCard = styled.div`
  background: ${props => props.theme.colors.gray[100]};
  border-radius: ${props => props.theme.borderRadius.md};
  padding: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.md} 0;

  h4 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.sm};
    font-size: 1.2rem;
  }

  p {
    color: ${props => props.theme.colors.gray[600]};
    margin-bottom: ${props => props.theme.spacing.sm};
  }

  button {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border: none;
    padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
    border-radius: ${props => props.theme.borderRadius.md};
    cursor: pointer;
    font-weight: 600;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  &:hover {
    background: ${props => props.theme.colors.gray[200]};
  }
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

function NestingExample() {
  return (
    <Card>
      <Title>6. 중첩 스타일링</Title>
      <Description>
        자식 요소에 대한 스타일을 중첩하여 작성할 수 있습니다.
      </Description>
      <NestedCard>
        <h4>중첩된 제목</h4>
        <p>이 텍스트와 버튼은 부모 컴포넌트의 스타일 내에서 정의되었습니다.</p>
        <button>클릭하세요</button>
      </NestedCard>
      <Code>{`const Card = styled.div\`
  background: #f1f5f9;
  padding: 1.5rem;

  h4 {
    color: #6366f1;
    margin-bottom: 1rem;
  }

  p {
    color: #64748b;
  }

  button {
    background: #6366f1;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  &:hover {
    background: #e2e8f0;
  }
\``}</Code>
    </Card>
  )
}

export default NestingExample


