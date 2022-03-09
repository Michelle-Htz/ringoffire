import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
 currentCard:string = '';
  game: Game = new Game;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
this.game = new Game();
console.log(this.game);
  }

  takeCard(){
    if(!this.pickCardAnimation){// nur wenn(!Variable false ist) wird es ausgeführt. Wir können also nur noch alle 1500sek ausführen.
 this.currentCard = this.game.stack.pop();
    //mit this.game greifen wir auf aud Array zu mit pop() greifen wir auf den 
    //letzten Wert des Arrays zu gleichzeitig wird er aus dem Array entfernt#
    this.pickCardAnimation = true;
    console.log(this.currentCard);
    console.log(this.game);

    setTimeout(()=>{
      //Sobald die Animation fertig ist wird die Karte dem Array hinzugefügt
      this.game.playedCards.push(this.currentCard);
      this.pickCardAnimation = false;//Animation wird zurück auf false gesetzt, damit sie erneut ausgeführt werden kann.
      //Die gezeigte Karte verschwindet und geht wieder ins Deck. 
    },1000);
    }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

    
  


