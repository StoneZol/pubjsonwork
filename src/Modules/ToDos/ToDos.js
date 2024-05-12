import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ToDos() {
    const {id} = useParams();
    const[todos, setTodos] = useState(null)
    const[complete, setComplete] = useState("")
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => {
            setTodos(response.data);
            console.log(id);
            console.log(response.data);
            setComplete(response.data.completed ? "True" : "False"); // update complete from state todos.completed
        })
        .catch(error => console.log(error))
    }, [id])
  return (
    <div className="Page">
        <div className="PageBox">
            <div className="Item">
                {todos && (
                    <>
                    <h2>id:{todos.id} Title:{todos.title}</h2>
                    <p>{complete}</p>
                    </>
                )}
                <Link to={'/Todos_page'}>Back</Link>
            </div>
        </div>
    </div>
  )
}
