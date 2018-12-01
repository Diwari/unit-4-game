//PsuedoCode
// a game with 4 crystals 
    //Each crystal should have a random number between 1 - 12 
    //A new  random number should be generated every a win or loss is dertermined 
    // to one of the the 4 crystals 
    //when clicking a crystal it should add to pervious result until the total score is hit 
    // if it is greater than the random result the game restarts and incriments a lose
    // if it is equal, then increment a win counter
var random_result;
var loses = 0;
var wins = 0;
var previous = 0;


var startAndReset = function(){

    $(".crystals").empty();
    
    var images = ["https://vignette.wikia.nocookie.net/finalfantasy/images/5/50/BLM_Soul_Crystal.png/revision/latest/scale-to-width-down/120?cb=20120614113332"
    ,"https://vignette.wikia.nocookie.net/finalfantasy/images/2/28/PLD_Soul_Crystal.png/revision/latest/scale-to-width-down/120?cb=20120614113645"
    ,"https://vignette.wikia.nocookie.net/finalfantasy/images/b/b1/SMN_Soul_Crystal.png/revision/latest/scale-to-width-down/120?cb=20170723185727"
    ,"https://vignette.wikia.nocookie.net/finalfantasy/images/d/d0/WAR_Soul_Crystal.png/revision/latest/scale-to-width-down/120?cb=20120614113736"]
    random_result = Math.floor(Math.random() * 101 ) + 19; // hoisting
        console.log(random_result) 

    $("#result").html("Random Result: " + random_result);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1 ;
        //console.log(random);

        
        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random,

            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"    
            });

            // crystal.html(random);

    $(".crystals").append(crystal);
        console.log("Shoryuken");
    }
    
    $("#previous").html("Your current Number" + previous);
}

startAndReset();

var reset = function(){

}

//Event Delegation
$(document).on('click',".crystal", function () {

    



    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html(previous);

    console.log( previous )

    if(previous > random_result ){
        loses--;
        $("#loses").html("loses" + loses)

        previous = 0;

        startAndReset();
        
        console.log("You Lose!!")

    }
    else if(previous === random_result){
        wins ++;
        $("#wins").html("wins"+ wins)

        previous = 0;

        startAndReset();
        console.log("You Win!!")
    }
   

    // var result = num + 5;

    // console.log(result);
});