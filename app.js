// - when the add button is clicked.
//    - the input value is gotten and stored, 
//    - a new Todo text div is created.
//    - the input value is displayed as paragraph in the todo-div.

const addBtn = document.getElementById('add-btn');
const inputBox = document.getElementById('input-box');
const errorMsg = document.querySelector('.error');

addBtn.addEventListener('click', ()=> {
    //stored input value
    var valueGot = inputBox.value 
    console.log(valueGot);

    // if a string has been inputed;
    if(valueGot !== ""){
        //create new div


        //to clear inputfield
        errorMsg.style.visibility = 'hidden';
        inputBox.value = ""; 
    }else{
        errorMsg.style.visibility = 'visible';
    }

    

    
} );