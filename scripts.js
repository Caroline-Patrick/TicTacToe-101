//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below one block at a time.
// 2. Look for the @TODOs, and figure out how to fix them.
    // next to each @TODO you will find tasks that need to be finished

// The variable will change from X to O based on what player turn it is. We need to hold this so we can place an X or O on the board when they're clicked.
let currentMarker = 'X'

let board = [["" , "" , ""], //row 1, index 0
             ["", "", ""], // row 2, index 1
             [ "", "", ""]] // row 3, index 2



// this "handleClick" function is called when a box is clicked. Here, "element" will hold the same value as "this" does in the HTML. 
// "this" is a special word in JS but "element" could have been "thing" or "el" or whatever we wanted it to be as long as we use it again in the "console.log" statement
const handleClick = (element) => {

  // this uses the "log" method on the "console" to log out the element's id so we can see it with our human eyes
  console.log(`The element you clicked on has an id:  ${element.id}`)

  // this next line prevents an X being changed to an O or an O being changed to an X by...
  //  checking to see if the square clicked has anything in it, if not continue to addMarker function
  if(!document.getElementById(element.id).innerHTML){
    addMarker(element.id)
  }
}



// this function places the "currentMarker" inside the HTML element that was clicked and calls the "changeMarker" function.
const addMarker = (id) => {
 
  // @TODO-1: Open the console tab in your Chrome Inspector Tool and click on the top-left square to see what's logged to the console. 
  console.log(`*** The current marker is:  ${currentMarker}. ***`)
  console.log(`Therefore, a  "${currentMarker}"  should be placed in the square with the id:  ${id}`)
  
  // @TODO-2: Build a line of code that will set the innerHTML property of the element that was clicked to the "currentMarker" (either X or O)

  document.getElementById(id).innerHTML = currentMarker;
  
//  let currentElement = document.getElementById(id);
//  currentElement.innerHTML = `${currentMarker}` //?? how is this different from OG line? And why would we want to put the literal here?


  const row = parseInt(id.charAt(0)) // Our "id"s are formatted as 0-1, 0-2, etc., meaning they have 3 indexes  - a number,dash, and another number. The first # = the row and the other # = the column. grabbing the character of the 0 index, takes the first number (our row), and then we grab the third indexed with charAt(2) (our column). we use the parseInt method to get the number rather than it being passed as a string.

  const column = parseInt(id.charAt(2))  // so we can't have parseInt(element.id.charAt(2))? Is that too many levels b/c syntax of parseInt is string.method(index)?
  
  board[row][column] = currentMarker
  
  checkForWin()
}


// This "changeMarker" function changes "X" to "O" in the "currentMarker" variable or "O" to "X"
const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
  } else {
    currentMarker = "X"
  }
}


// This "resetBoard" function is called when the user clicks on the "Restart" button.
const resetBoard = () => {
  
  document.getElementById("winner").innerHTML= null
  board[row][column] = null

  const squares = document.getElementsByTagName("TD")
  // @TODO-3: To make your "Restart" button work you'll need to build a line of code here that:
      // collects all of the "td" elements into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp    
      //  An HTMLCollection is a collection of document elements. So the squares variable is just the collection of all <td></td> elements in the index.html
    

  console.log(squares)
  // loops over the HTML Collection of TDs and clears out the Xs and Os
  for (i=0; i < squares.length; i++) {

    // will log out the id of each square as it loops over them.
    console.log(squares[i].id)

    // sets the innerHTML to null to replace the "X" or "O"
    squares[i].innerHTML = null
  }  
  // reset the marker back to "X"
    currentMarker = 'X'

  
}

const checkForWin  = () => {
  if (horizontalWinner() || verticalWinner() || diagonalWinner == "true"){
    const youWon = document.getElementById("winner").innerHTML = `<h1>Player ${currentMarker} won!</h1>`
  }
  else {
    changeMarker()
  }
}

//check for horizontal winner
const horizontalWinner = () => {

  if((board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") 
  || (board[0][0] == "O" && board[0][1] == "O" && board[0][2] == "O")
  || (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "O")
  || (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O")
  || (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "O")
  || (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O")
  ) {
    console.log("you win!")
    return true;
  }
  
  }

  //check for vertical winner
  const verticalWinner = () => {
  if((board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") 
  || (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O")
  || (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X")
  || (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O")
  || (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X")
  || (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O")
  )
  {
    return true;
  }
  }
  //check for diagonal winner

  const diagonalWinner = () => {
  if((board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") 
  || (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O")
  || (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X")
  || (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O")
)
{
  return true;
}
  }
