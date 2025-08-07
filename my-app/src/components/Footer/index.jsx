import React from 'react';
import Pubsub from 'pubsub-js'
import './index.css'
export default function Footer() {
  const [todos,setCount]  =React.useState([])
  const doneCount = todos.filter(todo => todo.done).length;
  const totalCount = todos.length;
  React.useEffect(() => {
      Pubsub.subscribe('getTodo', (_, todos) => {
        todos = todos || [];
        setCount(todos);
      })
    },[todos])  

    function handleCheckAll(){
      const allDone = doneCount === totalCount;
      setCount(todos => {
        return todos.map(todo => ({...todo, done: !allDone}));
      });
      Pubsub.publish('updateAllTodos', !allDone); // 发布更新所有任务状态的消息
    }
    function clearAllDone(){
      Pubsub.publish('clearDoneTodos');
    }
    return (
      <div className='footer-wrap'>
        <div className="footer">
          <label>
            <input type="checkbox" checked={doneCount===totalCount&&totalCount!==0} onChange={handleCheckAll} />
            <span className="item-name">
              已完成{doneCount}个/全部{totalCount}个 
              {/* 当前是{count}个任务
              <button onClick={add}>+1</button>  */}
            </span>
          </label>
          <button className="btn btn-clear" style={{display:doneCount>0?'block':'none'}} onClick={clearAllDone}>清除已完成任务</button>
        </div>
      </div>
    )
}
