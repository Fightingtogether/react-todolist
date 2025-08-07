import './index.css'
export default function Item() {
  const { id, name } = this.props;
    return (
      <div className="item-wrap">
        <li>
          <label>
            <input type="checkbox" />
            <span className="item-name">{name}</span>
          </label>
          <button className="btn">删除</button>
        </li>
      </div>
    )
}
