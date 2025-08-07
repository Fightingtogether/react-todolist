import React from 'react';
import Pubsub from 'pubsub-js'
import Item from '../Item'
import './index.css'
export default function List() {
   const [todos,changeTodos] = React.useState([
      { id: 1, name: "Learn React",done:true },
      { id: 2, name: "Build a Todo App" ,done:true},
      { id: 3, name: "Deploy the App",done:false },
    ]);

    React.useEffect(() => {
      Pubsub.subscribe('addTodo', (_, todo) => {
        const newTodos = [...todos, todo];
        changeTodos(newTodos);
      })
      Pubsub.subscribe('updateAllTodos', (_, done) => {
        changeTodos(todos=>{
          return todos.map((todo) => {
            return {...todo, done}; // Example: mark all as done
          });
        })
      })
      Pubsub.subscribe('clearDoneTodos', (_, done) => {
        changeTodos(todos=>{
          return todos.filter((todo) => {
            return !todo.done; // Example: mark all as done
          });
        })
      })
      Pubsub.publish('getTodo', todos); // 发布当前的 todos 列表  
    },[todos])  

    function updateTodos(id,done){
      changeTodos(todos=>{
        return todos.map((todo) => {
          if(todo.id === id) return {...todo, done};
          return todo // Example: mark all as done
        })
      })
    }

    // 删除任务   
    function delTodos(id){
      changeTodos(todos=>{
        return todos.filter((todo) => {
          return todo.id !== id; // Example: remove item with id 1
        })
      })
    }
    return (
      <div>
        <ul className='list-wrap'>
          {
            todos.map((todo) => (
              <Item key={todo.id} {...todo} delTodos={delTodos} updateTodos={updateTodos} />
            ))
          }
        </ul>
      </div>
    )
}
