import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

const ContactFormWrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  padding-left: 20px;
  background-color: #E4E4E4;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  padding-left: 20px;
  margin: 10px 0;
  border: none;
  outline: none;
  background-color: #E4E4E4;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 1rem;
  width: 130px;
  height: 2.5rem;
  background-color: #007BFF;
  transition: background-color 0.3s ease;
  color: white;
  border: none;
  border-radius: 62px;
  cursor: pointer;
  font-size: 14px;
  
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
  }

  &:hover {
    background-color: #006de2;
  }
`;

const ContactForm = () => (
  <ContactFormWrapper>
    <SectionTitle>Contact Us</SectionTitle>
    <Form>
      <Input type="email" placeholder="Email" required />
      <TextArea placeholder="Your question here..." rows="4" required />
      <Button type="submit">Send</Button>
    </Form>
  </ContactFormWrapper>
);

export default ContactForm;
