import p5 from "p5"



export const sketch = (s: p5) => {
    let grid: {a: number, b: number}[][]
    let next: {a: number, b: number}[][]
    s.setup = () => {
 
        let canvas2 = s.createCanvas(500, 500, s.WEBGL);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        grid = []
        next = []
        for(let x  = 0; x < s.width; x++) {
            grid[x] = []
            next[x] = []
            for (let y = 0 ; y < s.height; y++) {
                grid[x][y] =  {a: s.random(1), b: s.random(1)}
                next[x][y] =  {a: 0, b: 0}
            }
        }
    }



    s.draw = () => {
        s.background(0)
        for(let x  = 0; x < s.width; x++) {
            for (let y = 0 ; y < s.height; y++) {
                next[x][y].a = grid[x][y].a * 0.2
                next[x][y].b = grid[x][y].b * 1.2
            }
        }



        s.loadPixels()
        for(let x  = 0; x < s.width; x++) {
            for (let y = 0 ; y < s.height; y++) {
                let pix = (x + y * s.width) * 4
                s.pixels[pix + 0] = s.floor(next[x][y].a * 255)
                s.pixels[pix + 1] = 0
                s.pixels[pix + 2] = s.floor(next[x][y].b * 255)
                s.pixels[pix + 3] = 255
            }
        }
        s.updatePixels()
    }

}

