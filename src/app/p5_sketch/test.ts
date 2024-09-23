export const sketch = (s: any) => {

    let sw = 2 
    let c: number[] = []
    let strokeColor = 0 
    s.setup = () => {
 
      let canvas2 = s.createCanvas(s.windowWidth - 200, s.windowHeight - 200);
      // creating a reference to the div here positions it so you can put things above and below
      // where the sketch is displayed
      canvas2.parent('sketch-holder');
   
      s.background(255);
      s.strokeWeight(sw);
   
      c[0] = s.color(148, 0, 211);
      c[1] = s.color(75, 0, 130);
      c[2] = s.color(0, 0, 255);
      c[3] = s.color(0, 255, 0);
      c[4] = s.color(255, 255, 0);
      c[5] = s.color(255, 127, 0);
      c[6] = s.color(255, 0, 0);
   
      s.rect(0, 0, s.width, s.height);
   
      s.stroke(c[strokeColor]);
    };
   
    s.draw = () => {
      if (s.mouseIsPressed) {
        if (s.mouseButton === s.LEFT) {
          s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
        } else if (s.mouseButton === s.CENTER) {
          s.background(255);
        }
      }
    };
   
    s.mouseReleased = () => {
      // modulo math forces the color to swap through the array provided
      strokeColor = (strokeColor + 1) % c.length;
      s.stroke(c[strokeColor]);
      console.log(`color is now ${c[strokeColor]}`);
    };
   
    s.keyPressed = () => {
      if (s.key === 'c') {
        window.location.reload();
      }
    };
  };