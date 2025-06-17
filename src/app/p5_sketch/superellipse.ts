import p5 from "p5"

export const sketch = (s: p5) => {

    s.setup = () => {
        let canvas2 = s.createCanvas(800, 600);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
    }

    s.draw = () => {
        s.background(51)
        s.translate(s.width / 2, s.height / 2)
        let r = 100
        s.stroke(255)
        s.noFill()
        s.beginShape()
        for(let a = 0; a < s.TWO_PI; a += 0.1) {
            let x = r * s.cos(a)
            let y = r * s.sin(a)
            s.vertex(x, y)
        }
        s.endShape(s.CLOSE)
    }

}
