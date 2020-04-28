import React, {useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time


const startingText = 
`# _My Markdown Previewer_

A quick tutorial: 

# Header 1
## Header 2

_make a phrase italic_  **make a phrase bold** **_bold and italic_**

[Links!](https://www.cold-pac.github.io)

![Images](https://cold-pac.github.io/files/favicon-16x16.png)

> Blockquotes  
> place a caret character on each line of the blockquote

\`inline code\` 
\`\`\`
code 
block
\`\`\`

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
  const [draggable, setDraggable] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const mainMouseOver = () => {
    setDraggable(true);
  }

  const mainMouseOut = () => {
    setDraggable(false);
  }

  return (
   <div id = "master">
      <Draggable disabled = {draggable}>
        <div id = "editorContainer" className = "container">
          <div className = "headBar"><span>Editor</span><span><FontAwesomeIcon icon={faArrowsAlt}/></span></div>
          <textarea value = {input} onChange = {handleChange} onMouseOver = {mainMouseOver} onMouseOut = {mainMouseOut} id = "editor"></textarea>
        </div>
      </Draggable>
      <Draggable disabled = {draggable}>
        <div id = "previewContainer" className = "container">
          <div className = "headBar"><span>Previewer</span><span><FontAwesomeIcon icon={faArrowsAlt}/></span></div>
          <div id = "preview" onMouseOver = {mainMouseOver} onMouseOut = {mainMouseOut}>
            <ReactMarkdown source = {input} /> 
          </div>
        </div>
      </Draggable>
   </div>
   );
}

export default App;
