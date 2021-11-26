// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
  
//   const configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(object) {
//       console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });

function submitData (name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name, email: email
    })
  })
  .then(response => response.json())
  .then(json => document.body.innerHTML = json.id)
  .catch(error => document.body.innerHTML = error.message)
}