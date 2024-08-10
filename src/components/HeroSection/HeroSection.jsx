import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import { useInView } from 'react-intersection-observer';



const HeroWrapper = styled(Flex)`
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 4rem 20px;
  background: url('/pexels-photo-5212340 1.png') no-repeat center center/cover;
  height: 100vh;
  color: white;
  text-align: center;
  transition: all 0.3s ease;

 

`;

const Headline = styled.h1`
  font-size: 45px;
  font-weight: bold;
  text-align: start;
  margin: 0px 0px 0px 40px;
  max-width: 820px;
  margin-top: 60px;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.8s ease-out, transform 0.6s ease-out;

  @media (max-width: 700px) {
    font-size: 32px;
    max-width: 80%;

    
  }

  @media (max-width: 1040px) {
    font-size: 38px;
    max-width: 80%;
  }

  @media (max-height: 600px) {
    font-size: 26px;
    max-width: 80%;
    }
  
`;

const Subheadline = styled.p`
  font-size: 20px;
  margin: 20px 0px 0px 40px;
  text-align: start;
  max-width: 490px;
  margin-top: 40px;
  font-weight: 200;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: 0.2s;

  @media (max-width: 800px) {
    font-size: 16px;
    margin-top: 30px;
    max-width: 75%;
  }

  @media (max-width: 1040px) {
    font-size: 18px;
    margin-top: 30px;
    max-width: 65%;
  }
`;

const ButtonGroup = styled(Flex)`
  margin: 20px 0px 0px 40px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-top: 40px;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 0.6s ease-out;
  transition-delay: 0.6s;

  
`;

const Button = styled.button`
  width: 180px;
  height: 45px;
  background-color: ${props => (props.primary ? '#007BFF' : '#B669E5')};
  color: white;
  border: none;
  border-radius: 62px;
  font-weight: 400;
  cursor: pointer;
  font-size: 13px;
  transition: background-color 0.3s ease;

  &:hover{
    background-color: ${props => (props.primary ? '#006bdd' : '#9e46d5')};
    color: #ffffffca;
  }

  @media (max-width: 800px) {
    width: 130px;
    height: 45px;
    font-size: 12px;
    font-weight: 300;
    padding: 0px 15px;
  }

  @media (max-width: 1040px) {
    width: 160px;
    height: 50px;
    font-size: 12px;
    font-weight: 400;
    padding: 0px 15px;
  }

  

`;

const HeroSection = () =>  {
  const { ref, inView } = useInView({
   triggerOnce: true, // Only trigger the animation once
   threshold: 0.4, // Trigger when 10% of the component is in view
 });
  return(<HeroWrapper>
    <Headline ref={ref} isVisible={inView}>Connecter les Écoles avec des Éducateurs Talentueux</Headline>
    <Subheadline ref={ref} isVisible={inView}>Rejoignez notre plateforme pour trouver les meilleures opportunités d'emploi ou le personnel idéal pour votre établissement</Subheadline>
    <ButtonGroup ref={ref} isVisible={inView}>
      <Button primary>Établissement</Button>
      <Button>Je suis Enseignant</Button>
    </ButtonGroup>
  </HeroWrapper>);
};

export default HeroSection;
