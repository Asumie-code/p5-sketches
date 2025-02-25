import p5 from "p5"



export const sketch = (s: p5) => {
    let cols: number, rows: number
    let scl: number = 20
    let w: number = 600
    let h: number = 600 

  
    s.setup = () => {
 
        cols = w / scl 
        rows = h / scl 
        let canvas2 = s.createCanvas(600, 600, s.WEBGL);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');

    }


    s.draw = () => {
        s.background(0)
        s.stroke(255)
        s.noFill()   
        s.translate( -w / 2, -h / 2)
        for (let y = 0; y < rows - 1; y++) {
            s.beginShape(s.TRIANGLE_STRIP)
            for (let x = 0; x < cols; x++) {
                s.vertex(x * scl, y * scl)
                s.vertex(x * scl, (y + 1) * scl)
                // s.rect(x * scl , y * scl , scl, scl)

            }
            s.endShape()
        }
    }

}
