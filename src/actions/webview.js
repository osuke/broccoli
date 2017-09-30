export const SHOW_PAGE = 'SHOW_PAGE'
export const HIDE_PAGE = 'HIDE_PAGE'

export const showPage = (obj) => (
  {
    type: SHOW_PAGE,
    payload: {
      url: obj.link,
      title: obj.title
    }
  }
)

export const hidePage = () => (
  {
    type: HIDE_PAGE
  }
)
