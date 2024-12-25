import p5 from "p5"

class Planet {
    radius: number
    angle: number
    distance: number
    constructor(s: p5, r: number, d: number ) {
        this.radius = r 
        this.distance = d
        this.angle = 0
    }

    show(s: p5) {
        s.fill(255)
        s.ellipse(0, 0, this.radius * 2, this.radius * 2 )
    }

}


export const sketch = (s: p5) => {

    let  sun: Planet

    s.setup = () => {
        let canvas2 = s.createCanvas(600, 600);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        sun = new Planet(s, 100, 0)
    }


    s.draw = () => {
        s.background(0)
        s.translate(s.width / 2, s.height / 2)
        sun.show(s)
    }

}