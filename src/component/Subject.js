import React, { Component } from 'react';

//component는 하나의 최상위 태그로 시작해야한다.
class Subject extends Component {
    render() {
      return (
        <header>
          <h1><a href="/">{this.props.title}</a></h1>
            {this.props.sub}
        </header>
      );
    }
  }

export default Subject; 