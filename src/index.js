import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Title extends React.Component 
{
  render()
  {
    return (
      <div className="main-title">
        <h1> Sudhanshu Agrawal </h1>
      </div>
    );

  }
}

ReactDOM.render(
    <Title />,
    document.getElementById('root')
  );