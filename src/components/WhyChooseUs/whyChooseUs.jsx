import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import { useInView } from 'react-intersection-observer';


const WhyChooseUsWrapper = styled(Flex)`

  display: flex;
  flex-direction: row;
  text-align: start;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  height: 70vh;
  padding: 0rem 4rem;
  

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 35px;
  margin-bottom: 20px;
  color: #262626;
  letter-spacing: 2px;
  max-width: 90%;


  @media (max-width: 1040px) {
    font-size: 28px;
  }

  @media (max-width: 740px) {
    font-size: 24px;
  }
`;

const Desc = styled.div`

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;

`;

const UL = styled.ul`
  margin-left: 3rem;
  list-style: square;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #262626;
  max-width: 65%;

  @media (max-width: 1040px) {
    margin-left: 2rem;
  }

  
`;

const ListElement = styled.li`
  color: #262626;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: 300;

  @media (max-width: 1040px) {
    font-size: 14px;
  }

  
`;

const Img = styled.div`
  width: 400px;
  height: 60%;
  border-radius: 16px;
  background: url('/Rectangle35.png') no-repeat center center/cover;

  @media (max-width: 780px) {
    display: none;
  }
`;

const WhyChooseUs = () => {
   const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.4, // Trigger when 10% of the component is in view
  });


  return(<WhyChooseUsWrapper ref={ref} isVisible={inView}>
    <Desc>
          <SectionTitle>Pourquoi Choisir School Data ?</SectionTitle>
      
          <UL>
            <ListElement>Trouvez les meilleures opportunités adaptées à vos compétences</ListElement>
            <ListElement>Accédez à un vaste vivier d'éducateurs qualifiés</ListElement>
          </UL>
    </Desc>
        <Img></Img>
        
  </WhyChooseUsWrapper>
)};

export default WhyChooseUs;
