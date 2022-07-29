// bingo is declared here 
const bingo = "bingo";

// card is a function that has the params num
function card(num) {
// notice that if num is greater than 4 then it should return bingo
   if(num > 4){
    // if bingo is a string as the return statement it will return 
    // but if it isnt and i still did not declare it above as string then it will say bingo is undefined 
    return bingo;
   }
}

// it returned bingo because i set it to 5 which is greater 4
console.log(card(5));