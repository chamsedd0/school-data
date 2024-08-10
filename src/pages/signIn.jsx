import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import Logo from '../assets/logo.svg';
import facebook from '../assets/facebook.svg';
import google from '../assets/google.svg';
import linkedin from '../assets/linkedin.svg';

import '../App.css';




const SignUpWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #eaf2fd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const SignUpContainer = styled(Flex)`
  position: relative;

  height: 90%;
  width: 100%;
  max-width: 1000px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.154);
  overflow: hidden;
  flex-direction: row;


  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LogoIcon = styled.img`
  position: absolute;
  top: 1.2rem;
  left: 1.2rem;
  height: 2.5rem;

  @media (max-width: 768px) {
    bottom: 0.8rem;
    left: 50%;
    transform: translateX(-50%);
    display: none;
  }
`;

const LeftSection = styled(Flex)`
  flex: 0.34;
  background-color: #326bc1;
  color: white;
  padding: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex: none;
    padding: 20px;
    display: none;
  }
`;

const LeftTitle = styled.h1`
  font-size: 2rem;

  

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LeftSubTitle = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  max-width: 65%;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const RightSection = styled.div`
  flex: 0.66;
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const RightTitle = styled.h1`
  color: #326bc1;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const P = styled.p`
  font-size: 12px;
  font-weight: 200;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-align: center;
  display: ${props => props.temporary ? 'none' : 'inline'};

  @media (max-width: 768px) {
    font-size: 10px;
    display: inline;
  }
`;

const A = styled.a`

  display: none;

  @media (max-width: 768px) {
    display: inline;
    font-weight: 400;
    color: #326bc1;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: #062758;
    }
  }

  

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 450px;
`;

const Input = styled.input`
  width: 90%;
  padding: 13px;
  padding-left: 20px;
  background-color: #e4e4e4;
  border: none;
  outline: none;
  border-radius: 14px;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
`;

const Circle = styled.a`
  height: 54px;
  width: 54px;
  border: 3px solid #50505079;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    border: 3px solid #326bc1c7;
  }

  @media (max-width: 480px) {
    height: 44px;
    width: 44px;
  }
`;

const Icon = styled.img`
  height: 18px;
`;

const Button1 = styled.a`
  width: 160px;
  height: 45px;
  background-color: transparent;
  color: white;
  border: 2.5px solid white;
  border-radius: 62px;
  font-size: 12px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background-color: white;
    color: #326bc1;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 40px;
  }
`;

const Button2 = styled.button`
  margin-top: 1rem;
  width: 160px;
  height: 45px;
  background-color: #326bc1;
  color: white;
  border: none;
  border-radius: 62px;
  font-size: 12px;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #23539c;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 40px;
  }
`;

const ReturnArrow = styled.svg`

  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2rem;
  height: 2rem;
  fill: none;
  stroke: #326BC1;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: all 0.3s ease;
  z-index: 3;
  opacity: 0.7;

  &:hover {
    transform: translateX(-3px);
    opacity: 1;
  }

`;

const SignIn = () => (
  <SignUpWrapper>
    <a href="/landing"><ReturnArrow viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7" /></ReturnArrow></a>
    <SignUpContainer>
      <LogoIcon src={Logo} />
      <LeftSection>
        <LeftTitle className='appear'>Bienvenue!</LeftTitle>
        <LeftSubTitle  className='appear'>
        Si vous n'avez pas de compte, créez-en un ici.
        </LeftSubTitle>
        <Button1 className='appear' href="/signup">Créer un compte</Button1>
      </LeftSection>
      <RightSection>
        <RightTitle className='appear'>Connectez-vous avec</RightTitle>
        <Socials className='appear'>
          <Circle>
            <Icon src={facebook} />
          </Circle>
          <Circle>
            <Icon src={google} />
          </Circle>
          <Circle>
            <Icon src={linkedin} />
          </Circle>
        </Socials>
        <Form>
          <P className='appear'>Ou utilisez votre email pour Se Connecter.</P>
          
          <Input className='appear' type="email" placeholder="Adresse Email" required />
          <Input className='appear' type="password" placeholder="Mot de Passe" required />
          <Button2 className='appear'>Se Connecter</Button2>
        </Form>
        <P className='appear' temporary={true}>Je n'ai pas de compte <A href="/signup">Creer un compte</A> !</P>
      </RightSection>
    </SignUpContainer>
  </SignUpWrapper>
);

export default SignIn;
