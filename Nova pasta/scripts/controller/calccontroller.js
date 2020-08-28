class calccontroller{
    constructor (){
        
        this._displaycalcel = document.querySelector("#display");
        this._datael = document.querySelector("#data");
        this._timeel = document.querySelector("#hora");
this.currentdate;
this.initialize();


    }

    initialize(){


    }

    get displaytime(){
        return this._dateel.innerHTML;

    }

    set displaytime(value){
        return this._timeel.innerHTML = value;
    }

    get displaydate(){
return this._dateel.innerHTML;

    }

    set displaydate (value){
        return this.date.innerHTML = value;
    }
get displaycalc(){
    return this._displaycalc;

}
    set displaycalc(value){
        this._displaycalc = value;
    }
    get currentdate(){
        return new date();
    }
    set currentdate(value){
        this._currentdate = value;
    }
}