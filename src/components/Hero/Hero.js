import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, <br />
        I'm Steven Khuu
      </SectionTitle>
      <SectionText>
        I'm a computer science student at the University of Texas at Dallas with an interest in front-end development and software engineering.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;