export const SHOW_COMMENTS = 'SHOW_COMMENTS'
export const CLOSE_COMMENTS = 'CLOSE_COMMENTS'
const apiUrl = 'https://b.hatena.ne.jp/entry/jsonlite/?url='

export const showComments = (item) => (
  {
    type: SHOW_COMMENTS,
    payload: {
      item: item,
    }
  }
)

export const closeComments = () => (
  {
    type: CLOSE_COMMENTS
  }
)

export const getCommentsFromApi = (url) => (
  (dispatch) => {          
    return fetch(apiUrl + url)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(showComments(responseJson))
      })
  }
)
