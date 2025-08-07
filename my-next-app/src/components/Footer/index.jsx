import './index.css'
export default function Footer() {
    return (
      <div className='footer-wrap'>
        <div className="footer">
          <label>
            <input type="checkbox" />
            <span className="item-name">
              已完成0个/全部10个 
            </span>
          </label>
          <button className="btn btn-clear">清除已完成任务</button>
        </div>
      </div>
    )
}
