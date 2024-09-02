import {player1,computer} from "./player.js";
import { boardBuilder } from "./dom.js";




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
    console.log('meow');

}


export {boardSetup,gameStart}



