export const SHOW_PAGE = 'SHOW_PAGE'

export const showPage = (url) => (
  {
    type: SHOW_PAGE,
    payload: {
      url: url
    }
  }
)
