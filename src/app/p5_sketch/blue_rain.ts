import p5 from 'p5'

class Drop {
    x: number 
    y: number 
    ySpeed: number
    len: number
    z: number
    constructor(s: p5, x: number, y: number, ySpeed: number, z: number) {
        this.x = x
        this.y = y
        this.z = z
        this.len = s.map(this.z, 0, 20, 10, 20)
        this.ySpeed = s.map(this.z, 0, 20, 4, 10)

    }


    fall(s: p5) {
        this.y = this.y + this.ySpeed
        const gravity = s.map(this.z, 0, 20, 0, 0.1)
        this.ySpeed = this.ySpeed + gravity
        if (this.y > s.height) {
            this.y = s.random(-200, -100)
            this.ySpeed = s.map(this.z, 0, 20, 4, 10)
        }
    }


    show(s: p5, color: {r: number, g: number, b: number } = {r: 138, g: 43, b: 226}) {
        const {r, g, b} = color
        const thick = s.map(this.z, 0, 20, 1, 2)
        s.strokeWeight(thick)
        s.stroke(r, g, b)
        s.line(this.x, this.y, this.x, this.y + this.len)
    }
}



export const sketch = (s: p5) => {
    let d: Drop[] = []



    s.setup = () => {
        s.createCanvas(640, 360)
        for(let i = 0; i < 250; i++) {
            d[i] = new Drop(s, s.random(s.width), s.random(-500, -50), s.random(4, 9),  s.random(0, 20))
        }
    }



    s.draw = () => {
        s.background(230, 230 , 250)
        for(let i = 0; i < 250; i++) {
            
            d[i].fall(s)
            d[i].show(s)

        }


    }
}