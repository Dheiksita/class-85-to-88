var canvas=new fabric.Canvas('myCanvas');
block_widthh=30;
block_heightt=30;

player_x=10;
player_y=10;

var player_object="";
function player_update(){
    fabric.Image.fromURL('player.png',function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
    });

}


function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_widthh);
        block_object.scaleToHeight(block_heightt);
        block_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(block_object);
    });

}

window.addEventListener("keydown",mykeyisdown);
function mykeyisdown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '65'){
        console.log("a and shift is pressed together(increase)");
        block_widthh=block_widthh+10;
        block_heightt=block_heightt+10;
        document.getElementById("width").innerHTML=block_widthh;
        document.getElementById("Height").innerHTML=block_heightt;
    }

    if(e.shiftKey == true && keyPressed == '90'){
        console.log("z and shift is pressed together(decrease)");
        block_widthh=block_widthh-10;
        block_heightt=block_heightt-10;
        document.getElementById("width").innerHTML=block_widthh;
        document.getElementById("Height").innerHTML=block_heightt;
    }
    
    if(keyPressed=='37'){
        left();
        console.log("left");  
    }
    if(keyPressed=='38'){
        up();
        console.log("up");  
    }if(keyPressed=='39'){
        right();
        console.log("right");  
    }if(keyPressed=='40'){
        down();
        console.log("down");  
    }
    if(keyPressed=='87'){
        new_image('wall.jpg');
        console.log("w(wall)");
    }
    if(keyPressed=='71'){
        new_image('ground.png');
        console.log("g(ground)");
    }
    if(keyPressed=='76'){
        new_image('light_green.png');
        console.log("l(light green)");
    }
    if(keyPressed=='84'){
        new_image('trunk.jpg');
        console.log("t(trunk)");
    }
    if(keyPressed=='82'){
        new_image('roof.jpg');
        console.log("r(roof)");
    }
    if(keyPressed=='89'){
        new_image('yellow_wall.png');
        console.log("y(yellow wall)");
    }
    if(keyPressed=='68'){
        new_image('dark_green.png');
        console.log("d(dark green)");
    }
    if(keyPressed=='85'){
        new_image('unique.jpg');
        console.log("u(unique)");
    }
    if(keyPressed=='67'){
        new_image('cloud.jpg');
        console.log("c(cloud)");
    }
}

function up(){
if(player_y>=0){
    player_y=player_y-block_heightt;
    console.log("block image height="+block_heightt);
    console.log("when up arrow is pressed,x= "+player_x+"y="+player_y);
    canvas.remove(player_object);
    player_update();
}
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_heightt;
        console.log("block image height="+block_heightt);
        console.log("when down arrow is pressed,x= "+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
    }

    function left(){
        if(player_x>=0){
            player_x=player_x-block_widthh;
            console.log("block image width="+block_widthh);
            console.log("when left arrow is pressed,x= "+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update();
        }
        }

        function right(){
            if(player_x<=850){
                player_x=player_x+block_widthh;
                console.log("block image width="+block_widthh);
                console.log("when right arrow is pressed,x= "+player_x+"y="+player_y);
                canvas.remove(player_object);
                player_update();
            }
            }