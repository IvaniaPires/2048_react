import React, { Component, Fragment } from 'react';
import './App.css';
import GameBoard from './GameBoard';

class App extends Component {
  state = {
    board: Array(12).fill(0),
    step:0,
    score:0,
    history: Array(12).fill(0),
    aux1:[],
    aux2:[],
    aux3:[],
    aux4:[],
    startGame : true,    
  };

 fillRows = ()=>{ //création d'une copie de chaque ligne du tableau
    for(let i = 0; i < 16; i++){
        if(i < 4 ){
          this.setState({aux1:this.state.aux1.push(this.state.board[i])})          
        }else if(i < 8 ){
          this.setState({aux2:this.state.aux2.push(this.state.board[i])})
        }else if(i < 12 ){
          this.setState({aux3:this.state.aux3.push(this.state.board[i])})
        }else{
          this.setState({aux4:this.state.aux4.push(this.state.board[i])})
        }  
      }		
  }

 fillColumns = ()=>{ //création d'une copie de chaque colonne du tableau
    for(let i = 0; i<16; i++){
      if(i % 4 === 0 ){
        this.setState({aux1:this.state.aux1.push(this.state.board[i])})
      }else if(i % 4 === 1 ){
        this.setState({aux2:this.state.aux2.push(this.state.board[i])})
      }else if(i % 4 === 2 ){
        this.setState({aux3:this.state.aux3.push(this.state.board[i])})
      }else{
        this.setState({aux4:this.state.aux4.push(this.state.board[i])})
      }  
    }		
  }
  upLeft =  (aux)=>{ //résultat quand on joue vers le haut ou vers la gauche
       
    for(let i = 0; i<3 ; i++){ 
      if(aux[i]!==0){
        for(let j = i+1; j<4; j++){
          if(aux[j]!==0){
            if(aux[i]===aux[j]){              
              aux[j] = 0;						
            }
            break;					
          }
        }
      }
    }
    for(let i = 0; i<3; i++){
      if(aux[i]===0){
        for (let j = i+1; j<4; j++){
          if(aux[j]!==0){
            aux[i]=aux[j];
            aux[j]=0;
            break;
          }
        }
      }
    }	
    return aux;
  }

  
  handleMove = evt =>{
    this.setState({aux1 : [],aux2 : [],aux3 : [],aux4 : []});
    if(evt.key === "ArrowUp"){ //création d'une copie des colonnes de notre tableau et éxecute la function upLeft
      this.fillColumns();
      this.setState({aux1:this.upLeft(this.state.aux1),aux2:this.upLeft(this.state.aux2),aux3:this.upLeft(this.state.aux3),aux4:this.upLeft(this.state.aux4)});
    } else if(evt.key === "ArrowDown"){//création d'une copie des colonnes de notre tableau et éxecute la function downRight
      this.fillColumns();	
    } else if(evt.key === "ArrowRight"){//création d'une copie des lignes de notre tableau et éxecute la function downRight
      this.fillRows();
    } else if(evt.key === "ArrowLeft"){//création d'une copie des lignes de notre tableau et éxecute la function upLeft
     this.fillRows();
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