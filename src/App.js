import React, { Component } from 'react';
import './App.css';
import TOC from './component/TOC';
import Content  from './component/Content';
import Subject  from './component/Subject';


class App extends Component {
  constructor(props) { //componet실행전 props초기화
    super(props);
    this.state = { //state 초기화 외부에 필요없는 정보는 state에 은닉한다.
      mode:'read',
      welcome:{title: 'Welcome', desc: 'Hello, React'},
      subject:{title: 'WEB', sub: 'World Wid Web'},
      contents:[
        {id:1, title: 'HTML', desc: 'HTML is HyperText Markup Language.'},
        {id:2, title: 'CSS', des: 'CSS is for design'},
        {id:3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
      ]
    }
  }

  render() {
    //props, state값이 변경되면 render() 다시 호출된다.
    var _title, _desc= null
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === "read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
          {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}
          
          <header>
          <h1><a href="/" onClick={function(e){
            e.preventDefault(); //이벤트의 기본 동작을 막음(page reload 방지)
            this.setState({
              mode: 'welcome'
            })
            /*
            this.state.mode = "welcome"; 코드는 에러 발생
            1. 이벤트가 호출됐을때 실행되는 함수 안에서는 this의 값이 컴포넌트가 아니라 아무 값도 가지고 있지 않다.
            -> bind사용
            2. react의 setState 함수 사용
            */
           
          }.bind(this)}>{this.state.subject.title} </a></h1>
            {this.state.subject.sub}
          </header>
         
          <TOC data = {this.state.contents}></TOC>
          <Content title={_title} desc={_desc}></Content>
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
