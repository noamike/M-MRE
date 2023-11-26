import './App.css';
import {db} from './firebase';
import {collection, addDoc, setDoc, getDocs, doc, getDoc, query, where} from "firebase/firestore";
import { ChakraProvider, Input, Textarea, Center, Stack, Button, Select} from '@chakra-ui/react'
//import {Select} from 'chakra-react-select';
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

//Adds a document to the collection Projects
function createProject(){
  var new_project = document.getElementById("newProject").value;
  var clear = "";
  const docRef = setDoc(doc(db,"Projects",new_project),{
    name: new_project, 
  });
  document.getElementById('newProject').value = '';
  

}

function placeOptions(select_options){
  
  //creates a variable to be able to add the options to the dropdown
  let select = document.getElementById('projPicker');
  let default_opt = document.createElement("option");

  default_opt.textContent="Select a Project";
  default_opt.value="Select";

  select.innerHTML="";
  select.appendChild(default_opt);
  //iterates through the project Array
  for(var i=0;i<select_options.length;i++){
    //sets a variable for the option name we want
    let optn = select_options[i];
    //creates an "Element" variable to add in the project 
    let el = document.createElement("option");
    //Sets text and value of the element to the data
    el.textContent = optn;
    el.value = optn;
    //adds the element to the select dropdownß
    select.appendChild(el);
  }
  console.log(select.children);
};


 function App() {
  var var_notes;
  var var_contact;
  var var_today;
  var new_doc;
  var select_options;


  const collections = query()
  /*allows for easy updating of value, notes = variable,  
  * setNotes is function to update notes variable
  * useState("") is base value of the notes variable 
  */
  const[notes,setNotes] = useState("");
  const[proj,setProj] = useState("");
  var select_options = [];

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

  
 async function getProjects(select_options){
    //Queries the Projects Collection to get a snapshot of all Projects
    const projectRef = query(collection(db,"Projects"));
    //Places all documents within an easy accessible array 
    const allProj = await getDocs(projectRef);

    for(var i=0;i<allProj.size;i++){
      console.log(allProj.docs[i].id)
      select_options[i] = allProj.docs[i].id;
      console.log(select_options);
      
      {/* 
      const updateProj = [
        ...proj,
      {
        id: allProj.docs[i].id,
        name: allProj.docs[i].id,
      }];
      setProj(updateProj);
      console.log("The project array is as follows: ", proj);
      */}
      placeOptions(select_options);
    }


    return;

  };  
  

  getDetails();
  getProjects(select_options);

  return (
    <ChakraProvider>
      <div className="App">
        <header>
          Updates for Project 1
        </header>
        <body>
        {/* Creating new Documents within the project collection */}
        <Center>
          <Stack spacing={3}>
            <Input placeholder='Create Project' width='auto' id='newProject'/>
            <Button onClick={() => createProject()}>Create Project</Button>
          </Stack>
        </Center>
        {/* Selecting which Project */}
        <Center>
          <Stack spacing={3}>
            {/* Creates the Project dropdown that, when clicked, populates the projects  */}
            <Select selected="Select a Project" id='projPicker'>
            </Select>
          </Stack>
        </Center>

        {/* Showing updates for Project you want to update*/}
        {/*Calls the getDetails function farther down in the project, after it is selected */}
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
