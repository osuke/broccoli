import { Action } from 'redux'
export const SHOW_PAGE = 'SHOW_PAGE'
export const HIDE_PAGE = 'HIDE_PAGE'
export const SHOW_SPINNER = 'SHOW_SPINNER'
export const HIDE_SPINNER = 'HIDE_SPINNER'

export interface IShowPage extends Action {
  payload: {
    url: string
    title: string
  }
}

export const showPage = (url: string, title: string): IShowPage => (
  {
    type: SHOW_PAGE,
    payload: {
      url,
      title,
    }
  }
)

export const hidePage = (): Action => (
  {
    type: HIDE_PAGE
  }
)

export const showSpinner = (): Action => (
  {
    type: SHOW_SPINNER
  }
)

export const hideSpinner = () => (
  {
    type: HIDE_SPINNER
  }
)
