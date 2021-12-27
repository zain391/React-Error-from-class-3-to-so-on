import { useState } from "react";
function Welcome(){
    const [todoInput, setTodoInput]=useState("");
    const [arr ,setArr]=useState(["first"]);
    function showing(){
        setTodoInput(document.getElementById("todoInput").value);
        setArr(arr.push(todoInput));
        console.log("i am arr",arr);
    }
    return(
        <div>
            <input type="text" placeholder="enter todo" id="todoInput"/>
            <button  id="addbtn" onClick={showing}>ADD</button>
            {/* <h1>{todoInput}</h1> */}
        </div>
    )
}
export default Welcome;
