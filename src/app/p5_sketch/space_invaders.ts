import p5 from 'p5'


class Ship {
    x: number 
    constructor(s: p5) {
        this.x = s.width / 2
    }


    show(s: p5) {
        s.fill(255)
        s.rectMode(s.CENTER)
        s.rect(this.x, s.height - 20 , 20, 60)
    }

    move(dir: number)  {
        this.x += dir * 5
    }
}



 export const sketch = (s: p5) => {
    let ship: Ship
    s.setup = () => {
        let canvas = s.createCanvas(500, 500)
        canvas.parent('sketch-holder')
        ship = new Ship(s)
    }


    s.draw = () => {
        s.background(51)
        ship.show(s)

    }

    s.keyPressed = () => {
        if(s.keyCode === s.RIGHT_ARROW) ship.move(1) 
            else if (s.keyCode === s.LEFT_ARROW) ship.move(-1)
    }
 }