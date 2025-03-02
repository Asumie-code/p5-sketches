import p5 from "p5"



export const sketch = (s: p5) => {
    let cols: number, rows: number
    let scl: number = 20
    let w: number = 1400
    let h: number = 1000
    let terrain: number[][] = []
    let flying = 0
  
    s.setup = () => {
 
        let canvas2 = s.createCanvas(600, 600, s.WEBGL);
        cols = w / scl 
        rows = h / scl 
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');

        for(let x = 0; x < cols; x++) {
            terrain[x] = []
            for(let y = 0; y < rows ; y++) {
                    terrain[x][y] = 0
                }
        }
       
    }


    s.draw = () => {


        flying -= 0.1
        let yoff = flying 
        for (let y = 0; y < rows; y++) {
            let xoff = 0
            for(let x = 0; x < cols; x++) {
                terrain[x][y] = s.map(s.noise(xoff, yoff), 0, 1, -100, 100)
                xoff += 0.2
            }
            yoff += 0.2
        }



        s.background(0)
       
        s.translate(0, 50);
        s.rotateX(s.PI / 3)
        s.fill(200, 200, 200, 150)   
        s.translate( -w / 2, -h / 2)
        for (let y = 0; y < rows - 1; y++) {
            s.beginShape(s.TRIANGLE_STRIP)
            for (let x = 0; x < cols; x++) {
                s.vertex(x * scl, y * scl, terrain[x][y])
                s.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1])
                // s.rect(x * scl , y * scl , scl, scl)

            }
            s.endShape()
        }
    }

}
