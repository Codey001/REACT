import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <h2>This is another line</h2>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'http://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit Google</a>
)

const anotheruser = 'chai aur code'

const reactElement = React.createElement(
  'a',
  { href: 'http://google.com', target: '_blank' },
  'Click me to Visit Google',
  anotheruser
)

// if do not write if else in object, that is why we write evaluated expression inside {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
  // MyApp()
  // anotherElement
  // reactElement

)
