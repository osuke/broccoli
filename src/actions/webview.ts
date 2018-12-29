import { createAction } from 'typesafe-actions'
export const SHOW_PAGE = 'SHOW_PAGE'
export const HIDE_PAGE = 'HIDE_PAGE'
export const SHOW_SPINNER = 'SHOW_SPINNER'
export const HIDE_SPINNER = 'HIDE_SPINNER'

export const showPage = createAction(
  SHOW_PAGE, 
  resolve => (url: string, title: string) => resolve({ url, title, }),
)

export const hidePage = createAction(
  HIDE_PAGE, 
)

export const showSpinner = createAction(
  SHOW_SPINNER, 
)

export const hideSpinner = createAction(
  HIDE_SPINNER, 
)

export const actions = { showPage, hidePage, showSpinner, hideSpinner, }
