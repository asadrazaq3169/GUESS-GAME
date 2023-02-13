import inquirer from "inquirer";
async function startFun() {
    const systemNum = Math.floor(Math.random() * 10); // built in function to generate random number between 1-10
    // CLI input function using inquirer library
    const userNum = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: " Enter any Number Between 1-10"
        }
    ]);
    const { userGuess } = userNum;
    console.log("USER'S GUESS :: ", userGuess, "\n SYSTEM'S GUESS :: ", systemNum);
    if (userGuess === systemNum) {
        console.log("Congratulation You won the Game");
    }
    else {
        console.log("Better Luck Next Time");
    }
}
async function startAgain() {
    do {
        await startFun();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: " Do you want to continue ? Press Y or N"
        });
    } while (again.restart == "y" || again.restart == "Y");
}
startAgain();
