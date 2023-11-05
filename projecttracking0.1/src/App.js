import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Input, Stack, Button } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
        <header>
          Updates for Project 1
        </header>
        <body>
          <Stack spacing={3}>
            <Input placeholder='Contact' width='auto'/>
            <Input placeholder='Notes' width='auto'/>
            <Button>Submit</Button>
          </Stack>
        </body>
      </div>
    </ChakraProvider>
  );
}

export default App;
