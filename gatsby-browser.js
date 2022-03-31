import './src/styles/style.styl'

import wrapWithProvider from './src/wrap-with-provider'
export const wrapRootElement = wrapWithProvider

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition
}) => {
  // NOTE: 遷移時に常に先頭から表示
  window.scrollTo(0, 0)

  return false
}
