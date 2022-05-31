import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>

    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        The Scott-folio
      </SectionTitle>
      <SectionText>
       Where Perfection is Boring
      </SectionText>
      <Button onClick={() => window.open('https://docs.google.com/document/d/1vP7LNimtRn9JRcV4Gm4WeeF9B_KXYQ1C3XfH6DtZvpw/export?format=pdf')}>Journey So Far</Button>
    </LeftSection>
  </Section>
);

export default Hero;