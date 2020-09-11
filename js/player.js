class Player{
    constructor(){
        this.name = null ; 
        this.distance = 0 ;
        this.index = null ; 
    }

    //reading playerCount from the database
    getCount(){
        var pcref = database.ref("playerCount");
        pcref.on("value" , function(data){
            playerCount = data.val();
        });
    }

    //writing playerCount in the database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        }); 
    }

    //Writing name in the database
    update(){
        var playerIndex = "players/player" + this.index; 
        database.ref(playerIndex).set({
            Name : this.name , 
            Distance : this.distance
        });
        
    }
    //to get information from the player before creating the object 
    static getPlayerInfo(){
        var piref = database.ref("players");
        piref.on("value" , (data)=>{
            allPlayers = data.val();
        })
    }
}

/*
Player.getPlayerInfo();

Static Functions 
    - Common functions for all the objects
    - Called/used by the class instead of being called by the object
    - not attached to any particular object

    
ARROW FUNCTION
    function name(){

    }
    Syntax:
    (parameter)=>{

    }

    - this - refer to the currently active object
    - Arrow function binds itself to the original object which calls it
*/