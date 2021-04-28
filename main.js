var read_line_sync =  require("readline-sync"); //imported prompt alertnative 
var chalk =  require("chalk"); //imported chalk  ( it makes  ux better)

score = 0 ; //+1 when user enters right answer and vice-versa
var questions = [//Array

    questionOne ={//Obj inside array
        query : "What is my favourite sport?\n",  
        answer: "football"

},
    questionTwo ={
        query : "What is my favourite space agency?\n",
        answer: "spacex"

},
    questionThree ={
        query : "Who is my favourite fictional character?\n",
        answer: "steve rogers"

},
    questionFour ={
        query : "What is my favourite book?\n",
        answer: "freakonomics"

},
    questionFive ={
        query : "What is my favourite movie?\n",
        answer: "1917"

},
]
//Welcome message
console.log(chalk.green("Welcome to How Well Do You Know Me  quiz")); 
//user name
const current_user = read_line_sync.question(chalk.cyan("Enter you first name please\n"));
// console.log(chalk.blue(user_name));

/*  work in progress
var exit =  read_line_sync.question(`Press "S" to start , Press "E"/"e" to exit `);


while (exit !="e".toUpperCase) {}
*/
    

for ( let i=0;i<questions.length;i++){
   
        
    

    current_question = read_line_sync.question(chalk.yellowBright(questions[i].query));// this variable   contains every question key from  question[]array
    current_answer = questions[i].answer; // this variable   contains every answer key  from  question[]array
    console.log(`your answer is ${current_question}`);
    if (current_question===  current_answer){
        console.log(chalk.greenBright("right answer bud , +1 "));
        score ++ ;
        

    } else {
        if(current_question===''){
            console.log("You skipped the question"); //nested  if &else statment in else loop for exceptional cases 
        
        }
        else{
        console.log(chalk.red("wrong answer , -1")); 
        score--;
        }
    }
    
    console.log(`your score is ${chalk.magentaBright(score)}`);
}

/*todo - high score 
*/
console.log(`high score is ${chalk.magentaBright(Math.max(score))} by ${chalk.grey.bold(current_user)}`);


/* todo 
-add a  while loop to the entire code with "exit" functionality 
- keeping the data of diffrent users and their scores 
- console logging  the "user-name" and "high-score" of each and every user
*/


