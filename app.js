// //...load git hub apis.......
// //communicate b/w local server and github server
// const api = "https://api.github.com/users";
// window
// .fetch(api)
// .then( data => {
//     // console.log(data) //to check connection with server
//     // console.log(data.json()) //convert json formate
//     data
//     .json()
//     .then(users => { //console.log(user);//print array
//     //     var output =[];
//     //   for(let user of users) {
//     //        // console.log(user.login); //print object data of names
//     //      //usif for loop to fetch data
//     //        output +=`
//     //       <div class="container">
//     //       <table class  = "table table-bordered mt-4">
//     //       <tr>
//     //       <th>id</th>
//     //       <th>name</th>
//     //       <th>photo</th>
//     //       <th>repo</th>
//     //       <th>url</th>
//     //       </tr>
//     //       <tr>
//     //       <td>${user.id}</td>
//     //       <td>${user.login}</td>
//     //       <td><img  style = "width:100px;
//     //                          height:100px;
//     //                          border-radius:100%" src ="${user.avatar_url}"/></td>
//     //       <td>${user.repos_url}</td>
//     //       <td>${user.url}</td>
//     //       </tr>
//     //       </table>
//     //       </div>  `;
//     //       document.getElementById('template').innerHTML =output;}
// ////////////////////////////////////////////////
// // using for each loop
//     let userData = users;
//     let output = [];
//     userData.forEach(element => {
//         output +=`
//         <div class="container">
//           <table class  = "table table-bordered mt-4">
//           <tr>
//           <th>id</th>
//           <th>name</th>
//           <th>photo</th>
//           <th>repo</th>
//           <th>url</th>
//           </tr>
//           <tr>
//           <td>${user.id}</td>
//           <td>${user.login}</td>
//           <td><img  style = "width:100px;
//                              height:100px;
//                              border-radius:100%" src ="${user.avatar_url}"/></td>
//           <td>${user.repos_url}</td>
//           <td>${user.url}</td>
//           </tr>
//           </table>
//         </div>  `;
//         document.getElementById('template').innerHTML =output;
//     })
      
// })
//     .catch(err => console.log(err));
// })
// .catch(err => console.log(err));









