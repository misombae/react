import React, { Component } from 'react';
import './App.css';
import TOC from './component/TOC';
import Content  from './component/Content';
import Subject  from './component/Subject';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Subject title="WEB" sub="world wide web"></Subject>
          <Subject title="React" sub="For UI"></Subject>
          <TOC></TOC>
          <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Misom  !!  Learn React 
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
