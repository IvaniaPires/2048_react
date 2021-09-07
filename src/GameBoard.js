import React, { Component, Fragment } from 'react';
import './Game.css';

const GameBoard = props => {
    
    return (
       
        <div id = 'game'>
            {props.board.map((cell, i) => {
                return <div className = 'cell' key={i}> {cell!=0? cell : null}</div>;
            })}
        </div>        
        
    );
    }
    
    export default GameBoard;
    