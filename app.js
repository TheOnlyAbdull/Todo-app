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
        var div = document.createElement('div');
        div.classList.add('todo-text');

        //create new checkbox
        var checkBox = document.createElement("input");
        checkBox.type = 'checkbox';
        //checkBox.id = 'todo'

        // Create the <p> element
        var p = document.createElement('p');
        p.textContent = valueGot;

        // Add event listener to the checkbox
        checkBox.addEventListener('click', ()=>{
            if(checkBox.checked){
                p.style.textDecoration = "line-through";
            }else{
                p.style.textDecoration = "none";
            }
        });

        //craete new <i> element
        var i = document.createElement('i');
        i.classList.add('fa', 'fa-times')
        i.setAttribute('aria-hidden', 'true');

        //append child to the div created
        div.appendChild(checkBox);
        div.appendChild(p);
        div.appendChild(i);

        //append child to the .error paragraph
        errorMsg.insertAdjacentElement('afterend', div);

        //to delete element
        i.addEventListener('click', ()=> {
            div.remove();
        });

        //hide error message
        errorMsg.style.visibility = 'hidden';

        //to clear inputfield
        inputBox.value = ""; 
    }else{
        //show error message
        errorMsg.style.visibility = 'visible';
    }

    
} );


