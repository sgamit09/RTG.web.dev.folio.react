import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <List>
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>Front-End</ListContainer>
        <ListParagraph>
        React <br />
        Handlebars
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>Back-End</ListContainer>
        <ListParagraph>
        mySQL <br />
       MongoDB <br />
       GraphQL
        </ListParagraph>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"></DiZend>
        <ListContainer>UI/UX</ListContainer>
        <ListParagraph>
        Figma <br />
        </ListParagraph>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
