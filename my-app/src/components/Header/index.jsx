
import Pubsub from 'pubsub-js'
import React from 'react' 
import './index.css'
export default function Header() {
    function handleEnter(e){
      const {target, keyCode} = e;
      if(keyCode === 13 && target.value.trim() !== ''){
        Pubsub.publish('addTodo', {
          id: Date.now(),
          name: target.value,
          done: false
        });
        target.value = ''; // 清空输入框
      }
    }
    return (
      <div className="header-wrap">
        <div className="input-wrap">
          <input onKeyUp={handleEnter} type="text" placeholder='请输入你的任务名称，按回车确认' />
        </div>
      </div>
    )
}
