import { useState } from "react"

const TodoCreate = (props) => {
    const [getInput,setInput] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: getInput
        }

        props.onCreateTodo(newTodo)
        setInput('')
        // console.log();
    }
    const handleInput = (event) => {
        setInput(event.target.value)
        // console.log(getInput)
    }
    return (
        <form className="px-2.5" onSubmit= { handleSubmit }>
            <div className="flex justify-center items-center">
        <div className="relative"> 
          <input type="text" className="border border-purple-400 h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Add Todo List" value={getInput} onChange={handleInput}/>
            <div className="absolute top-2 right-2">
                
                <button type="submit" className="h-10 w-20 text-white rounded-lg bg-purple-400 hover:bg-purple-600" >Add</button>
                
            </div>
        </div>
    </div>
        </form>
    )
}

export default TodoCreate