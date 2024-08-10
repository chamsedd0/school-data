
import React from 'react';

import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs/whyChooseUs';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Features from '../components/Features/Features';
import FAQs from '../components/FAQs/Faqs';
import ContactForm from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const LandingPage = () => (
    <div>
        <Header />
      <HeroSection/>
      <WhyChooseUs/>
      <HowItWorks/>
      <Features/>
      <FAQs/>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
  
  export default LandingPage;