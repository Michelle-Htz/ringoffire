export class Game {
    public players: string[] = []; 
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    //public wird benutzt weil wir aus anderen Datein darauf zugreifen wollen.
    //mit dem : dahinter haben wir die Möglichkeit den Daten Typ anzugeben. 


constructor(){
    //mit einer Vorschleife werden nur alle Karten dem Array hinzugefügt.

    for(let i = 1; i < 14; i++){
      this.stack.push('ace_' + i); 
      this.stack.push('clubs_' + i); 
      this.stack.push('diamonds_' + i); 
      this.stack.push('hearts_' + i); 
    }
    shuffle(this.stack);
}
}

// function shuffle(array) {
//     var currentIndex = array.length, temporaryValue,  randomIndex;
  
//     // While there remain elements to shuffle...
//     while (0 ! == currentIndex) {
  
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex-= 1;
  
//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex]= array[randomIndex];
//         array[randomIndex]= temporaryValue;
//     }
  
//     return array;
//   }

//Die Angabe des Datentypes wurde hier eingefügt. So funktioniert die Funktion!
function shuffle(array: string[]) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
  }

  return array;
}