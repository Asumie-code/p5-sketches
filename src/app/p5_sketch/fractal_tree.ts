import p5 from "p5"




export const sketch = (s: p5) => {
    let angle = s.PI / 4
    let silder: p5.Element; 


    function branch(len: number) {
        s.line(0, 0, 0,  - len)
        s.translate(0, -len)
        if (len > 4) {
            s.push()
            s.rotate(angle)
            branch(len * 0.67)
            s.pop()
            s.push()
            s.rotate(-angle)
            branch(len * 0.67)
            s.pop()
        }
    }
   
  
    s.setup = () => {
        let canvas2 = s.createCanvas(600, 600);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        silder = s.createSlider(0, s.TWO_PI, s.PI / 4, 0.01)

    }


    s.draw = () => {
        s.background(51)
        angle =  silder.value() as number
        s.stroke(255)
        s.translate(200, s.height)
        branch(100)
    }

}
