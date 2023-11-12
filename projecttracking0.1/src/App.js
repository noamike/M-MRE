import './App.css';
import {db} from './firebase';
import {collection, addDoc, setDoc, getDocs, doc, getDoc, query, where} from "firebase/firestore";
import { ChakraProvider, Input, Textarea, Center, Stack, Button } from '@chakra-ui/react'
import {getDatabase, ref, child, get} from 'firebase/database';
//Elements for the table for data display
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer} from '@chakra-ui/react'
import { useState } from 'react';


// Updates the values of the table cells based off of the input data provided
 function submitDetails() {

  var var_contact = document.getElementById("contactNameValue").value;
  var var_notes = document.getElementById("notesValue").value;

  var var_today = new Date();
  var dd = String(var_today.getDate()).padStart(2, '0');
  var mm = String(var_today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = var_today.getFullYear();

  var_today = mm + '/' + dd + '/' + yyyy;

  {/*const docRef = addDoc(collection(db, "var_contact"), {
    var_notes: var_notes,

  });*/}

  // Add a new document in collection "Project 1" with "var_contact" as id
  const docRef = setDoc(doc(db, "Project 1", var_contact), {
    name: var_contact,
    date: var_today,
    notes: var_notes,

  });

  return (
    document.getElementById("contactInput1").innerHTML = var_contact,
    //document.getElementById("notesInput1").innerHTML = var_notes,
    document.getElementById("date").innerHTML = var_today
  )
}


 function App() {
  var var_notes;
  var var_contact;
  var var_today;
  /*allows for easy updating of values, notes = variable,  
  * setNotes is function to update notes variable
  * useState("") is base value of the notes variable 
  */
  const[notes,setNotes] = useState("");

  async function getDetails(){
    //Queries a collection for all documents where a name ID is Lee Michaels
    const q = query(collection(db,"Project 1"), 
                where("name","==","Lee Michaels"));
    //Places the found docs within a variable for easy access
    const getNotes = await getDocs(q);
    //finds the first document with name ID Lee Michaels
    const data = getNotes.docs[0].data();
  
    //sets the variable notes to data.notes
    setNotes(data.notes);

    return;
  };
  
  getDetails();
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
            <Input placeholder='Email' width='auto' id="contactEmailValue"/>
            <Input placeholder='Phone' width='auto' id="contactPhonealue"/>            
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
                  <Td id="notesInput1">{notes}</Td>
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
