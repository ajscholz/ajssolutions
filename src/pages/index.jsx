import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`


const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Websites so fast<br /> they're more like an app.
        </BigTitle>
        <Subtitle>Seriously. You won't believe what you're seeing. And your customers won't either.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>The Difference</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Next-Gen Tech"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            We utilize cutting-edge web development technology like React, GatsbyJS, and Netlify to build sites that will blow away anything you've used before.
          </ProjectCard>
          <ProjectCard
            title="Mobile Optimization"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Our sites behave more like apps than websites, meaning mobile users will have a better experience than you could imagine. Plus, in some cases you'll end up with a "mobile app" for FREE.
          </ProjectCard>
          <ProjectCard
            title="Improved SEO"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            SEO is tough, but we have it covered. In fact, you'll see an immediate boost in SEO rankings just because of the speed of your site.
          </ProjectCard>
          <ProjectCard
            title="Low Cost"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            The tools we use are extremely low-cost, making our overhead low, and we pass that savings on to you. You won't find a better bang for your buck anywhere. We guarantee it.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About Us</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Andrew Scholz" />
          <AboutSub>
            Andrew Scholz, Founder, AJSolutions
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          <p>
            AJSolutions was born when Andrew was forced to learn web development after starting a non-profit at 30. Some people said he was crazy. They were right.
            Through his own journey trying to run his startup he realized there was a huge need, especially in the non-profit world, for high-performance,
            low-cost websites to get the word out about the good you're trying to do. So if you're trying to make the world a better place, we can help.
            We understand where you are, and how overwhelming it can feel making a dent in the world. We'll build you a supercharged website that will take the stress
            off your online presence, and let you focus on changing the world.
          </p>
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:scholz.andrew4@gmail.com">Hi</a> and let's get to work!
          </ContactText>
        </Inner>
        <Footer>
          <p>&copy; {new Date().getFullYear()} by AJSolutions</p>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
