let todo = [];

let req = prompt("Enter your request choice");

while (true) {
    if (req == "quit") {
        console.log("quitting qpp");
        break;
    }

    if (req == "list") {
        console.log("----------------");
      
        for( list of todo){
            console.log(list);
        }
        console.log("----------------");
        break;
    } else if (req == "add") {
        let task = prompt("Enter the item which you want to add");
        todo.push(task);
        console.log("Task added sucessfully");
       
    }else if(req=="delete"){
        let idx = prompt("Enter the index which you want to delete");
        todo.splice(idx,1);
        console.log("Element deleted sucesfully");
    }

   req = prompt("Enter your request choice");



}