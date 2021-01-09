import React, { Component } from 'react';
import './App.css';
import TOC from './component/TOC';
import Content  from './component/Content';
import Subject  from './component/Subject';


class App extends Component {
  constructor(props) { //componet실행전 props초기화
    super(props);
    this.state = { //state 초기화 외부에 필요없는 정보는 state에 은닉한다.
      subject:{title:'WEB', sub:'World Wid Web'}
    }
  }

  render() {
    return (
      <div className="App">
          <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
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
