import"./chunk-7KJRK3NW.js";var a=class{constructor(i,e,h,l,s){this.x=i,this.y=e,this.xspeed=h,this.yspeed=l,this.scl=s,this.total=1,this.tail=[]}update(i){if(this.total===this.tail.length)for(let e=0;e<this.tail.length-1;e++)this.tail[e]=this.tail[e+1];this.tail[this.total-1]=i.createVector(this.x,this.y),this.x=this.x+this.xspeed*this.scl,this.y=this.y+this.yspeed*this.scl,this.x=i.constrain(this.x,0,i.width-this.scl),this.y=i.constrain(this.y,0,i.height-this.scl)}show(i){i.fill(255);for(let e=0;e<this.tail.length;e++)i.rect(this.tail[e].x,this.tail[e].y,this.scl,this.scl)}dir(i,e){this.xspeed=i,this.yspeed=e}eat(i,e){return e.dist(this.x,this.y,i.x,i.y)<1?(this.total++,!0):!1}death(i){for(let e=0;e<this.tail.length;e++){let h=this.tail[e];i.dist(this.x,this.y,h.x,h.y)<1&&(this.total=1,this.tail=[])}}},r=t=>{let i,e,h=20;function l(){let s=t.floor(t.width/h),o=t.floor(t.height/h);e=t.createVector(t.floor(t.random(s)),t.floor(t.random(o))),e.mult(h)}t.setup=()=>{t.createCanvas(500,500).parent("sketch-holder"),i=new a(0,0,1,0,h),t.frameRate(15),l()},t.draw=()=>{t.background(51),i.death(t),i.update(t),i.show(t),i.eat(e,t)&&l(),t.fill(255,0,100),t.rect(e.x,e.y,h,h)},t.mousePressed=()=>{i.total++},t.keyPressed=()=>{t.keyCode===t.UP_ARROW?i.dir(0,-1):t.keyCode===t.DOWN_ARROW?i.dir(0,1):t.keyCode===t.RIGHT_ARROW?i.dir(1,0):t.keyCode===t.LEFT_ARROW&&i.dir(-1,0)}};export{r as sketch};
