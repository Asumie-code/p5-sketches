import p5 from "p5"



export const sketch = (s: p5) => {
    let x: number = 0.01, y: number = 0, z: number = 0  

    // the constants in lorenz equations 
    let a: number = 10, b: number = 28, c: number = 8.0/3.0
    let points: p5.Vector[] = []
    s.setup = () => {
 
        let canvas2 = s.createCanvas(800, 600, s.WEBGL);
        s.colorMode(s.HSB)
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');

       
    }



    s.draw = () => {
        s.background(0)

        // change in time 
        let dt: number = 0.01 

        // change in x
        // dx/dt = sigma * (y - x)
        let dx = (a * (y - x)) * dt
        let dy = (x * (b - z) - y) * dt
        let dz = (x * y - c * z) * dt
        x = x + dx
        y = y + dy
        z = z + dz

        points.push(new p5.Vector(x, y, z))
        // s.translate(s.width / 2 , s.height / 2)
        s.scale(5)
        s.noFill()
        s.beginShape()
        let hu = 0
        for(let vector of points) {
            s.stroke(hu, 255, 255)
            s.vertex(vector.x, vector.y, vector.z)
            // let offset: p5.Vector = s.createVector(s.random(-1), s.random(1), s.random(0))
            // offset.mult(0.1)
            // vector.add(offset)
            // hu += 1 
            if (hu > 255) hu = 0 
        } 
        s.endShape()

    }

}
