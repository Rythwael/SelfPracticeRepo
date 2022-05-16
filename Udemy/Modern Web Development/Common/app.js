//Promise Yapısı ve Chain

/* function getData(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(typeof data==="string"){
                resolve(data)
            }else{
                reject(new Error("Lütfen String bir değer girin."))
            }

        },5000);
    })
}
// getData(5)
// .then(response => console.log("Değer" + response))
// .catch(err => console.error(err));

function addTwo(number){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            if(typeof number === "number"){
                resolve(number+2)
            }else{
                reject(new Error("Lütfen bir sayı girin!"))
            }
        },3000)
    })
}

addTwo("Ayı")
.then(response => {
    console.log(response);
    return response + 2
}).then(response2 => {
    console.log(response2);
}).catch(err => console.error(err)) */

// Local dosyalardan veri alma

/* function getTextFile(){
    fetch("example.txt")
    .then(response=> response.text())
    .then(data=>console.log(data))
    .catch(err=>console.error(err))
}

function getJsonFile(){
    fetch("example.json")
    .then(response=> response.json())
    .then(data=>console.log(data))
    .catch(err=>console.error(err))
}

getJsonFile();
 getTextFile(); */

// Api'dan veri alma

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));*/

class Request {

  async get(url) {
    const response = await fetch(url); // Response Object
    const responseData = await response.json(); // JSON Object
    return responseData;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseData = await response.json();
    return responseData;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const responseData = await response.json();
    return responseData;
  }

  async delete(url) {
    const response = fetch(url, {
      method: "DELETE",
    });
    return "Veri silme işlemi başarılı!";
  }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums").then(albums=>{
    console.log(albums);
}).catch(err=>console.error(err))


/*request.post("https://jsonplaceholder.typicode.com/albums",{
    userId:15,
    title:"Ashes Remain"
}).then(newAlbum=>console.log(newAlbum)).catch(err=>console.error(err))*/

/*request.put("https://jsonplaceholder.typicode.com/albums/1",{
    userId:15,
    title:"Ashes Remain"
}).then(newAlbum=>console.log(newAlbum)).catch(err=>console.error(err))*/

/*request.delete("https://jsonplaceholder.typicode.com/albums/1")
  .then((message) => console.log(message))
  .catch((err) => console.error(err));*/
