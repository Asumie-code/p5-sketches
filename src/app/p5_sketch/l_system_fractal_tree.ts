import p5 from "p5"




export const sketch = (s: p5) => {

    let axiom = 'F'
    let sentence = axiom
    let len  = 100
    let rules: {a: string, b: string}[] = []

     rules[0] = {
        a: 'F', 
        b: 'FF+[+F-F-F]-[-F+F+F]'
    }




    function generate() {
        let nextSentence = ''
        for(let i = 0; i < sentence.length; i++) {
            let current = sentence.charAt(i)
            let found = false
            for(let j = 0; j < rules.length; j++) {
                found = true
                if (current == rules[j].a) {
                    nextSentence += rules[j].b
                    break
                } 
            }
            if(!found) {
                nextSentence += current
            }

        }
        sentence = nextSentence
        s.createP(sentence)
        turtle()
    }


    function turtle() {
        s.background(51)
        s.translate(s.width / 2, s.height)
        s.stroke(255)
        for(let i = 0; i < sentence.length; i++) {
            let current = sentence.charAt(i)
            if(current === 'F') {
                s.line(0, 0, 0, -len)
                s.translate(0 , -len)
            } else if (current === '+') {
                s.rotate(s.PI / 6)
            } else if (current === '-') {
                s.rotate(-s.PI / 6)
            } else if (current === '[') {
                s.push()
            } else if (current === ']') {
                s.pop()
            }
        }
    }
 
    s.setup = () => {
        let canvas2 = s.createCanvas(400, 400);
        // creating a reference to the div here positions it so you can put things above and below
        // where the sketch is displayed
        canvas2.parent('sketch-holder');
        s.background(51)
        s.createP(axiom)
        turtle()
        let button = s.createButton('genereate')
        button.mousePressed(generate)
    }

}