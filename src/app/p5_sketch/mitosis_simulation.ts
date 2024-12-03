import p5 from "p5"


class Cell {
  pos: p5.Vector 
  r: number
  c: p5.Color
  constructor(s: p5) {
    this.pos = s.createVector(s.random(s.width), s.random(s.height))
    this.r = 70
    this.c = s.color(s.random(100, 255), 0, s.random(100, 255))
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
}

export const sketch = (s: p5) => {
    let cell: Cell
    s.setup = () => {
        let canvas = s.createCanvas(500, 500)
        canvas.parent('sketch-holder')
        cell = new Cell(s)
    }


    s.draw = () => {
        s.background(51)
        cell.move(s) 
        cell.show(s)
    }
}