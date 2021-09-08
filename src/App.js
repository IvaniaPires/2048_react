import React, { Component, Fragment } from 'react';
import './App.css';
import GameBoard from './GameBoard';

class App extends Component {
  state = {
    board: Array(12).fill(0),
    step:0,
    score:0,
    history: Array(12).fill(0),   
    startGame : true,    
  };

 
  moveLeft =  ()=>{ //résultat quand on joue vers le haut ou vers la gauche
    let tab = this.state.board;
    for(let i = 0; i < 16; i+=4){
      for(let x = i; x < i+3; x++){ 
        if(tab[x] !== 0){
          for(let j = x+1; j < i+4; j++){
            if(tab[j] === tab[i]){              
                tab[i] += tab[j];              
                tab[j] = 0;	
                break;                           					
            }
          }
        }
      }
    }
    for(let i = 0; i < 16; i+=4){
      for(let x = i; x <i+3; x++){
        if(tab[x] === 0){
          for (let j = x+1; j< i+4; j++){
            if(tab[j] !== 0){
              tab[x] = tab[j];
              tab[j] = 0;
              break;
            }
          }
        }
      }
    }
    this.setState({board:tab});      
  }

  moveRight = ()=>{
    let tab = this.state.board;
    for(let i = 0; i < 16; i+=4){
      for(let x = i+3; x > i ; x--){
        if(tab[x]!==0){
          for(let j = x-1; j >= i; j--){
            if(tab[j] === tab[x]){
              tab[x] += tab[j];
              tab[j] = 0;
              break;
            }
          }
        }
      }
    }
    for(let i = 0; i < 16; i+=4){
      for(let x = i+3; x>i; x--){
        if(tab[x] === 0){
          for(let j = x-1 ; j >= i ; j--){
            if(tab[j] !== 0){
              tab[x] = tab[j];
              tab[j] = 0;
              break;
            }
          }
        }
      }
    }
    this.setState({board:tab})	
  }

  moveUp = ()=>{
    let tab = this.state.board;
    for(let i = 12; i < 16; i++){
      for(let x = i-12; x < i ; x+=4){
        if(tab[x]!==0){
          for(let j = x+4; j <= i; j+=4){
            if(tab[j] === tab[x]){
              tab[x] += tab[j];
              tab[j] = 0;
              break;
            }
          }
        }
      }
    }
    for(let i = 12; i < 16; i++){
      for(let x = i-12; x < i ; x+=4){
        if(tab[x] === 0){
          for(let j = x+4; j <= i; j+=4){
            if(tab[j] !== 0){
              tab[x] = tab[j];
              tab[j] = 0;
              break;
            }
          }
        }
      }
    }
    this.setState({board:tab})
  }

  moveDown = () =>{
    let tab = this.state.board;
    for(let i = 0; i < 4; i++){
      for(let x = i+12; x < 12; x-=4){
        if(tab[x]!==0){
          for(let j = x-4; j >= i; j-=4){
            if(tab[j] === tab[x]){
              tab[x] += tab[j];
              tab[j] = 0;
              break;
            }
          }
        }
      }
    }
    for(let i = 0; i < 4; i++){
      for(let x = i+12; x < 12; x-=4){
        if(tab[x]!==0){
          for(let j = x-4; j >= i; j-=4){
            if(tab[j] !== 0){
              tab[x] = tab[j];
              tab[j] = 0;
            }
          }
        }
      }
    }
    this.setState({board:tab})
  }

  
  handleMove = evt =>{
    let identical = true;      
    for (let i = 0; i < 16; i++){
        if (this.state.board[i] !== this.state.history[i]){
            identical = false;
            break;
        }
    }
    if(identical){
      return;
    } else {
      this.setState({history: this.state.board});    
      if(evt.key === "ArrowUp"){ 
        this.moveUp();     
      } else if(evt.key === "ArrowDown"){
        this.moveDown();
      } else if(evt.key === "ArrowRight"){
        this.moveRight();
      } else if(evt.key === "ArrowLeft"){
        this.moveLeft();
      } else {
        return;
      }	
    }  
    
  }

  hasardPosition = ()=>{
    let aux =[];
    for(let i = 0; i < 16; i++){
      if(this.state.board[i]===0){
        aux.push(i);
      }
    }
    return aux[Math.floor(Math.random() * aux.length)];
  }

  hasardValue = ()=>{
    let value;
    (Math.floor(Math.random() * (10)) + 1)===1? value = 4: value = 2;
    return value; 
  }

  render(){
    document.addEventListener('keydown', evt=> {
      this.handleMove(evt)      
    });
    if()
    return(
      <Fragment>
        <GameBoard board={this.state.board}/>
      </Fragment>

    );
  }
}
export default App;