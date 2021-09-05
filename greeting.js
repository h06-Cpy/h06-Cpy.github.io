const loginForm = document.querySelector("#username");
const loginInput = document.querySelector("#username input");
const greetDiv = document.querySelector("#greeting");
const greetH1 = document.querySelector("#greeting h1");
const buttonForm=document.querySelector("#greeting form");
const changeButton=document.querySelector("#greeting form input")
const HIDDEN = "hidden";
const USERNAME = "username";
const CHANGEMYNAME="Change my name";

function handleInput(event){  
    event.preventDefault();
    const username=loginInput.value;
    localStorage.setItem(USERNAME, username);
    loginForm.classList.add(HIDDEN)
    paintGreetings(username);
}


function paintGreetings(username){
    
    greetH1.innerText="Hello, " + username;
    greetDiv.classList.remove(HIDDEN);
    buttonForm.addEventListener("click", changeName);
    changeButton.value=CHANGEMYNAME;
}

function changeName(){
    const buttonValue=changeButton.value;
    changeButton.value="No change";
    if(buttonValue===CHANGEMYNAME){
        loginForm.classList.remove(HIDDEN);
        const prevalue=localStorage.getItem(USERNAME);
        if(loginInput.value !== prevalue){
            localStorage.setItem(USERNAME, loginInput.value);
        }

    }else{
        changeButton.value=CHANGEMYNAME;
        loginForm.classList.add(HIDDEN);
    }
    
    
    
}


const savedUser = localStorage.getItem(USERNAME);
if(savedUser){
    loginForm.classList.add(HIDDEN);
    paintGreetings(savedUser);
}else{
    loginForm.addEventListener("submit", handleInput);
}
 