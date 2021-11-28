import React from "react";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";

const About = () =>  (
    <Section id="about">
        <SectionDivider />
        <br />
        <SectionTitle>About Me</SectionTitle>
        <SectionText>
            I am a hard-working, detailed-oriented student and programmer. I love working on products that are visual and interacting 
            with customers. I work great in team environments and am passionate about learning.
        </SectionText>
        <SectionDivider />
    </Section>
);

export default About;
