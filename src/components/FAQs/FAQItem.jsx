import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { useInView } from 'react-intersection-observer';



const ItemWrapper = styled.div`
  background-color: white;
  margin: 10px 0;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: height 0.3s ease;

  opacity: ${props => (props.isVisible ? 1 : 0)};
  transform: ${props => (props.isVisible ? 'translateY(0)' : 'translateY(50px)')};
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  transition-delay: ${props => props.delay || '0.3s'};
  
`;

const Question = styled.h3`
  font-size: 20px;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  transition: color 0.3s ease;
  color: ${props => (props.show ? '#B669E5' : '#686868')};

  span {
    font-weight: 200;
  }
`;

const AnswerWrapper = styled.div`
  height: ${props => (props.show ? props.contentHeight + 'px' : '0')};
  overflow: hidden;
  transition: height 0.3s ease;
`;

const Answer = styled.p`
  font-size: 16px;
  padding: 0 20px 20px;
  margin: 0;
  text-align: start;
  
`;

const Span = styled.span`
  user-select: none;
  -webkit-user-select: none;  /* Safari */
  -moz-user-select: none;     /* Firefox */
  -ms-user-select: none;      /* Internet Explorer/Edge */

`;

const FAQItem = ({ question, answer, delay}) => {
  const [show, setShow] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const answerRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.45, // Trigger when 10% of the component is in view
  });
  

  useEffect(() => {
    setContentHeight(answerRef.current.scrollHeight);
  }, [show]);

  return (
    <ItemWrapper ref={ref} isVisible={inView} delay={delay} onClick={() => setShow(!show)}>
      <Question show={show}>
        {question}
        <Span>{show ? '-' : '+'}</Span>
      </Question>
      <AnswerWrapper show={show} contentHeight={contentHeight}>
        <div ref={answerRef}>
          <Answer>{answer}</Answer>
        </div>
      </AnswerWrapper>
    </ItemWrapper>
  );
};

export default FAQItem;
