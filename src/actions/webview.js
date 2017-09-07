export const SHOW_PAGE = 'SHOW_PAGE'
export const HIDE_PAGE = 'HIDE_PAGE'

export const showPage = (url) => (
  {
    type: SHOW_PAGE,
    payload: {
      url: url
    }
  }
)

export const hidePage = () => (
  {
    type: HIDE_PAGE
  }
)
