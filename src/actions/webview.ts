import { createAction } from 'typesafe-actions'
import {
  WEBVIEW_SHOW_PAGE,
  WEBVIEW_HIDE_PAGE,
  WEBVIEW_SHOW_SPINNER,
  WEBVIEW_HIDE_SPINNER
} from '../constants/actionTypes'

export const showPage = createAction(
  WEBVIEW_SHOW_PAGE,
  resolve => (url: string, title: string) => resolve({ url, title })
)

export const hidePage = createAction(
  WEBVIEW_HIDE_PAGE
)

export const showSpinner = createAction(
  WEBVIEW_SHOW_SPINNER
)

export const hideSpinner = createAction(
  WEBVIEW_HIDE_SPINNER
)

export const actions = { showPage, hidePage, showSpinner, hideSpinner }
