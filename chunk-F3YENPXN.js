import{a as g}from"./chunk-2465R3FW.js";import{g as s}from"./chunk-7KJRK3NW.js";var o=s(g()),w=e=>{class l{constructor(r,h){this.begin=r,this.end=h,this.finished=!1}show(){e.stroke(255),e.line(this.begin.x,this.begin.y,this.end.x,this.end.y)}branch(r="right",h=6){let n=o.default.Vector.sub(this.end,this.begin);r==="right"&&n.rotate(e.PI/h),r==="left"&&n.rotate(-e.PI/h),n.mult(.67);let f=o.default.Vector.add(this.end,n);return new l(this.end,f)}jitter(){this.end.x+=e.random(-1,1),this.end.y+=e.random(-1,1)}}let u=e.PI/4,b,a,i=[],d=[],c=0;e.setup=()=>{e.createCanvas(600,600).parent("sketch-holder");let r=e.createVector(e.width/2,e.height),h=e.createVector(e.width/2,e.height-100);a=new l(r,h),i[0]=a},e.mousePressed=()=>{for(let t=i.length-1;t>=0;t--)i[t].finished||(i.push(i[t].branch("right")),i.push(i[t].branch("left"))),i[t].finished=!0;if(c++,c===6){for(let t=0;t<i.length;t++)if(!i[t].finished){let r=i[t].end.copy();d.push(r)}}},e.draw=()=>{e.background(51);for(let t of i)t.show();for(let t of d)e.fill(255,0,100),e.ellipse(t.x,t.y,8,8),t.y+=e.random(0,1)}};export{w as sketch};
