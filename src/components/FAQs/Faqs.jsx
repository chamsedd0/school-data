import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';
import FAQItem from './FAQItem';

import { useInView } from 'react-intersection-observer';

const FAQsWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #9b59b6, #3498db);
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: white;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const FAQGrid = styled(Flex)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1200px) {
    
    gap: 2rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FAQColumn = styled(Box)`
  width: 50%;
  max-width: 600px;
  margin: 20px;
  
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const VideoPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ffffffb9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'scale(1)' : 'scale(0.8)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  

`;

const VideoContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  cursor: pointer;
`;

const FAQs = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.45, // Trigger when 10% of the component is in view
  });


  return(<FAQsWrapper>
    <SectionTitle>FAQs</SectionTitle>
    <FAQGrid>
      <FAQColumn>
        <FAQItem question="Comment puis-je créer un compte ?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <FAQItem delay="0.45s" question="Mes informations personnelles sont-elles sécurisées ?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <FAQItem delay="0.6s" question="Comment filmer la vidéo CV ?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <FAQItem delay="0.75s" question="Comment puis-je contacter le service client ?" answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </FAQColumn>
      <FAQColumn>
        <VideoPlaceholder ref={ref} isVisible={inView}>
        <VideoContent>
            
          </VideoContent>
        </VideoPlaceholder>
      </FAQColumn>
    </FAQGrid>
  </FAQsWrapper>);
};

export default FAQs;
