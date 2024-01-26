import axios from "axios";

const baseURL = "http://localhost:5000"

const getAllTodo = (setTodo) => {
    axios.get(`${baseURL}/todos`)
        .then(({ data }) => {
            console.log("data.....>", data);
            setTodo(data);
    })
}

const addTodo = (text, setText, setTodo) => {
    axios.post(`${baseURL}/todo`, { text })
        .then((data) => {
            console.log(data);
            setText("");
            getAllTodo(setTodo);
        })
        .catch((err) => console.log(err));
}

const updateTodo = (todoId, text, setText, setTodo,setIsUpdate) => {
    axios.put(`${baseURL}/update`, { _id: todoId, text })
        .then((data) => {
            console.log(data);
            setText("");
            setIsUpdate(false);
            getAllTodo(setTodo)
        })
        .catch((err) => console.log(err));
}

const deleteTodo = (_id, setTodo) => {
    axios.delete(`${baseURL}/delete`, {data:{_id} })
        .then((data) => {
            console.log(data);
            getAllTodo(setTodo)
        })
        .catch((err) => console.log(err));
}

export {getAllTodo,addTodo,updateTodo,deleteTodo}