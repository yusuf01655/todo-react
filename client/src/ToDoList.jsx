import React, {useState} from 'react'
function ToDoList(){

    const [tasks,setTasks] = useState(["Eat breakfast","take a shower","walk the dog"]);
    const [newTask, setNewTask] = useState("");
 /** https://youtu.be/9wiWzu_tRB0?si=I2PHqa-Iyck7FrOx&t=944 15:44 */

    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
        

    }
    function deleteTask(index){
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(
    <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input
                type='text'
                placeholder='görev giriniz'
                value = {newTask}
                onChange={handleInputChange}
                />
                <button 
                    className="add-button"
                    onClick={addTask}
                    
                    >
                    Ekle
                </button>
        </div>
        <ol>
            {tasks.map((task,index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button
                         className='delete-button'
                         onClick={() => deleteTask(index)}>
                            Delete
                    </button>
                    <button
                        className='move-button'
                        onClick={() =>moveTaskUp(index)}>
                            ☝
                    </button>
                    <button
                        className='move-button'
                        onClick={() => moveTaskDown(index)}>
                    👇</button>
                </li>
            )}
        </ol>
    </div>);
}
export default ToDoList;