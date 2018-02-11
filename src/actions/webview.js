export const SHOW_PAGE = 'SHOW_PAGE'
export const HIDE_PAGE = 'HIDE_PAGE'
export const SHOW_SPINNER = 'SHOW_SPINNER'
export const HIDE_SPINNER = 'HIDE_SPINNER'

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

export const showSpinner = () => (
  {
    type: SHOW_SPINNER
  }
)

export const hideSpinner = () => (
  {
    type: HIDE_SPINNER
  }
)
