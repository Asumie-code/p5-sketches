import p5 from 'p5'

class Snake {
    x: number
    y: number 
    xspeed: number 
    yspeed: number 
    scl: number
    constructor(x: number, y: number, xspeed: number, yspeed: number) {
        this.x = x 
        this.y = y 
        this.xspeed = xspeed
        this.yspeed = yspeed
        this.scl = 20
    }


    update(s: p5) {
        this.x = this.x + this.xspeed * this.scl
        this.y = this.y + this.yspeed * this.scl

        this.x =  s.constrain(this.x, 0, s.width - this.scl)
        this.y =  s.constrain(this.y, 0, s.height - this.scl)
    }

    show(s: p5) {
        s.fill(255)
        s.rect(this.x , this.y, this.scl , this.scl)
    }

    dir(x: number, y: number) {
        this.xspeed = x 
        this.yspeed = y
}


}



export const sketch = (s: p5) => {
    let snake: Snake
    s.setup = () => {
       let canvas =  s.createCanvas(500, 500)
       canvas.parent('sketch-holder');
        snake = new Snake(0, 0, 1, 0)
        s.frameRate(15)
    }


    s.draw = () => {
        s.background(51)
        snake.update(s)
        snake.show(s)
    }


    s.keyPressed = () => {
        if (s.keyCode === s.UP_ARROW) {
            snake.dir(0 ,-1)
        } else if (s.keyCode === s.DOWN_ARROW) {
            snake.dir(0, 1)
        } else if (s.keyCode === s.RIGHT_ARROW) {
            snake.dir(1, 0)
        } else if (s.keyCode === s.LEFT_ARROW) {
            snake.dir(-1, 0)
        }
    }


}