import p5 from "p5"




export const sketch = (s: p5) => {

    let axiom = 'A'
    let sentence = axiom
    let rules: {a: string, b: string}[] = []

     rules[0] = {
        a: 'A', 
        b: 'ABC'
    }

    rules[1] = {
        a: 'B', 
        b: 'A'
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
    }
 
    s.setup = () => {
        s.noCanvas() 
        s.createP(axiom)
        let button = s.createButton('genereate')
        button.mousePressed(generate)
    }

}