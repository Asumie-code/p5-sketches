import p5 from 'p5'

class Snake {
    x: number
    y: number 
    xspeed: number 
    yspeed: number 
    scl: number
    total: number
    tail: p5.Vector[]
    constructor(x: number, y: number, xspeed: number, yspeed: number, scl: number) {
        this.x = x 
        this.y = y 
        this.xspeed = xspeed
        this.yspeed = yspeed
        this.scl = scl
        this.total = 1 
        this.tail = []
    }


    update(s: p5) {
        if(this.total === this.tail.length) {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1]
            }
        }
        this.tail[this.total - 1] = s.createVector(this.x, this.y)

        // for (let i = 0; i < this.total - 1; i++) {
        //     this.tail[i] = this.tail[i + 1] 
        // }

        this.x = this.x + this.xspeed * this.scl
        this.y = this.y + this.yspeed * this.scl

        this.x =  s.constrain(this.x, 0, s.width - this.scl)
        this.y =  s.constrain(this.y, 0, s.height - this.scl)
    }

    show(s: p5) {
        s.fill(255)
        for(let i = 0; i < this.tail.length; i++) {
            s.rect(this.tail[i].x , this.tail[i].y, this.scl , this.scl)
        }
       
    }

    dir(x: number, y: number) {
        this.xspeed = x 
        this.yspeed = y
    }

    eat(food: p5.Vector, s: p5) {
        let d = s.dist(this.x, this.y, food.x, food.y)
        if (d < 1) {
            this.total++
            return true
        } else {
            return  false
        }
    }

    death(s: p5) {
        for(let i  = 0; i < this.tail.length; i++) {
            let pos  = this.tail[i]
            let d = s.dist(this.x, this.y, pos.x, pos.y)
            if (d < 1) {
                this.total = 1 
                this.tail = []
            }
        }   
    }


}



export const sketch = (s: p5) => {
    let snake: Snake
    let food: p5.Vector
    let scl: number = 20


    function pickLocation() {
        let cols = s.floor(s.width / scl)
        let rows = s.floor(s.height / scl)
        food = s.createVector(s.floor(s.random(cols)), s.floor(s.random(rows)))
        food.mult(scl)
    }



    s.setup = () => {
       let canvas =  s.createCanvas(500, 500)
       canvas.parent('sketch-holder');
        snake = new Snake(0, 0, 1, 0, scl)
        s.frameRate(15)
       pickLocation()
    }


    s.draw = () => {
        s.background(51)
        snake.death(s)
        snake.update(s)
        snake.show(s)
        if(snake.eat(food, s)) pickLocation()
        s.fill(255, 0, 100)
        s.rect(food.x, food.y, scl, scl)
    }


    s.mousePressed = () => {
        snake.total++
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