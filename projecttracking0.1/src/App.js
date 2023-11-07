import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Input, Textarea, Center, Stack, Button } from '@chakra-ui/react'
//Importing Firebase (Database) SDK (Software Development Kits)
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase, ref, set } from "firebase/database";

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
  writeData(var_contact, var_notes, var_today);
  return (
    document.getElementById("contactInput1").innerHTML = var_contact,
    document.getElementById("notesInput1").innerHTML = var_notes,
    document.getElementById("date").innerHTML = var_today
  )
}

function writeData(contactName, notesValue, dateValue) {
  const db = getDatabase();
  set(ref(db, '/projects' + contactName, notesValue, dateValue), {
    contact: contactName,
    notes: notesValue,
    date: dateValue
  });
}

function App() {
  var var_contact;
  var var_notes;
  var var_today;

  // Configuring Firebase API
  const firebaseConfig = {
    apiKey: "AIzaSyCflRjx8kucKdNqurIn6tQSPX1Tv0dTjOM",
    authDomain: "mmre-a8466.firebaseapp.com",
    projectId: "mmre-a8466",
    storageBucket: "mmre-a8466.appspot.com",
    messagingSenderId: "1021596921495",
    appId: "1:1021596921495:web:77069ccb981b6d6aee03d2",
    measurementId: "G-1V9E3C7J55"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);

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
            <Button onClick={() => writeData()}>Submit</Button>
          </Stack>
          </Center>
          <TableContainer>
            <Table variant='striped' colorScheme='gray'>
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Contact</Th>
                  <Th>Notes</Th>
                  <Th>Test Column</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td id="date">{var_today}</Td>
                  <Td id="contactInput1">{var_contact}</Td>
                  <Td id="notesInput1">{var_notes}</Td>
                  <Td>test2</Td>
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
