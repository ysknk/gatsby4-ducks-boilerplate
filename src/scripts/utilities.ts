// import { gsap } from 'gsap'
// import { ScrollToPlugin } from 'gsap/all'
// gsap.registerPlugin(ScrollToPlugin)

/*---
 * values
 */
// export const count:number = 0

/*---
 * functions
 */
export const timeout = (ms:number): Promise<void> => {
  return new Promise<void>(resolve => setTimeout(resolve, ms))
}

export const getOffset = (elem) => {
  const pos = {
    x: 0,
    y: 0
  }

  while (elem) {
    pos.y += elem.offsetTop || 0
    pos.x += elem.offsetLeft || 0
    elem = elem.offsetParent
  }
  return pos
}

export const getCookie = (name) => {
  // eslint-disable-next-line
  const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

export const setCookie = (name, value, options: {
  path?: string
  expires?: any
} = {}) => {
  options = {
    path: '/',
    ...options
  }

  if (options?.expires) {
    options.expires = new Date(options?.expires).toUTCString()
  }

  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  for (const optionKey in options) {
    updatedCookie += '; ' + optionKey
    const optionValue = options[optionKey]
    if (optionValue !== true) {
      updatedCookie += '=' + optionValue
    }
  }
  document.cookie = updatedCookie
}

