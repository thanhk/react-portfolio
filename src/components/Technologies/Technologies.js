import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaAws } from 'react-icons/fa'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have built a few personal websites using React, JavaScript, SCSS, and Next.js. Throughout my coursework, 
      I learned operating systems, network and computer security, software engineering principles, and algorithms 
      and data structures.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Swift
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Azure SQL, GraphQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaAws size="3rem" />
        <ListContainer>
          <ListTitle>AWS</ListTitle>
          <ListParagraph>
            Experience with <br />
            DynamoDB, S3, AppSync, Amplify, Lambda, Cognito
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
