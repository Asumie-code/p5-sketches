import p5 from 'p5'


class Ship {
    x: number 
    constructor(s: p5) {
        this.x = s.width / 2
    }


    show(s: p5) {
        s.fill(255)
        s.rect(this.x, s.height - 20 , 20, 20)
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
 }