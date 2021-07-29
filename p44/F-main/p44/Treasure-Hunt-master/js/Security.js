class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access3=createInput("lock")
        this.access3.position(100,350)
        this.access3.style('background','white')
        
        this.button3=createButton('Check')
        this.button3.position(100,380)
        this.button3.style('background','yellow')

this.access1=createInput("lock")
this.access1.position(100,90)
this.access1.style('background','white')

this.button1=createButton('Check')
this.button1.position(100,120)
this.button1.style('background','yellow')

this.access2=createInput("lock")
this.access2.position(700,190)
this.access2.style('background','white')

this.button2=createButton('Check')
this.button2.position(700,220)
this.button2.style('background','yellow')
this.accessCode1 = "TIME";
this.accessCode2 = "EARTH";
this.accessCode3 = "WHITEHAT";


    }

    display(){

        // Add code to make the buttons function as expected
        


this.button1.mousePressed(()=>{
    if (system.authenticate(this.accessCode1,this.access1.value())){
        this.button1.hide();
        this.access1.hide();
score++;
    }
});

this.button2.mousePressed(()=>{
    if (system.authenticate(this.accessCode2,this.access2.value())){
        this.button2.hide();
        this.access2.hide();
score++;
    }
});

this.button3.mousePressed(()=>{
    if (system.authenticate(this.accessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
score++;
    }
});

    }
 
}