import React, { Component, Fragment } from 'react';
import './App.css';
import GameBoard from './GameBoard';

class App extends Component {
  state = {
    board: Array(12).fill(0),
    step:0,
    score:0,
    history: Array(12).fill(0) 
  };

  handleMove = evt =>{
    if(evt.key === "ArrowUp"){ //création d'une copie des colonnes de notre tableau et éxecute la function upLeft
      
    } else if(evt.key === "ArrowDown"){//création d'une copie des colonnes de notre tableau et éxecute la function downRight
      	
    } else if(evt.key === "ArrowRight"){//création d'une copie des lignes de notre tableau et éxecute la function downRight
      
    } else if(evt.key === "ArrowLeft"){//création d'une copie des lignes de notre tableau et éxecute la function upLeft
     
    } else {
      return;
    }	
  }


  render(){
    document.addEventListener('keydown', evt=> {
      this.handleMove(evt)      
    });
    return(
      <Fragment>
        <GameBoard board={this.state.board}/>
      </Fragment>

    );
  }
}
export default App;