import React from 'react'
import Logo from './Logo'
import Links from './Links'
import styled from 'styled-components'
import {
    Route,
    Redirect,
    BrowserRouter as Router,
    Switch,
    Link,
  } from "react-router-dom";

const Container = styled.div.attrs({
  className: 'container',
})`
  width: 100vw;
`

const Button = styled.button`
  background-color: black;
  color: white;
  float: right;
  padding: 10px 50px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    color: black;
    background-color: white;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
  margin-bottom: 20px;
  width: inherit;
`

const Profile = ({props}) => {

  return (
    <Container>
        <h2>Voici les informaitons de votre Profil</h2>
``        
        <p>Vous êtes connecter en tant que { props.name }</p>
        <img src={props.avatar} alt="User avatar" />

    </Container>
  )
}

export default Profile