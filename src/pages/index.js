import React from 'react';
import {
  AboutSection,
  ContactSection,
  HeroSection,
  Page,
  Seo,
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
  return (
    <>
      <Seo title='Lpinventive Marketing Agency' />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId='hero' />
        <AboutSection sectionId='about' heading='About Lpinventive' />
        <ContactSection sectionId='github' heading='Issues?' />
      </Page>
    </>
  );
}
