import"./chunk-7KJRK3NW.js";var b=a=>{let o,i,h=1,n=.5,d=.055,p=.062;function c(){let l=o;o=i,i=l}function f(l,t,e){let r=0;return r+=o[l][t][e]*-1,r+=o[l-1][t][e]*.2,r+=o[l+1][t][e]*.2,r+=o[l][t+1][e]*.2,r+=o[l][t-1][e]*.2,r+=o[l-1][t-1][e]*.05,r+=o[l+1][t-1][e]*.05,r+=o[l+1][t+1][e]*.05,r+=o[l-1][t+1][e]*.05,r}a.setup=()=>{a.createCanvas(500,500,a.WEBGL).parent("sketch-holder"),o=[],i=[];for(let t=0;t<a.width;t++){o[t]=[],i[t]=[];for(let e=0;e<a.height;e++)o[t][e]={a:1,b:0},i[t][e]={a:1,b:0}}for(let t=100;t<110;t++)for(let e=100;e<110;e++)o[t][e].b=1},a.draw=()=>{a.background(0);for(let l=1;l<a.width-1;l++)for(let t=1;t<a.height-1;t++){let e=o[l][t].a,r=o[l][t].b;i[l][t].a=e+h*f(l,t,"a")-e*r*r+d*(1-e),i[l][t].b=r+n*f(l,t,"b")+e*r*r-(p+d)*r}a.loadPixels();for(let l=0;l<a.width;l++)for(let t=0;t<a.height;t++){let e=(l+t*a.width)*4;a.pixels[e+0]=a.floor(i[l][t].a*255),a.pixels[e+1]=0,a.pixels[e+2]=a.floor(i[l][t].b*255),a.pixels[e+3]=255}a.updatePixels(),c()}};export{b as sketch};
