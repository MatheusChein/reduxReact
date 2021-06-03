import { ADD_ARTICLE } from '../constants/action-types'
import { DATA_LOADED } from '../constants/action-types'

const initialState = {
  articles: [],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: state.articles.concat(action.payload)
      }
    case DATA_LOADED:
      return {
        ...state,
        remoteArticles: state.remoteArticles.concat(action.payload)
      }
    default:
      return state
  }
  
 
}

export default rootReducer;