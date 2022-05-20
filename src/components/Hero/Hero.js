import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>

    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        It's pizza time.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.youtube.com/watch?v=6nTcdw7bVdc&ab_channel=KendrickLamar'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;