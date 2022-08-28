export class Contact {
    
    first_name = '';
    last_name = '';
    email = '';
    conected = false;

    //CONSTRUCTORS-----------------------------------------------------------
    constructor(first_name,last_name,email,conected){
        this.setFirstName(first_name);
        this.setLastName(last_name);
        this.setEmail(email);
        this.setConected(conected);
    }

    //SETTERS-----------------------------------------------------------
    setFirstName(first_name){
        this.first_name = first_name;
    }

    setLastName(last_name){
        this.last_name = last_name;
    }

    setEmail(email){
        this.email = email;
    }

    setConected(conected){
        this.conected = conected;
    }

    //GETTERS-----------------------------------------------------------
    getFirstName(){
        return this.first_name;
    }

    getLastName(){
        return this.last_name;
    }

    getEmail(){
        return this.email;
    }

    getConected(){
        return this.conected;
    }

}