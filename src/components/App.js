import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
 import Todo from "./Todo"
 
 

const App = () => {
  return (
    <div>
        <Todo/>
         
       
    </div>
  )
}

const appRouter = createBrowserRouter([{
  path: '/',
  element: <App/>
}])

 const root = ReactDOM.createRoot(document.getElementById('root'))
 root.render(<RouterProvider router={appRouter} />)

