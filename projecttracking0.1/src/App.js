import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Input, Textarea, Center, Stack, Button } from '@chakra-ui/react'

//Elements for the table for data display
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer} from '@chakra-ui/react'

// Updates the values of the table cells based off of the input data provided
function submitDetails() {
  var var_contact = document.getElementById("contactNameValue").value;
  var var_notes = document.getElementById("notesValue").value;

  var var_today = new Date();
  var dd = String(var_today.getDate()).padStart(2, '0');
  var mm = String(var_today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = var_today.getFullYear();

  var_today = mm + '/' + dd + '/' + yyyy;

  return (
    document.getElementById("contactInput1").innerHTML = var_contact,
    document.getElementById("notesInput1").innerHTML = var_notes,
    document.getElementById("date").innerHTML = var_today
  )
}

function App() {
  var var_contact;
  var var_notes;
  var var_today;
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
            <Input placeholder='Contact' width='auto' id="contactNameValue"/>
            <Textarea placeholder='Notes' width='auto' id="notesValue"/>
            <Button onClick={() => submitDetails()}>Submit</Button>
          </Stack>
          </Center>
          <TableContainer>
            <Table variant='striped' colorScheme='gray'>
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Contact</Th>
                  <Th>Notes</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td id="date">{var_today}</Td>
                  <Td id="contactInput1">{var_contact}</Td>
                  <Td id="notesInput1">{var_notes}</Td>
                </Tr>
                <Tr>
                  <Td></Td>
                  <Td></Td>
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
