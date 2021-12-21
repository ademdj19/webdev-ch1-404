let imgs_links = ["imgs/404.png"]
let imgs = []
let text_content = ["404 NOT FOUND","I have bad news for you","The page you are looking for might be removed or is temporarily unavailable"]
let m = ["404 NOT FOUND","I have bad news for you","The page you are looking for might be removed or is temporarily unavailable"]
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz                              0123456789"
let thebutton
let r,g,b,c
let fixcode = "000"
let fixing1 = false
let fixed = [false,false,false];
let inp,realbutton
function preload(){
  for(var i=0;i<imgs_links.length;i++){
    imgs[i] = loadImage(imgs_links[i])
  }
}
function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  imgs[0].resize(round(width*0.517578125),0);
  r=255;
  g=255;
  b=255;
  c=0;
  thebutton = new button(width/2,522,210,59);
  for(var i = 0;i<text_content.length;i++){
    let newt = "";
    for(var j = 0;j<text_content[i].length;j++){
      let s = floor(random(0,26*2+40));
      newt += letters[s];
      console.log(newt,s,i,j);
    }
    text_content[i] = newt;
    console.log(text_content);
  }
  console.log(text_content,m);
  inp = createInput('');
  inp.position(thebutton.x+(thebutton.w-100)/2,thebutton.y+(thebutton.h-30)/2);
  inp.size(100,30);
  inp.input(myInputEvent);
  inp.hide();
  
}

function draw() {
  background(r,g,b);
  fill(0);
  textWrap(WORD);
  textSize(19);
  textFont("Chakra Petch");
  text(text_content[0],width*0.0625,60);
  image(imgs[0],0,height*0.21875);
  fill("#333333");
  textSize(54);
  textFont("Chakra Petch");
  text(text_content[1],width*0.498046875,176,450);
  textSize(22);
  textFont("PT mono");
  text(text_content[2],width/2,372,360);
  
  if(!fixed[0]){
    push();
    fill(255,255,255,c)
    textAlign(CENTER,CENTER);
    textSize(width/10);
    text("FIX THE PAGE",width/2,height/2)
    textAlign(LEFT,TOP);
    textSize(width/70);
    text("press 404",0,0)
    pop();
    thebutton.show();
    if(b<255){
      b+=2;
    }
    if(g<255){
      g+=2;
    }
    if(c>0){
      c-=2;
    }
  }else if(fixed[0] && !fixed[1]){
    push();
    fill(255,255,255,c)
    textAlign(CENTER,CENTER);
    textSize(width/10);
    text("FIX THE BUTTON",width/2,height/2)
    textAlign(LEFT,TOP);
    textSize(width/70);
    text("write go to home page in caps",0,0)
    pop();
    thebutton.show();
    if(b<255){
      b+=2;
    }
    if(g<255){
      g+=2;
    }
    if(c>0){
      c-=2;
    }
  }
  else if(fixed[0] && fixed[1] && !fixed[2]){
    push();
    fill(255,255,255,c)
    textAlign(CENTER,CENTER);
    textSize(width/10);
    text("THANKS",width/2,height/2)
    textAlign(LEFT,TOP);
    textSize(width/70);
    text("the page you are looking for is not found perhaps you want to access another page, go to home page if so otherwise write a url and press go to home, i will help you get there safely",0,0,width)
    pop();
    thebutton.show();
    if(b<255){
      b+=1;
    }
    if(r<255){
      r+=1;
    }
    if(c>0){
      c-=1;
    }
  }
  if(fixing1){
    for(var i = 0;i<text_content.length;i++){
      let newt = "";
      for(var j = 0;j<text_content[i].length;j++){
        if(m[i][j]!=text_content[i][j]){
          let s = floor(random(0,26*2+40));
          newt += letters[s];
        }else{
          newt+=m[i][j]
        }
      }
      text_content[i] = newt;
    }
    if(m[0]==text_content[0]&&m[1]==text_content[1]&&m[2]==text_content[2]){
      fixed[0]=true
      fixing1=false
    }
    console.log("fixing...")
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed(){
  if(!fixed[0]&&!fixed[1]&&!fixed[2]){
    b=0;
    g=0;
    c=255;
    console.log("stage1")
  }
  if(fixed[0]&&!fixed[1]&&!fixed[2]){
    console.log("stage2")
    b=0;
    g=0;
    c=255;
    inp.show();
  }
  if(fixed[0]&&fixed[1]&&!fixed[2]){
    console.log("stage3")
    b=0;
    r=0;
    c=255;
  }
}
function keyPressed(){
  if(!fixed[0]&&!fixed[1]&&!fixed[2]){
    temp = fixcode.substring(1)+key;
    fixcode = temp;
    if(fixcode=="404"){
      fixing1 = true;
    }
  }
}
function myInputEvent() {
  console.log('you are typing: ', this.value());
  if(this.value()=="go to home page in caps" && !fixed[1]){
    realbutton = createButton('go to home page');
    realbutton.position(thebutton.x, thebutton.y);
    realbutton.size(thebutton.w,thebutton.h)
    realbutton.mousePressed(bigpp);
    fixed[1] = true
    inp.position(thebutton.x,thebutton.y+80);
    inp.size(120,30);
    inp.value("URL");
  }
}
function bigpp(){
  if(inp.value()=="URL"){
    var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
    var URL = "home";
    var win = window.open(URL, "_blank", strWindowFeatures);
  }
  else{
    var strWindowFeatures = "location=yes,height=570,width=520,scrollbars=yes,status=yes";
    var URL = ""
    if(inp.value().includes("http")>0){
      URL += "http://"
    }
    URL+=inp.value();
    var win = window.open(URL, "_blank", strWindowFeatures);
  }
}