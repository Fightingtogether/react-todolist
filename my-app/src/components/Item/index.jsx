import React from 'react'
import './index.css'
export default function Item(props) {
  const { id,name,done,delTodos,updateTodos } = props;
  const [mouse,setMouse] = React.useState(false);
  function handleChangeCheck(e){
    updateTodos(id,e.target.checked)
  }
  function hanldeMouse(flag){
    return ()=>{
      setMouse(flag);
    }
  }
    return (
      <div className="item-wrap">
        <li onMouseEnter={hanldeMouse(true)} onMouseLeave={hanldeMouse(false)} style={{backgroundColor: mouse ? '#ddd' : '#fff'}}>
          <label>
            <input type="checkbox" checked={done} onChange={handleChangeCheck} />
            <span className="item-name">{name}</span>
          </label>
          <button className="btn" onClick={()=>delTodos(id)} style={{display:mouse?'block':'none'}}>删除</button>
        </li>
      </div>
    )
}
