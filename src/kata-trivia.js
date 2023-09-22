// exports = typeof window !== "undefined" && window !== null ? window : global;

class Player {
    constructor(name) {
        this.name = name;
        this.place = 0;
        this.coins = 0;
        this.inPenaltyBox = false;
    }
    advance(roll) {
        this.place += roll;
        if (this.place >= 12) {
            this.place -= 12;
        }
    }
}

function KataTrivia() {
    const players = [];
    this.players2 = players;
    const inPenaltyBox = new Array(6);

    const popQuestions = [];
    const scienceQuestions = [];
    const sportsQuestions = [];
    const rockQuestions = [];

    let currentPlayer = 0;
    let isGettingOutOfPenaltyBox = false;

    const didPlayerWin = function () {
        return !(players[currentPlayer].coins === 6)
    };

    const QuestionCategory = Object.freeze({
        SPORTS: Symbol("Sports"),
        POP: Symbol("Pop"),
        SCIENCE: Symbol("Science"),
        ROCK: Symbol("Rock")
    });


    const currentCategory = () => {
        switch (this.players2[currentPlayer].place % 4) {
            case 0:
                return QuestionCategory.POP;
            case 1:
                return QuestionCategory.SCIENCE;
            case 2:
                return QuestionCategory.SPORTS;
            default:
                return QuestionCategory.ROCK;
        }
    };

    for (let i = 0; i < 50; i++) {
        popQuestions.push("Pop Question " + i);
        scienceQuestions.push("Science Question " + i);
        sportsQuestions.push("Sports Question " + i);
        rockQuestions.push("Rock Question " + i);
    }

    this.isPlayable = function (howManyPlayers) {
        return howManyPlayers >= 2;
    };

    this.add = function (playerName) {
        inPenaltyBox[this.howManyPlayers()] = false;
        players.push(new Player(playerName));

        console.log(playerName + " was added");
        console.log("They are player number " + players.length);

        return true;
    };

    this.howManyPlayers = function () {
        return players.length;
    };

    const selectQuestionDeck = () => {
        switch (currentCategory()) {
            case QuestionCategory.POP:
                return popQuestions;
            case QuestionCategory.SPORTS:
                return sportsQuestions;
            case QuestionCategory.SCIENCE:
                return scienceQuestions;
            case QuestionCategory.ROCK:
                return rockQuestions;
        }
    };

    function askQuestion() {
        let questions = selectQuestionDeck();
        console.log(questions.shift());
    }

    this.roll = function (roll) {
        console.log(players[currentPlayer].name + " is the current player");
        console.log("They have rolled a " + roll);

        if (inPenaltyBox[currentPlayer]) {
            if (roll % 2 !== 0) {
                isGettingOutOfPenaltyBox = true;

                console.log(players[currentPlayer].name + " is getting out of the penalty box");
                players[currentPlayer].advance(roll)

                console.log(players[currentPlayer].name + "'s new location is " + players[currentPlayer].place);
                console.log("The category is " + currentCategory().description);
                askQuestion();
            } else {
                console.log(players[currentPlayer].name + " is not getting out of the penalty box");
                isGettingOutOfPenaltyBox = false;
            }
        } else {
            players[currentPlayer].advance(roll)

            console.log(players[currentPlayer].name + "'s new location is " + players[currentPlayer].place);
            console.log("The category is " + currentCategory().description);
            askQuestion();
        }
    };

    function nextPlayer() {
        currentPlayer++;
        if (currentPlayer === players.length) {
            currentPlayer = 0;
        }
    }

    function addCoin() {
        players[currentPlayer].coins++;
    }

    this.wasCorrectlyAnswered = function () {

        let winner;
        if (inPenaltyBox[currentPlayer]) {
            if (isGettingOutOfPenaltyBox) {
                console.log('Answer was correct!!!!');
                addCoin();
                console.log(players[currentPlayer].name + " now has " +
                    players[currentPlayer].coins + " Gold Coins.");

                let winner = didPlayerWin();
                nextPlayer();

                return winner;
            } else {
                nextPlayer()
                return true;
            }
        } else {
            console.log("Answer was correct!!!!");

            addCoin();
            console.log(players[currentPlayer].name + " now has " +
                players[currentPlayer].coins + " Gold Coins.");

            winner = didPlayerWin();

            nextPlayer();

            return winner;
        }
    };

    this.wrongAnswer = function () {
        console.log('Question was incorrectly answered');
        console.log(players[currentPlayer].name + " was sent to the penalty box");
        inPenaltyBox[currentPlayer] = true;

        nextPlayer();
        return true;
    };
}


let notAWinner = false;

const game = new KataTrivia();

game.add('Chet');
game.add('Pat');
game.add('Sue');

do {

    game.roll(Math.floor(Math.random() * 6) + 1);

    if (Math.floor(Math.random() * 10) === 7) {
        notAWinner = game.wrongAnswer();
    } else {
        notAWinner = game.wasCorrectlyAnswered();
    }

} while (notAWinner);
