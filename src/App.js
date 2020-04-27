import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';


const startingText = 
`# _My Markdown Previewer_

A quick tutorial: 

# Header 1
## Header 2
### Header 3

_make a phrase italic_  
**make a phrase bold**  
**_bold and italic_**

[Links!](www.cold-pac.github.io)

![Images](https://cold-pac.github.io/files/favicon-16x16.png)

> Blockquotes
> place a caret character on each line of the blockquote

* unordered
  * two spaces for indent
* list

1. ordered
2. list

Markdown requires two spaces for a hard break  
use 2 spaces after each newline to get soft breaks
`;

function App() {
  const [input, setInput] = useState(startingText);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  return (
   <div id = "master">
      <div id = "editorContainer" className = "container">
        <div className = "headBar"><span>Editor</span> <span><FontAwesomeIcon icon={faArrowsAlt}/></span></div>
        <textarea value = {input} onChange = {handleChange} id = "editor"></textarea>
      </div>
      <div id = "previewContainer" className = "container">
        <div className = "headBar"><span>Previewer</span><span><FontAwesomeIcon icon={faArrowsAlt}/></span></div>
        <div id = "preview">
          <ReactMarkdown source = {input} /> 
        </div>
      </div>
   </div>
   );
}

export default App;
