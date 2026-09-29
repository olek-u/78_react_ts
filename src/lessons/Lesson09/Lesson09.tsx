import { useState } from "react";

import { InputsContainer, Lesson09Wrapper, Paragraph, Title } from "./styles";


function Lesson09() {
    const [task, setTask] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([]);
    const [error, setError] = useState<string>("");

    const addTask = () => {
        if (task.trim() === "") {
          setError("Ошибка:поле не может быть пустым!");
          return;
        }


        setTasks([task, ...tasks]); 
        setTask(""); 
        setError("");
    }; 


        return (
           <Lesson09Wrapper>
              <Title>ToDo List</Title>
              <Paragraph>Enter the task</Paragraph>
              <InputsContainer>

           <input
             type="text" 
             value={task} 
             onChange={(e) => setTask(e.target.value)} 
             placeholder="          В в е д и т е   з а д а ч у" 
             /> 
             
        <button onClick={addTask}>Add</button>
         {error && <p>{error}</p>} 

         <ul> {tasks.map((task, index) => (
            <li key={index}>{task}</li>
           
        ) 
       ) 
      } 
      </ul> 
       </InputsContainer>
      
  </Lesson09Wrapper>
 );
} 

export default Lesson09;