import { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

class ConnectedPost extends Component {
  
  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <ul>
        {this.props.remoteArticles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    )
  }

}

function mapStateToProps(state) {
  return {
    remoteArticles: state.remoteArticles.slice(0, 10)
  }
}

const Post = connect(
  mapStateToProps,
  { getData }
)(ConnectedPost);

export default Post