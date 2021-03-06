import React from 'react';
import './card.styles.css';

export const Card = props => {
  return <div className='card-container'>
    <img alt='robot' src={`https://robohash.org/${props.robot.id}?set=set3&size=180x180`}></img>
    <h2> {props.robot.name} </h2>
    <p> {props.robot.email} </p>
  </div>;
}