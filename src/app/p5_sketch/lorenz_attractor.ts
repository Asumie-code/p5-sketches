import p5 from "p5"



export const sketch = (s: p5) => {
    let x: number = 0.01, y: number = 0, z: number = 0  

    // the constants in lorenz equations 
    let a: number = 10, b: number = 28, c: number = 8.0/3.0
  
    s.setup = () => {
 
        let canvas2 = s.createCanvas(800, 600, s.WEBGL);

        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        s.background(0)

       
    }



    s.draw = () => {
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


        // s.translate(s.width / 2 , s.height / 2)
        s.scale(5)
        s.stroke(255)
        s.point(x, y, z)


    }

}
