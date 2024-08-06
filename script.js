let clientdata = [];


document.addEventListener("DOMContentLoaded", async function() {
  // the clientdata here refer to the global clientdata array

  clientdata = await loadData();
  console.log(clientdata);
  
  
  showAllClient();
  
  });


function showAllClient(){
 // clear browser page.
  //document.table.innerHTML="";

  //create Table
  // var table = document.createElement('table');
  var table1 = document.querySelector("table");
  table1.innerHTML="";

  //create Table Header
  var header = ['ID', 'FullName', 'ContactNumber'];
  var tr = document.createElement('tr');
  for (var column in header) {
    var th = document.createElement('th');
    th.innerHTML = header[column];
    tr.appendChild(th)
  }
  table1.appendChild(tr);


  for (var row in clientdata) {
    var tr = document.createElement('tr');

    for (var column in clientdata[row]) {

      var td = document.createElement('td');
      td.innerHTML = clientdata[row][column];

      console.log(td.innerHTML);

      tr.appendChild(td);
    }
      //td.innerHTML += `<button class="edit" data-  
     // bookid="${b.id}">Edit</button>
    //  <button class="delete" data-bookid="${b.id}">Delete</button>`;
   // td.innerHTML += `<button class="delete" onclick="removeNthRow(${row})">Delete</button>`;
    console.log(row);
    
    tr.appendChild(td);
    table1.appendChild(tr);
    }

// append Table
document.body.appendChild(table1);
}


// {
//    id: 1,
//    fullname: "Joseph Yin",
//     contactnumber: 44444444
//  }
//];

// interaction part
let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", function() {
  //let id = document.querySelector("#id").value;
  let fullname = document.querySelector("#fullname").value;
  let contactnumber = document.querySelector("#contactnumber").value;
  addClientData(clientdata, fullname, contactnumber);
  //saveData(clientdata);
  //sleep(2000);
  console.log(clientdata);
  
  //showAllClient();
})



//function showAllClient() {
//if (clientdata.length === 0) {
//  console.log("There are no Clients to display.");
// return;
// }
// console.log("===== Clients Database =====");
// for (let client of clientdata) {
//   console.log(`ID: ${client.id}, FullName: ${client.fullname}, //ContactNumber: ${client.contactnumber}`);
// }

//function showAllClient() {
  // render the list
 // let clientdataList = document.querySelector("#clientdata");
//  let outputString = "";
//  for (let c of clientdata) {
    // sample output:
    // `<li>The Lord of the Rings (JRR Tolkien)</li>`
 //   outputString += `<li>ID: ${c.id} Fullname: ${c.fullname} ContactNumber: (${c.contactnumber}) 
 //   <button class="edit" data-bookid="${c.id}">Edit</button>
 //   <button class="delete" data-bookid="${c.id}">Delete</button>
 // </li>`;
  //}
  //prompt(clientdata);
 // console.log(outputString);
 // clientdataList.innerHTML = outputString;

  // EDIT BUTTONS
  let allEditButtons = document.querySelectorAll(".edit");
  for (let button of allEditButtons) {
    button.addEventListener("click", function(event) {
      // the first parameter for a function handling an event is the event info
      let clickedButton = event.target;
      let id = Number(clickedButton.dataset.bookid);
      let newClientFullName = prompt("Enter the new Fullname");
      let newContactNumber = prompt("Enter the new 8 Digit Contact Number");
      modifyClient(clientdata, id, newClientFullName, newContactNumber);
      //renderList();
      showAllClient();
    });
  }

  // DELETE BUTTONS
  let allDeleteButtons = document.querySelectorAll(".delete");
  for (let button of allDeleteButtons) {
    button.addEventListener("click", function(event) {
      // get the book id
      let id = Number(event.target.dataset.bookid);
      console.log(id);
      deleteClient(clientdata, id);
      //renderList();
      showAllClient();
    })
  }

//function deleteRow(r) {
//  var i = r.parentNode.parentNode.rowIndex;
//  document.getElementById("table").deleteRow(i);
//}

 function removeLastRow() {
   var table1 = document.querySelector("table");
   //document.getElementsByTagName("table1");
   table1.rows[table1.rows.length-1].remove();
   //table1.removeChild(table1.lastElementChild);
   console.log(table1);
   //showAllClient();  
 }

// for the add function, you should include extra parameters for each key you want to
// to store in the record. See the walkthrough.
function addNewClient() {
  let fullname = prompt("Enter the fullname of Client: ");
  let contactnumber = parseInt(prompt("Enter the Contact Number of Client (8 Digits): "));

  //Check for 8 digits number entered
  let numdigit = contactnumber.toString().split('').length
  console.log(numdigit + " digits entered");
  if (numdigit < 8 | numdigit > 8) {
    contactnumber = parseInt(prompt("Enter the Contact Number of Client Again!!! (8 Digits): "));
  }
  //console.log(contactnumber.length);
  addClientData(clientdata, fullname, contactnumber);
  //showAllClient();
}

// for the add function, you should include extra parameters for each key you want to
// to update  in the record. See the walkthrough.
function modifyExistingClient() {
  let id = parseInt(prompt("Enter the client ID to modify: "));
  let newClientFullName = prompt("Enter the new fullname for the Client: ");
  let newContactNumber = parseInt(prompt("Enter the new Client ContactNumber (8 digits): "));
  modifyClient(clientdata, id, newClientFullName, newContactNumber);
  console.log("Client Data modified successfully!");
}

function deleteClientInterface() {
  let id = parseInt(prompt("Enter the Client ID to delete: "));
  deleteClient(clientdata, id);
  console.log("Client removed successfully!");
}

function addClientData(clientdata, fullname, contactnumber) {
  let newClient = {
    id: Math.floor(Math.random() * 1000 + 1),
    fullname: fullname,
    contactnumber: contactnumber
  };

  clientdata.push(newClient);
  window.alert("Client data added successfully!");
  showAllClient();
}

function modifyClient(clientdata, id, newClientFullName, newClientContactNumber) {
  let client = null;
  for (let c of clientdata) {
    if (c.id == id) {
      client = c;
    }
  }
  if (client) {
    client.fullname = newClientFullName;
    client.contactnumber = newClientContactNumber
  } else {
    console.log("Client is not found");
  }
  showAllClient();
}

function deleteClient(clientdata, id) {
  let indexToDelete = null;
  //let length = todos.length;
  //console.log(todos.length);
  for (let i = 0; i < clientdata.length; i++) {
    if (clientdata[i].id == id) {
      indexToDelete = i;
      break;
    }
  }
  if (indexToDelete !== null) {
    clientdata.splice(indexToDelete, 1);
  } else {
    console.log("Client is not found");
  }
  showAllClient();
}

// Save Button
let saveBtn = document.querySelector("#saveBtn");
saveBtn.addEventListener("click", function() {
  saveData(clientdata);
  //showAllClient();
})
// TEST FUNCTIONS HERE

// write code here to test your `add` function


// write code here to test your `update` function


// write code here to test your `delete` function