import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

//component는 하나의 최상위 태그로 시작해야한다.
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
          world wide web
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );  
  }
}

class Content extends Component {
    render() {
      return (
        <article>
          <h2>HTML</h2>
          HTML is HyperText Markup Language.
        </article>
      );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Subject></Subject>
          <TOC></TOC>
          <Content></Content>
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
