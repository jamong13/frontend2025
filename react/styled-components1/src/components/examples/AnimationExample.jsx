import React from 'react'
import styled, { keyframes } from 'styled-components'

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

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
`

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`

const AnimatedBox = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => {
    if (props.animation === 'spin') return props.theme.colors.primary
    if (props.animation === 'pulse') return props.theme.colors.secondary
    return props.theme.colors.accent
  }};
  border-radius: ${props => props.theme.borderRadius.md};
  margin: ${props => props.theme.spacing.md} auto;
  animation: ${props => {
    if (props.animation === 'spin') return spin
    if (props.animation === 'pulse') return pulse
    return bounce
  }} 2s infinite;
`

const AnimationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: ${props => props.theme.spacing.lg} 0;
  flex-wrap: wrap;
`

const AnimationLabel = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: 600;
  color: ${props => props.theme.colors.gray[700]};
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

function AnimationExample() {
  return (
    <Card>
      <Title>3. 애니메이션</Title>
      <Description>
        keyframes를 사용하여 애니메이션을 만들 수 있습니다.
      </Description>
      <AnimationContainer>
        <div>
          <AnimationLabel>Spin</AnimationLabel>
          <AnimatedBox animation="spin" />
        </div>
        <div>
          <AnimationLabel>Pulse</AnimationLabel>
          <AnimatedBox animation="pulse" />
        </div>
        <div>
          <AnimationLabel>Bounce</AnimationLabel>
          <AnimatedBox animation="bounce" />
        </div>
      </AnimationContainer>
      <Code>{`import { keyframes } from 'styled-components'

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
\`

const Box = styled.div\`
  animation: \${spin} 2s infinite;
\``}</Code>
    </Card>
  )
}

export default AnimationExample


