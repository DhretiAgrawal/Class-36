class Form {
    constructor(){
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        //title = "Car Racing Game"
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130, 0);

       
        this.input.position(130,160);
        
       this.button.position(250, 200);
        

        //When button is pressed - mousePressed()
        this.button.mousePressed(function(){
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1 ;
            player.index = playerCount;
            
            //Update the name in database using player object
            player.update();
            //Update the playercount in database using player object
            player.updateCount(playerCount);
            
            this.greeting.html("Hello " + player.name);
            this.greeting.position(130,160);
        });
        
    }

}
                       
/*
HTML
-creates web pages

1. HEAD - libraries, sources
2. BODY - displayed content


********BODY********

Several elements:
    1. Heading of different sizes - h2, h3, h4
    2. Input - from the user
    3. Button

DOCUMENT OBJECT MODEL - p5 Dom Library


Title = "Car Racing Game"
1. Create an element
2. Changing the HTML content
3. Positioning the element
*/