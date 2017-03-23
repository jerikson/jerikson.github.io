import React from 'react';
import ReactDOM from 'react-dom';
import Prism from 'prismjs';

// snippets from Prism, lets just keep them like this for now..
const snippOne = `// array holding 3 fancy objects
let items = [
  { id: 1, text: "pine",  type: "tree", ico: "ico-tree", style: "variant-default"},
  { id: 2, text: "jesus", type: "preacher", ico: "ico-transgender-alt", variant: "btn-default"},
  { id: 3, text: "rocket", type: "weapon", ico: "ico-rocket", variant: "btn-default"}
];`;
const snippTwo = `

// return objects as button elements
class ButtonMenu extends React.Component {
  render() {
    return (
      <div>
        // map buttons by obj.id, style using obj props
        {items.map(item =>
          <button className={item.variant} key={item.id}> {item.text}
                <i className={item.ico}></i>
          </button>)}
      </div>
      );
    }
  }`;
const snippThree = `

// assemble features into an 'App' component
class App extends React.Component {
  render() {
    return (
      // we only have the ButtonMenu atm..
      <div>
        <ButtonMenu/>
      </div>
    );
  }
}

// finally render the App
ReactDOM.render(<App />, document.getElementById('root'));`



// list of 3 objects
let items = [
  { id: 1, name: "pine", type: "tree", icon: "fa fa-tree" },
  { id: 2, name: "jesus", type: "preacher", icon: "fa fa-transgender-alt"},
  { id: 3, name: "rocket", type: "weapon", icon: "fa fa-rocket" } ];

// return each obj of 'items' as a button, using obj's icon attr as styling
class ItemsList extends React.Component {
  render() {
    return (
      <div>
        {items.map(item =>
          <button className='btn btn-info' key={item.id}> {item.name}
                <i className={item.icon}></i>
          </button>)}
      </div>
      );
    }
  }

  // example using <code> & <pre>
  class CodeCode extends React.Component {
    render() {
      return (
        <div>
          <pre>
            <code className="language-javascript">
              {snippOne}
              {snippTwo}
              {snippThree}
            </code>
          </pre>
        </div>
      );
    }
  }

  // assemble stuff
  class App extends React.Component {
    render() {
      return (

        <div className="container">
          react: create buttons from list obj
          <ItemsList/>
          <CodeCode/>
        </div>
    );
  }
}

// render App
ReactDOM.render(<App />, document.getElementById('root'));
