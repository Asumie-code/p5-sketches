import p5 from "p5"




export const sketch = (s: p5) => {
    let cols: number, rows: number
    let w: number = 40
    let cells: Cell[] = []

    class Cell {
        i: number 
        j: number 
        constructor(i: number, j: number) {
            this.i = i 
            this.j = j
        }
    
    
    
        show() {
            let x = this.i * w
            let y = this.j * w
            s.stroke(255)
            s.noFill()
            s.rect(x, y, w, w)
        }
    }
    
  
    s.setup = () => {
        let canvas2 = s.createCanvas(600, 600);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        cols = s.floor(s.width / w)
        rows = s.floor(s.height / w)
        console.log(rows)
        console.log(cols)
        for(let j = 0; j < rows; j++) {
            for(let i = 0; i < cols; i++) {
                let cell = new Cell( i, j)
                cells.push(cell)
            }
        }

    }


    s.draw = () => {
        s.background(51)
        for (let cell of cells) {
            cell.show()
        }
    }

}


