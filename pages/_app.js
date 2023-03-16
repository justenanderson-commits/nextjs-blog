//Link to progress//
// https://nextjs.org/learn/basics/assets-metadata-css/global-styles //

// Pick up on the section : Adding Global CSS //

// The only place to import global CSS files is in pages/_app.js. They cannot be imported anywhere else (this is the only location that affects all elements on the page).

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}