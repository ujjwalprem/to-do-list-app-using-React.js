import React,{useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

const [item,setItem]=useState("");
const[toDoItems,setToDoItems]=useState([]);

function handleChange(event){
  const newValue=event.target.value;
  setItem(newValue);
}
function addItem(){
  setToDoItems(prevItem => {
  return [...prevItem,item]
  });

  setItem("");
}
function deleteItem(id){
  setToDoItems(prevItems =>{
    return prevItems.filter((items,index) =>
    {
      return index !=id;
    });
  });

}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <InputArea
      handle={handleChange}
      values={item}
      add={addItem}
       />
      

      <div>
        <ul>
        {toDoItems.map((todoitem,index) => (
          <ToDoItem
          key={index}
          id={index} 
          text={todoitem}
          onChecked={deleteItem}
           />
        ))}
         
        </ul>
      </div>
    </div>
  );
}

export default App;
