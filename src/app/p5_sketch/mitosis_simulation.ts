import p5 from "p5"


class Cell {
  pos: p5.Vector 
  r: number
  c: p5.Color
  constructor(s: p5, pos: p5.Vector = s.createVector(s.random(s.width), s.random(s.height)), r: number = 60, c: p5.Color = s.color(s.random(100, 255), 0, s.random(100, 255))) {
    this.pos = pos
    this.r = r
    this.c = c
  } 

  mitosis(s: p5) {
    let cell = new Cell(s, this.pos, this.r/2, this.c)
    return cell
  }

  move(s: p5) {
    let vel = p5.Vector.random2D()
    this.pos.add(vel)
  }

  show(s: p5) {
    s.noStroke()
    s.fill(this.c)
    s.ellipse(this.pos.x, this.pos.y, this.r, this.r)
  }

  clicked(s: p5, x: number, y: number) {
    let d = s.dist(this.pos.x, this.pos.y, x, y)
    if (d < this.r) {
      return true
    } else {
      return false
    }
  }
}

export const sketch = (s: p5) => {
    let cells: Cell[] = []

    s.setup = () => {
        let canvas = s.createCanvas(500, 500)
        canvas.parent('sketch-holder')
        cells.push(new Cell(s))
    }


    s.draw = () => {
        s.background(51)
        for(let cell of cells) {
          cell.move(s) 
          cell.show(s)
        }
    }


    s.mousePressed = () => {
      for(let cell of cells) {
        if ( cell.clicked(s, s.mouseX, s.mouseY)) {
          console.log('clicked')
        }

      }
    }
}