declare global {
  interface Window { dataLayer: any }
}

declare module 'src/*'
declare module '*.styl'
declare module '*.module.styl' {
  const content: Record<string, string>
  export default content
}
