import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { FaTwitch } from 'react-icons/fa';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: 'center', color: 'white', marginBottom: '20px', }}>
          {/* DiCssdeck is Icon near Portfolio */}
          <DiCssdeck size="3rem"></DiCssdeck> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
    <SocialIcons href="https://github.com/sgamit09">
      <AiFillGithub size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/scottgamit/">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.instagram.com/barrelroll.vtg/">
      <AiFillInstagram size="3rem" />
    </SocialIcons>
    <SocialIcons href="https://www.twitch.tv/gigascott">
      <FaTwitch size="3rem" />
    </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
