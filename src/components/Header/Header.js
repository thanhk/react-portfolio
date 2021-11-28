import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
const prefix = '/react-portfolio';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="https://thanhk.github.io/react-portfolio/">
        <a style={{display: "flex", alignItems: "center", color: 
      'white'}}>
          <AiFillGithub size="3rem" /> <Span>GitHub</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href={prefix+'#projects'}>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={prefix+'#tech'}>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href={prefix+'#about'}>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/thanhk" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/steven-khuu/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/steambun.k/" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/steammbun" target="_blank">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
