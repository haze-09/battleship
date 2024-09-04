import {player1,player2,computer} from "./player.js";
import { boardBuilder, playArea } from "./dom.js";




function boardSetup(type){
    switch (type) {
        case 'pvp':
            boardBuilder('Player 1',player1.board);            
            break;
    
        default:
            break;
    }

}

function gameStart(){
    playArea(player1.board,player2.board);

}


export {boardSetup,gameStart}



