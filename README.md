# Todo-app

## process

### project plan
- Create a structured Html and css design for the Todo-app
   - used 'hsl(208, 9%, 28%)' for the text color because black is too sharp. 

   - used font awesome for the icons => "https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.css"

### javascrip achitecture
- when the add button is clicked.
   - added event listener to the add button when clicked,  
   - the input value is gotten and stored in a variable and clearing out the imput field(formBox.value = "").
   - a new Todo text div is created.
   - the input value is displayed as paragraph in the todo-div.

- when the check box is clicked
   - the paragraph in the todo div is [text-decoration: line-through;]
   - todo-div  is [background color : white;]

- when the cancel is pressed 
   - the whole to-do div is deleted