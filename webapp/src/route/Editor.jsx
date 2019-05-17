import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

class Editor extends HTMLElement {
  constructor(){
    super()
  }
  connectedCallback(){
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    console.log("this is the Editor componet value",this.getAttribute("text"));
    ReactDOM.render(<div>
         {/* s<h1>React markdown code</h1> */}
              <ReactMarkdown source={this.getAttribute("text")}></ReactMarkdown>
    </div>,mountPoint)
  }

  disconnectedCallback(){
    ReactDOM.unmountComponentAtNode(this);
  }

}
customElements.define('text-editor',Editor);