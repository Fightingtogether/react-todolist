import Item from '@/components/Item'
import './index.css'
export default function List() {
  const {todos}= this.props
    return (
      <div>
        <ul className='list-wrap'>
          {
            todos.map((todo) => (
              <Item key={todo.id} {...todo} />
            ))
          }
        </ul>
      </div>
    )
}
