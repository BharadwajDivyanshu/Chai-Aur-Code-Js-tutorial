const user = {
    name : "Dibu",
    age : 23,

    welcomeMessage : function(){
        console.log(`${this.name} welcome to the website`);
        console.log(user.name);
        //so we use "this" instead of hardcoding the present name because "this" represent the current context(current variables and property) when this function will be called 
        console.log(this);
    }
}

user.welcomeMessage(); //Dibu welcome to the website
                       //Dibu
user.name = "Bunty";
user.welcomeMessage();//Bunty welcome to the website
                      //Bunty
console.log(this); // {} empty object


//**** iReason why this.name is preferred instead of user.name
const user1 = {
    name: "Dibu",
    welcome: function () {
        console.log(this.name);
    }
};

const user2 = {
    name: "Rahul",
    welcome: user1.welcome
};

user1.welcome(); // Dibu
user2.welcome(); // Rahul
//If you had written user1.name inside the function, user2.welcome() would still print "Dibu".

const chai = function (){
    const username = "Dibu";
    console.log(this); //get a lot of thing
    console.log(this.username); //undefined

}
 const chaiArrow = () => {
    const username = "Dibu";
    console.log(this); // here we get "{}"
    console.log(this.username); //undefined

}

chai();
chaiArrow();

