import React from 'react'
import { useState } from 'react'
import todo_icon from "../assets/todo_icon.png"
import tick_icon from "../assets/tick.png"
import not_tick_icon from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"

const Todo = () => {
    const [ todoList, setTodoList] = useState([])
    const [task, setTask] = useState('')

    const AddTask =()=>{
        if(task.trim()!==''){
            setTodoList([...todoList, {id: Date.now(), text: task, isComplete: false}])
            setTask('')
        }

    }
    const HandleKey=(event)=>{
        if(event.key==='Enter'){
            AddTask()
        }
    }
    const HandleDelete=(id)=>{
        setTodoList(todoList.filter((todo)=>todo.id!==id))
    }
    const HandleToggle=(id)=>{
        setTodoList(todoList.map((todo)=>todo.id===id? {...todo, isComplete:!todo.isComplete}: todo))
    }
  return (
    <div className='flex flex-col justify-center items-center mt-5 '>
        <div className='w-[340px] min-h-[420px] bg-slate-200 rounded-md'>
        <div className='flex items-center justify-center border-black]'>
            <div><img className='w-7' src={todo_icon} alt="" /></div>
            
            <h1 className=' mx-2 p-3 text-2xl font-bold'>React Todo</h1>
        </div>
        <div className='flex justify-center bg-white rounded-md mx-11  '>
           <input className='px-2 py-1 bg-transparent outline-none  ' value={task} onKeyDown={ HandleKey} onChange={(e)=>setTask(e.target.value)} type="text" placeholder='Add Your Task' />
           <button className='px-2 py-1   text-center   bg-transparent' onClick={()=>AddTask()}>Add</button>
        </div>
        <div>
        <div className='mt-3  '>{todoList.map((todo)=>(<div className='flex flex-wrap justify-center items-center'>
            <div onKeyDown={HandleKey} onClick={()=>HandleToggle(todo.id)} className='flex  items-center justify-between hover:cursor-pointer'>
            <div><img  className='w-5 hover:cursor-pointer' src={todo.isComplete? tick_icon : not_tick_icon } alt="" /></div>
            <div><h2 className={`mx-3 text-xl font-light text-center font-sans ${todo.isComplete? "line-through text-gray-400 " : "" } `} key={todo.id}>{todo.text}</h2></div>
            </div>
            <div><img  onClick={()=>HandleDelete(todo.id)} className='w-5 hover:cursor-pointer' src={delete_icon} alt="" /></div>
            
            </div>))}
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Todo
