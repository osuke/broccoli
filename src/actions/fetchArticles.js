export const FETCH_ARTICLES = 'FETCH_ARTICLES'
export const FETCH_FAV_ARTICLES = 'FETCH_FAV_ARTICLES'
export const CLEAR_ARTICLES = 'CLEAR_ARTICLES'

export const fetchArticles = (item, index) => (
  {
    type: FETCH_ARTICLES,
    payload: {
      item: item,
      index: index
    }
  }
)

export const clearArticles = (index) => (
  {
    type: CLEAR_ARTICLES,
    payload: {
      index: index
    }
  }
)

export const fetchFavArticles = (item, index, offset) => (
  {
    type: FETCH_FAV_ARTICLES,
    payload: {
      item: item,
      index: index,
      offset: offset
    }
  }
)

export const getArticlesFromApi = (url, index) => (
  (dispatch) => (
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(fetchArticles(responseJson, index))
      })
      .catch(() => {
        alert('error')
      })
  )
)

export const getFavArticlesFromApi = (url, index, userName, offset) => (
  (dispatch) => {
    const favUrl = url + 'http%3a%2f%2fb%2ehatena%2ene%2ejp%2f' + userName + '%2ffavorite%2erss?of=' + offset + '%27&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
    return fetch(favUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(fetchFavArticles(responseJson, index, offset))
      })
  }
)
