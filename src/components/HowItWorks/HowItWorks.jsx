import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import { useInView } from 'react-intersection-observer';


const HowItWorksWrapper = styled(Flex)`
  
  color: white;
  background: url('/Group7.png') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  justify-content: center;
  gap: 1rem;

  padding: 5rem 4rem;
  
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 0.6s ease-out;
  
`;

const SectionTitle = styled.h2`
  margin-top: 20px;
  font-size: 40px;
  margin-bottom: 30px;
  max-width: 70%;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: 0.3s;



  @media (max-width: 1040px) {
    font-size: 34px;
    margin-bottom: 15px;
  }

  @media (max-width: 740px) {
    font-size: 28px;
    max-width: 80%;
  }
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 50%;
  margin-bottom: 20px;
  font-weight: 200;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: 0.4s;


  @media (max-width: 1040px) {
    font-size: 14px;
    margin-bottom: 15px;
  }

  @media (max-width: 740px) {
    font-size: 14px;
    max-width: 70%;
  }
`;

const Description1 = styled.p`
  font-size: 18px;
  max-width: 50%;
  margin-bottom: 20px;
  font-weight: 400;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: 0.5s;


  @media (max-width: 1040px) {
    font-size: 14px;
    margin-bottom: 15px;
  }

  
`;

const Button = styled.a`

  margin-bottom: 20px;

  width: 180px;
  height: 45px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 60px;
  cursor: pointer;
  font-size: 14px;
  

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out, zbackground-color 0.3s ease;
  transition-delay: 0.6s;

  


  &:hover{
    background-color: white;
    color: #495B83;
  }
  
  @media (max-width: 1040px) {
    width: 160px;
    height: 40px;
    font-size: 12px;
  }

  
`;

const HowItWorks = () => {
  const { ref, inView } = useInView({
   triggerOnce: true, // Only trigger the animation once
   threshold: 0.45, // Trigger when 10% of the component is in view
 });

  return(<HowItWorksWrapper ref={ref} isVisible={inView}>
    <SectionTitle ref={ref} isVisible={inView}>Comment Ça Marche ?</SectionTitle>
    <Description ref={ref} isVisible={inView}>
      Une fois que vous avez créé votre compte, vous êtes affiché aux établissements disponibles pour qu'ils puissent vous choisir.
    </Description>
    <Description1 ref={ref} isVisible={inView}>
      Créez votre profil et laissez-nous nous occuper du reste.
    </Description1>
    <Button href='/signup' ref={ref} isVisible={inView}>Créer un Compte</Button>
  </HowItWorksWrapper>);
  
};

export default HowItWorks;
