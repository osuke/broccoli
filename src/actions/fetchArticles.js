export const FETCH_ARTICLES = 'FETCH_ARTICLES'

export const fetchArticles = (item, index) => (
  {
    type: FETCH_ARTICLES,
    payload: {
      item: item,
      index: index
    }
  }
)

export const getArticlesFromApi = (url, index) => (
  (dispatch) => {          
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(fetchArticles(responseJson, index))
      })
  }
)
