import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Input, Center, Stack, Button } from '@chakra-ui/react'
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer} from '@chakra-ui/react'

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
        <Center>
          <Stack spacing={3}>
            <Input placeholder='Contact' width='auto'/>
            <Input placeholder='Notes' width='auto'/>
            <Button>Submit</Button>
          </Stack>
          </Center>
          <TableContainer>
            <Table variant='striped' colorScheme='gray'>
              <Thead>
                <Tr>
                  <Th>Contact</Th>
                  <Th>Notes</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Contact</Td>
                  <Td>Notes</Td>
                </Tr>
                <Tr>
                  <Td>Contact</Td>
                  <Td>Notes</Td>
                </Tr>
                <Tr>
                  <Td>Contact</Td>
                  <Td>Notes</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

        </body>
      </div>
    </ChakraProvider>
  );
}

export default App;
