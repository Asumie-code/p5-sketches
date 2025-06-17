import p5 from "p5"

export const sketch = (s: p5) => {

    let silder: p5.Element
    function sgn(val: number): number {
        if (val > 0) return 1 
        else if(val < 0 ) return -1 
        else return 0
    }

    s.setup = () => {
        let canvas2 = s.createCanvas(800, 600);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        silder = s.createSlider(0, 10, 2, 0.01)

    }

    s.draw = () => {
        s.background(51)
        s.translate(s.width / 2, s.height / 2)
        let a = 100, b = 100, n = silder.value() as number

        s.stroke(255)
        s.noFill()
        s.beginShape()
        for(let angle = 0; angle < s.TWO_PI; angle += 0.1) {
            // let x = r * s.cos(angle)
            // let y = r * s.sin(angle)
            let na = 2/n
            let x = s.pow(s.abs(s.cos(angle)), na) * a * sgn(s.cos(angle))
            let y = s.pow(s.abs(s.sin(angle)), na) * b * sgn(s.sin(angle))
            s.vertex(x, y)
        }
        s.endShape(s.CLOSE)
    }

}
