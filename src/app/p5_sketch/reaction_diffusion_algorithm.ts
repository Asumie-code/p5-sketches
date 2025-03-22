import p5 from "p5"



export const sketch = (s: p5) => {
    let grid: {a: number, b: number}[][]
    let next: {a: number, b: number}[][]
    let dA = 1
    let dB = .5
    let feed = 0.055 
    let k = 0.062

    function swap() {
        let temp = grid
        grid = next
        next = temp
    }


    function laplace(x: number, y: number, key: 'a' | 'b' ) {
        let sum = 0
        sum += grid[x][y][key] * -1
        sum += grid[x - 1][y][key] * .2
        sum += grid[x + 1][y][key] * .2
        sum += grid[x][y + 1][key] * .2
        sum += grid[x][y - 1][key] * .2
        sum += grid[x - 1][y - 1][key] * 0.05
        sum += grid[x + 1][y - 1][key] * 0.05
        sum += grid[x + 1][y + 1][key] * 0.05
        sum += grid[x - 1][y + 1][key] * 0.05
 
        return sum
    }





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
                grid[x][y] =  {a: 1, b: 0}
                next[x][y] =  {a: 1, b: 0}
            }
        }

        for(let i = 100; i < 110; i++) {
            for (let j = 100; j < 110; j++) { 
                grid[i][j].b = 1
            }
        }
    }



    s.draw = () => {
        s.background(0)
        for(let x  = 1; x < s.width - 1; x++) {
            for (let y = 1 ; y < s.height - 1; y++) {
                let a = grid[x][y].a 
                let b = grid[x][y].b 
                next[x][y].a = a  + 
                               (dA * laplace(x, y, 'a')) - 
                               (a * b * b) + 
                               feed * (1 - a)
                next[x][y].b = b  + 
                               (dB * laplace(x, y, 'b')) +
                               (a * b * b) -
                               ((k + feed) * b)
               
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


        swap()
    }

}

