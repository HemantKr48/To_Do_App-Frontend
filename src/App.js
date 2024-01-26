import Todo from "./components/Todo";
import { useState, useEffect } from "react";
import { getAllTodo, addTodo, updateTodo, deleteTodo } from "./utils/HandleApi";

function App() {
	const [todo, setTodo] = useState([]);
	const [text, setText] = useState("");
	const [isUpdate, setIsUpdate] = useState(false);
	const [todoId, setTodoId] = useState("");

	useEffect(() => {
		getAllTodo(setTodo);
	}, []);
	const updateMode = (_id, text) => {
		setIsUpdate(true);
		setText(text);
		setTodoId(_id);
	};
	return (
		<div className="App">
			<div className="container">
				<h1>To do App</h1>

				<div className="top">
					<input
						type="text"
						placeholder="Add Todos..."
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>

					<div
						className="add"
						onClick={
							isUpdate
								? () => updateTodo(todoId, text, setText, setTodo, setIsUpdate)
								: () => addTodo(text, setText, setTodo)
						}
					>
						{isUpdate ? "Update" : "Add"}
					</div>
				</div>

				<div className="list">
					{todo.map((item) => (
						<Todo
							key={item._id}
							text={item.text}
							updateMode={() => updateMode(item._id, item.text)}
							deleteTodo={() => deleteTodo(item._id, setTodo)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
