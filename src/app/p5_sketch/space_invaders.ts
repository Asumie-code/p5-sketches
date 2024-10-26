import p5 from 'p5'



class Drop {
    x: number 
    y: number 
    constructor(x: number, y: number) {
        this.x = x 
        this.y = y 
    }

    show(s: p5) {
        s.noStroke()
        s.fill(50, 0, 200)
        s.ellipse(this.x, this.y , 16, 16)
    }

    move() { 
        this.y = this.y - 2
    }
}




class Flower {
    x: number 
    y: number 

    constructor(s: p5, x: number, y: number) {
        this.x = x
        this.y = y
    }


    show(s: p5) {
        s.fill(255, 0, 200)
        s.ellipse(this.x, this.y , 60, 60)
    }
}



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
    let flowers: Flower[] =  []
    let drops: Drop[] = []
    s.setup = () => {
        let canvas = s.createCanvas(500, 500)
        canvas.parent('sketch-holder')
        ship = new Ship(s)
        for (let i = 0; i < 5; i++) {
            flowers[i] = new Flower(s, i*80+80, 60)
            
        }
    }


    s.draw = () => {
        s.background(51)
        ship.show(s)
        for (let i = 0; i < flowers.length; i++) {
            flowers[i].show(s)
            
        }
        for (let i = 0; i < drops.length; i++) {
            drops[i].show(s)
            drops[i].move()
            
        }
        for (let i = 0; i < drops.length; i++) {
            drops[i].show(s)
            drops[i].move()
            
        }

    }

    s.keyPressed = () => {
        if(s.keyCode === s.RIGHT_ARROW) ship.move(1) 
            else if (s.keyCode === s.LEFT_ARROW) ship.move(-1)
        if(s.key === ' ') drops.push( new Drop(ship.x, s.height))
    }
 }