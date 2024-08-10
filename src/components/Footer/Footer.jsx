import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

import Logo from '../../assets/logo.svg';
import facebook from '../../assets/facebook.svg';
import google from '../../assets/google.svg';
import linkedin from '../../assets/linkedin.svg';

const FooterWrapper = styled.div`
  
  background-color: #001f3f;
  color: white;
  
  display: flex;
  padding: 2rem 1rem;

  align-items: center;
  justify-content: start;


  
`;

const FirstContainer = styled.div`
  display: flex;

  align-items: center;
  width: 100%;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 780px){

    flex-direction: column;
    align-items: center;
    justify-content: center;

  } 

`;

const LogoDiv = styled.img`

  height: 2rem;
  flex: 1;


  @media (max-width: 780px){

    height: 2rem;

  } 

`;

const Socials = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex: 1;

`;

const Circle = styled.a`
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0.85;
  transition: opacity 0.3s ease;

  &:hover {

    opacity: 1;

  }
`;

const Icon = styled.img`
  height: 15px;

`;

const Links = styled.div`

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px; 
  flex-direction: column;

  @media (max-width: 780px){

    flex-direction: row;
    gap: 1rem;

  }

`;

const Link = styled.a`

  font-size: 14px;
  cursor: pointer;
  opacity: 0.75;

  transition: opacity 0.3s ease;

  &:hover {

    opacity: 1;

  }

`;



const Footer = () => (
  <FooterWrapper>
    <FirstContainer>
      <LogoDiv src={Logo}></LogoDiv>
      <Socials>
        <Circle>
          <Icon src={facebook}></Icon>
        </Circle>
        <Circle>
          <Icon src={google}></Icon>
        </Circle>
        <Circle>
          <Icon src={linkedin}></Icon>
        </Circle>
      </Socials>
      <Links>
          <Link>A propos</Link>
          <Link>Contact</Link>
      </Links>

    </FirstContainer>
    
  </FooterWrapper>
);

export default Footer;
