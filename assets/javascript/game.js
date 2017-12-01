// game object
var game = {
    wins: 0,
    losses: 0,
    goal: 0,
    scoreCount: 0,
    buttonValues: [],
    reset: function () {
        // sets a new goal
        game.goal = Math.floor(Math.random() * 102) + 19;

        // pushes goal to html
        $("#goal-count").text(game.goal);

        // resets score
        game.scoreCount = 0;
        $("#score-count").text(game.scoreCount);

        // creates new button values 
        game.buttonValues = [];
        for (i = 0; i < 4; i++) {
            game.buttonValues.push(game.rng());
        }

        // assigns values to buttons
        $("#button1").attr("value", game.buttonValues[0]);
        $("#button2").attr("value", game.buttonValues[1]);
        $("#button3").attr("value", game.buttonValues[2]);
        $("#button4").attr("value", game.buttonValues[3]);
    },

    // generates and returns random number
    rng: function () {
        return Math.floor(Math.random() * 12) + 1;
    },

    // resets game and adds one to wins
    win: function () {
        alert("you win");
        game.reset();
        game.wins++;
        $("#win-count").text(game.wins);
    },

    // resets game and adds one to losses
    lose: function () {
        alert("you lose");
        game.reset();
        game.losses++;
        $("#loss-count").text(game.losses);
    }
}

game.reset();


console.log(game.buttonValues);
$("button").click(function () {
    let value = $(this).val();
    game.scoreCount = (parseInt(value)) + (parseInt(game.scoreCount))
    console.log(value);
    console.log(game.scoreCount);
    $("#score-count").text(game.scoreCount);
    if (game.scoreCount == game.goal) {
        game.win();
    } else {
        if (game.scoreCount > game.goal) {
            game.lose();
        }
    }
});

$("#reset-btn").click(function () {
    game.reset();
});