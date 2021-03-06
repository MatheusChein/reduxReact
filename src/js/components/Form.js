import { Component } from "react";
import { connect } from 'react-redux'
import { addArticle } from '../actions/index'

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addArticle(article))
  }
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { title } = this.state
    this.props.addArticle({ title: title });
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    )
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm)

export default Form