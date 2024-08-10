import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

import { useInView } from 'react-intersection-observer';


const FeaturesWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: white;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 2rem;
  color: #272727;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(-50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  
`;

const FeaturesGrid = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FeatureCard = styled(Box)`
  background-color: ${props => props.color || 'white'};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
  height: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${props => props.delay || '0.3s'};


  @media (max-width: 740px) {
    width: 280px;
    height: 240px;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 400;
  color: white;
`;

const FeatureDescription = styled.p`
  font-size: 12px;
  font-weight: 200;
  color: white;
`;

const Features = () => {
  const { ref, inView } = useInView({
   triggerOnce: true, // Only trigger the animation once
   threshold: 0.45, // Trigger when 10% of the component is in view
 });


  return(<FeaturesWrapper>
    <SectionTitle ref={ref} isVisible={inView}>Nos Fonctionnalites</SectionTitle>
    <FeaturesGrid>
      <FeatureCard color="#a569bd" ref={ref} isVisible={inView} >
        <FeatureTitle>Filtre de recherche avancée</FeatureTitle>
        <FeatureDescription>Utilisez des filtres avancés pour trouver le candidat parfait pour votre établissement.</FeatureDescription>
      </FeatureCard>
      <FeatureCard color="#3498db" ref={ref} isVisible={inView} delay="0.45s">
        <FeatureTitle>Correspondance de Profils</FeatureTitle>
        <FeatureDescription>Nous vous mettons en relation avec des profils qui correspondent à vos critères.</FeatureDescription>
      </FeatureCard>
      <FeatureCard color="#a569bd" ref={ref} isVisible={inView} delay="0.6s">
        <FeatureTitle>Profils vérifiés et sécurisés</FeatureTitle>
        <FeatureDescription>Accédez à des profils vérifiés pour assurer la sécurité et la qualité.</FeatureDescription>
      </FeatureCard>
      <FeatureCard color="#3498db" ref={ref} isVisible={inView} delay="0.75s">
        <FeatureTitle>Messagerie directe</FeatureTitle>
        <FeatureDescription>Communiquez directement avec les candidats via notre plateforme.</FeatureDescription>
      </FeatureCard>
    </FeaturesGrid>
  </FeaturesWrapper>);
};

export default Features;
