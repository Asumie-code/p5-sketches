import"./chunk-7KJRK3NW.js";var g=l=>{let o,a,i=40,r=[],f;function n(s,e){return s<0||e<0||s>o-1||e>a-1?-1:s+e*o}function w(s,e){let t=s.i-e.i;t===1?(s.walls[3]=!1,e.walls[1]=!1):t===-1&&(s.walls[1]=!1,e.walls[3]=!1);let h=s.j-e.j;h===1?(s.walls[0]=!1,e.walls[2]=!1):h===-1&&(s.walls[2]=!1,e.walls[0]=!1)}class d{constructor(e,t){this.i=e,this.j=t,this.walls=[!0,!0,!0,!0],this.visited=!1}show(){let e=this.i*i,t=this.j*i;l.stroke(255),this.walls[0]&&l.line(e,t,e+i,t),this.walls[1]&&l.line(e+i,t,e+i,t+i),this.walls[2]&&l.line(e+i,t+i,e,t+i),this.walls[3]&&l.line(e,t+i,e,t),this.visited&&(l.noStroke(),l.fill(255,0,255,100),l.rect(e,t,i,i))}checkNeighbors(){let e=[],t=r[n(this.i,this.j-1)],h=r[n(this.i+1,this.j)],c=r[n(this.i-1,this.j)],u=r[n(this.i,this.j+1)];if(t&&!t.visited&&e.push(t),u&&!u.visited&&e.push(u),c&&!c.visited&&e.push(c),h&&!h.visited&&e.push(h),e.length>0)return e[l.floor(l.random(0,e.length))]}highlight(){let e=this.i*i,t=this.j*i;l.noStroke(),l.fill(0,0,255,100),l.rect(e,t,i,i)}}l.setup=()=>{l.createCanvas(600,600).parent("sketch-holder"),o=l.floor(l.width/i),a=l.floor(l.height/i);for(let e=0;e<a;e++)for(let t=0;t<o;t++){let h=new d(t,e);r.push(h)}f=r[0]},l.draw=()=>{l.background(51);for(let e of r)e.show();f.visited=!0,f.highlight();let s=f.checkNeighbors();s&&(s.visited=!0,w(f,s),f=s)}};export{g as sketch};
