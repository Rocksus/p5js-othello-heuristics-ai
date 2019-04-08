let board;
const cols=8, rows=8;
const scl=60;
let turn=1; //black is odd
            //white is even
let showMoves = true;
let ai;
let playerTwoAI = true;


function setup(){
  createCanvas(800,800);
  fill(255);
  board = new Board(rows,cols);
  board.setNewGame();
  ai = new AI(1);
  // ai2 = new AI(2);
  // board.place(2,3,2);
  // board.place(2,2,1);
  board.show();
  if(showMoves)
    board.showMoves(2);
}

// function draw() {
//   if(board.isGameOver()<0) {
//     if(turn%2+1==2) {
//       if(ai2.move())
//         turn++;
//     } else if(turn%2+1==1) {
//       if(ai.move())
//       turn++;
//     }
//     background(255);
//     board.show();
//     if((board.validMoves(turn%2+1)).length==0) {
//         turn++;
//     }
//     board.showLastMove();
//   } else {
//     if(board.isGameOver()==2) console.log("Player 2 Wins");
//     else if(board.isGameOver()==1) console.log("Player 1 Wins");
//     else console.log("Draw!");
//     // remove();
//   }
// }

function mouseClicked() {
	let x = mouseX-20;
	let y = mouseY-20;
	if(x<0 || x>rows*scl || y<0 || y>cols*scl) return 0;
	if(board.place(floor((y)/scl), floor((x)/scl), turn%2+1)) {
    background(255);
  	turn++;
    if(playerTwoAI) {
      background(255);
      board.show();
      console.log("AI Moving");
      
      if(ai.move())
      turn++;
    }
  	board.show();
    if((board.validMoves(turn%2+1)).length==0) {
      turn++;
    }
    if(showMoves)
      board.showMoves(turn%2+1);
    board.showLastMove();
  }
}