import React, { Component, Fragment } from 'react'
import './index.css'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render () {
    return (
      <Fragment>
        <div>
          <label htmlFor='insertArea'>输入内容</label>
          <input className='input' id='insertArea' value={this.state.inputValue}
                 onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li key={'key' + index}
                         dangerouslySetInnerHTML={{ __html: item }}
                         onClick={this.handleDelete.bind(this, index)}/>
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleSubmit () {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleDelete (index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList
