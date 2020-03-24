import React from "react";
import styled from "styled-components"
import Slider from "../components/Slider";

const Site = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
font-family: 'Source Sans Pro', Arial, sans-serif;
`;

const Pricing = styled.ul`
list-style: none;
  margin: 2em;
  padding: 0;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 30px;
  border-bottom-right-radius: 50px;
  color: white;
  background: ${props => props.bgcolor || "yellow"};
  position: relative;
  width: 250px; /* width of each table */
  margin-right: 30px; /* spacing between tables */
  margin-bottom: 1em;
  transition: all .5s;

  :hover {
    transform: scale(1.05);
    transition: all .5s;
    z-index: 100;
    box-shadow: 0 0 10px gray;
  }
`;

const ListItem = styled.li`
    margin: 10px 20px;
    position: relative;
`;

const LiTitle = styled.li`
    font-size: 150%;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    text-transform: uppercase;
    border-bottom: 5px solid white;
`;

const LinkButton = styled.button`
    background: white;
    text-decoration: none;
    padding: 10px;
    display: inline-block;
    max-width: 150px
    margin: 10px auto;
    border-radius: 5px;
    color: navy;
    text-transform: uppercase;

    :hover{
        transform: none;
        box-shadow: none;
    }
`;

const Anker = styled.a`
text-decoration: none
`;



export default function Home() {
  return <Site>
            <Pricing bgcolor="#FA7268">
              <Slider></Slider>
                <LiTitle>App I</LiTitle>
                    <ListItem><b>Persons:</b>2-4</ListItem>
                    <ListItem><b>Rooms:</b>2</ListItem>
                    <ListItem><b>Kitchen:</b>Yes</ListItem>
                    <ListItem><b>Bath:</b>Private</ListItem>
                    <ListItem><b>Netflix:</b>✔️</ListItem>
                    <ListItem><b>Price:</b>40€ / Night</ListItem>
                        <LinkButton> 
                            <Anker href="http://www.airbnb.com">Hier Verfügbarkeit überprüfen und buchen</Anker>
                        </LinkButton>
            </Pricing>
            <Pricing bgcolor="#3F7FBF">
              <Slider></Slider>
                <LiTitle>App II</LiTitle>
                <ListItem><b>Persons:</b>2-4</ListItem>
                <ListItem><b>Rooms:</b>2</ListItem>
                <ListItem><b>Kitchen:</b>Yes</ListItem>
                <ListItem><b>Bath:</b>Private</ListItem>
                <ListItem><b>Netflix:</b>✔️</ListItem>
                <ListItem><b>Price:</b>50€ / Night</ListItem>
                    <LinkButton> 
                        <Anker href="http://www.airbnb.com">Hier Verfügbarkeit überprüfen und buchen</Anker>
                    </LinkButton>            
            </Pricing>
            <Pricing bgcolor="#993399">
              <Slider></Slider>
                <LiTitle>Garsoniera</LiTitle>
                <ListItem><b>Persons:</b>1-2</ListItem>
                <ListItem><b>Rooms:</b>1</ListItem>
                <ListItem><b>Kitchen:</b>No (Waterboiler and Coffeemaker inside)</ListItem>
                <ListItem><b>Bath:</b>Private</ListItem>
                <ListItem><b>Netflix:</b>✔️</ListItem>
                <ListItem><b>Price:</b>30€ / Night</ListItem>
                    <LinkButton> 
                        <Anker href="http://www.airbnb.com">Hier Verfügbarkeit überprüfen und buchen</Anker>
                    </LinkButton>        
            </Pricing>
        </Site>;

}