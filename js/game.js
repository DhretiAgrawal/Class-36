class Game {
    constructor(){}

    // to read gameState from the database
    getState(){
        var gsref = database.ref("gameState");
        gsref.on("value", function (data){  //creating a function as well as using it here
            gameState = data.val();
        });
    }

    //to write gameState in database
    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    //To start the game & display according to the state of the game
    async start(){
        if(gameState === 0){ //WAIT state
            //Creates a new player object
            player = new Player() ; 
            var pcref = await database.ref("playerCount").once("value");
            if(pcref.exists()){
                playerCount = pcref.val();
               player.getCount(); 
            }
            //gets the total count of the players
            
            //creates a new form object
            form = new Form();
            //displays the form
            form.display();
        }
    }

    play(){
        //form needs to be hidden
        form.hide();
        textSize(30);
        text("Game Start " , 120 , 100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var position_text = 130;
            for(var i in allPlayers){

                //To identify the currently active player
                if(i === "player" + player.index ){
                    fill("red");
                }
                else{
                    fill("black");
                }

                position_text = position_text + 20 ; 
                textSize(15);
                text(allPlayers[i].name + ": " + allPlayers[i].distance, 120, position_text);
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance = player.distance + 50 ;
            player.update();
        }
        
        
    }
}

/*
ref()
on() - 2 functions : to read the value, to show the error
set()
update()
*/

/*
for/in loop statement

for(var i = 0; i < array.length; i++){}

for (var i in array){}
for (var i in object){}
*/