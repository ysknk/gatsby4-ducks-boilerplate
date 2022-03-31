// refs: https://qiita.com/nerikosans/items/fe722727da3a0008d082
//
// const media = useMedia()
// const isSP = media.sp.matches
//
// media.sp.addListener((e) => { ... })
export const useMedia = () => {
  const queryStrings = {
    pc: 'screen and (min-width: 751px)',
    sp: 'screen and (max-width: 750px)'
  }

  return Object.fromEntries(
    Object.entries(queryStrings).map(([k, v]: [string, string]) => [
      k,
      typeof window !== 'undefined' && window.matchMedia(v)
    ])
  )
}
