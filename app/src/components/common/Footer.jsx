import React from 'react'
import styled from 'styled-components'

export const Footer = () => {

  return (

    <FooterContainer>
      <div>
        <SocialLinks href="#" className="fab fa-facebook-square"></SocialLinks>
        <SocialLinks href="#" className="fab fa-twitter-square"></SocialLinks>
        <SocialLinks href="#" className="fab fa-github-square"></SocialLinks>
        <SocialLinks href="#" className="fab fa-google-plus-square"></SocialLinks>
      </div>
      &copy;NiftyMarkets 2019
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  color: #29f3db;
  width: 100%;
  padding: 2rem;
  border-top: 1px solid black;
  border-radius: 1rem;
  text-align: center;
  font-size: 1.5rem;
  background-color: #212b38;
`;

const SocialLinks = styled.a`
  font-size: 2rem;
    color: #85BDBF;
    margin: 1rem;
  &:hover {
    color: #C2FCF7;
  }
`;
