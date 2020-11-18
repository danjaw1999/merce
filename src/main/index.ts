class Animal {
    private run: string;
    private sound: string;
    constructor(run: string, sound: string){
        this.run = run;
        this.sound = sound;
    }
        text(spanie = 'spać'){
            console.log(`Zwierzątko ${this.run} i ${this.sound} i pójdzie ${spanie}`)
        }
    
}

const pies = new Animal('bieganie', 'szczekanie');
pies.text();




