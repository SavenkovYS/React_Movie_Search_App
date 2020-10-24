// import React from 'react'
// import ReactDOM from 'react-dom'

// class Main extends Component {
//     render() {
//       return (
//         <h1>Hello world!</h1>
//       );
//     }
// }
  
// ReactDOM.render(<Main />, document.getElementById('root'))

class Main extends React.Component {
  constructor() {
      super()      
  }
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
      </div>
  )
  } 
}

ReactDOM.render(<Main />, document.getElementById('root'))