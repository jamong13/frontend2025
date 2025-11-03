import React from 'react'
import styled from 'styled-components'
import BasicExample from './examples/BasicExample'
import PropsExample from './examples/PropsExample'
import AnimationExample from './examples/AnimationExample'
import ThemeExample from './examples/ThemeExample'
import ResponsiveExample from './examples/ResponsiveExample'
import NestingExample from './examples/NestingExample'

const Section = styled.section`
  padding: ${props => props.theme.spacing.xxl} 0;
  max-width: 1200px;
  margin: 0 auto;
`

const Container = styled.div`
  padding: 0 ${props => props.theme.spacing.lg};
`

const SectionTitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.dark};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

function ExamplesSection() {
  return (
    <Section id="examples">
      <Container>
        <SectionTitle>Styled Components 예제</SectionTitle>
        <Grid>
          <BasicExample />
          <PropsExample />
          <AnimationExample />
          <ThemeExample />
          <ResponsiveExample />
          <NestingExample />
        </Grid>
      </Container>
    </Section>
  )
}

export default ExamplesSection


