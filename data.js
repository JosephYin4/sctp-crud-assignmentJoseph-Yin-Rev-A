const JSON_BIN_BASE_URL="https://api.jsonbin.io/v3";

const JSON_BIN_ID = "66a244daacd3cb34a86b1e3e";


async function loadData() {
  const response = await axios.get(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}/latest`); 
    // if in the same diretory as index.html
    //console.log(response.data)
    return response.data.record;
}   

async function saveData(clientdata){
    const response = await axios.put(`${JSON_BIN_BASE_URL}/b/${JSON_BIN_ID}/`, clientdata);
  console.log(response.data)
  window.alert("Client data saved successfully!");
}

//loadData();



