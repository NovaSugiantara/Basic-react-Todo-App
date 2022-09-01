const Todolist = (props) => {
    // console.log(props.dataTodos);
    return (
        <ul>
            {
                props.dataTodos.map((todo) => {
                    return <li key={todo.id} className="border border-purple-500 m-2.5 p-2.5 list-disc">{todo.title}</li>
                })
            }
        </ul> 
    )
}

export default Todolist