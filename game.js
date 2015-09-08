// enter = pause
// red left = left, right = right, up = up, down = down
//green mouse in left upper corner = up/leftetc.
var x = 20;
var y = 50;
var x2 = 20;
var y2 = 350;
var score = 0;
var numdots = 5;
var z = random(0, 390);
var z2 = random(0, 390);
var z3 = random(0, 390);
var z4 = random(0, 390);
var z5 = random(0, 390);
var z6 = random(0, 390);
var z7 = random(0, 390);
var z8 = random(0, 390);
var z9 = random(0, 390);
var z10 = random(0, 390);
var draw = function() {
textSize(50);
background(68, 104, 245);
    fill(255, 255, 255);
    line(200, 0, 200, 400);
    line(0, 200, 400, 200);
fill(255, 0, 0);
rect(x, y, 18, 18);
fill(0, 255, 0);
rect(x2, y2, 18, 18);
var speed = 2;
if (keyPressed && keyCode === UP){
    
    y -= speed;}
else if(keyPressed && keyCode ===DOWN){
  y +=speed;  
}
else if(keyPressed && keyCode === LEFT){
    x-=speed;
}
else if(keyPressed && keyCode === RIGHT){
    x+=speed;
}
if (keyPressed && keyCode === ENTER){
    text("pause game", 58, 50);
}
    else if(mouseY>200){
   y2 += speed; 
    }
    else if(mouseY<200){
    y2 -= speed;
    }
if (keyPressed && keyCode === ENTER){
text("pause game", 58, 50);
}
    else if(mouseX>200){
    x2 += speed;
    }
    else if(mouseX<200){
    x2-= speed;
    }
    textSize(25);
    fill(255, 255, 0);
    ellipse(z2, z, 10, 10);
    ellipse(z3, z4, 10, 10);
    ellipse(z5, z6, 10, 10);
    ellipse(z7, z8, 10, 10);
    ellipse(z9, z10, 10, 10);
    if (score > 0){
        fill(0, 255, 0);
    }
    if (score < 0){
        fill(255, 0, 0);
    }
    text("score:", 273, 394);
    text(score, 346, 395);
    if(x2>z-28&&x2<z&&y2>z6-28&&y2<z6){
        score-=1;
        z=999;
    }
    if(x>z-28&&x<z&&y>z6-28&&y<z6){
        score+=1;
        z=999;
    }
        if(x>z2-28&&x<z2&&y>z7-28&&y<z7){
        score-=1;
        z2=999;
        }
        if(x2>z2-28&&x2<z2&&y2>z7-28&&y2<z7){
        score+=1;
        z2=999;
        }
        if(x>z3-28&&x<z3&&y>z8-28&&y<z8){
        score-=1;
        z3=999;
        }
        if(x2>z3-28&&x2<z3&&y2>z8-28&&y2<z8){
        score+=1;
        z3=999;
        }
        if(x>z4-28&&x<z4&&y>z9-28&&y<z9){
        score-=1;
        z4=999;
        }
        if(x2>z4-28&&x2<z4&&y2>z9-28&&y2<z9){
        score+=1;
        z4=999;
        }
        if(x>z5-28&&x<z5&&y>z10-28&&y<z10){
        score-=1;
        z5=999;
        }
        if(x2>z5-28&&x2<z5&&y2>z10-28&&y2<z10){
        score+=1;
        z5=999;
        }
};
