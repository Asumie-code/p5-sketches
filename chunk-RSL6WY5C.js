import"./chunk-7KJRK3NW.js";var s=class{constructor(t,e,i,n,a){this.x=e,this.y=i,this.z=a,this.len=t.map(this.z,0,20,10,20),this.ySpeed=t.map(this.z,0,20,4,10)}fall(t){this.y=this.y+this.ySpeed;let e=t.map(this.z,0,20,0,.1);this.ySpeed=this.ySpeed+e,this.y>t.height&&(this.y=t.random(-200,-100),this.ySpeed=t.map(this.z,0,20,4,10))}show(t,e={r:138,g:43,b:226}){let{r:i,g:n,b:a}=e,o=t.map(this.z,0,20,1,2);t.strokeWeight(o),t.stroke(i,n,a),t.line(this.x,this.y,this.x,this.y+this.len)}},r=h=>{let t=[];h.setup=()=>{h.createCanvas(640,360).parent("sketch-holder");for(let i=0;i<250;i++)t[i]=new s(h,h.random(h.width),h.random(-500,-50),h.random(4,9),h.random(0,20))},h.draw=()=>{h.background(230,230,250);for(let e=0;e<250;e++)t[e].fall(h),t[e].show(h)}};export{r as sketch};
