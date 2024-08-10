import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

import Logo from '../../assets/Property 1=Colored.svg';

const HeaderWrapper = styled(Flex)`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 130px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 3rem;

  @media (max-width: 1040px) {
    padding: 0px 40px;

  }

  @media (max-width: 700px) {
    padding: 0px 30px;
  }
  
`;

const LogoImg = styled.img`
  width: 200px;
  height: 50px;
  cursor: pointer;

  

  @media (max-width: 1040px) {
    height: 45px;
  }

  @media (max-width: 700px) {
    height: 40px;
  }
`;

const Nav = styled(Flex)`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;

  
`;

const NavItem = styled(Box)`
  font-size: 16px;
  color: white;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 700px) {
    opacity: 0;
    cursor: default;
  }

  @media (max-width: 1040px) {
    font-size: 13px;
    font-weight: 400;

  }

`;

const Button = styled.a`
  font-size: 14px;
  font-weight: 400;
  height: 45px;
  width: 175px;
  background-color: transparent;
  color: #fff;
  border: solid 3px #fff;
  border-radius: 62px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover{
    background-color: white;
    color: #495B83;
  }

  @media (max-width: 800px) {
    font-size: 10px;
    font-weight: 300;
    width: 120px;
    height: 40px;
  }

  @media (max-width: 1040px) {
    font-size: 12px;
    font-weight: 300;

    width: 130px;
    height: 45px;
  }

  @media (max-height: 600px) {
    font-size: 10px;
    font-weight: 300;

    width: 105px;
    height: 40px;
  }

  
`;

const Header = () => (
  <HeaderWrapper as="header">
    <LogoImg src={Logo}></LogoImg>
    <Nav as="nav">
      <NavItem as="a" href="#">À propos</NavItem>
      <NavItem as="a" href="#">Contact</NavItem>
      <Button href='/signin'>Se Connecter</Button>
    </Nav>
  </HeaderWrapper>
);

export default Header;
