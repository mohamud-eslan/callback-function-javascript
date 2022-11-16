// // let pro = new Promise((resolve, reject) =>{
// //     let a = 1 + 3;
// //     if(a == 2){
// //         resolve('success')
// //     }else{
// //         reject('failed')
// //     }
// // });
// // pro.then((message) =>{
// //     console.log('this is then ' + message)
// // }).catch((message) => {
// //     console.log('this is the catch ' + message)
// // });
// // const userOne = false;
// // const userTwo = true;
// // function tutorialCallback(callback, errorCallback){
// //     if(userOne){
// //         errorCallback({
// //             name: 'user one',
// //             message: 'tis is wrong buddy'
// //         })
// //     }
// //         else if(userTwo){
// //             errorCallback({
// //                 name: 'user two',
// //                 message: 'this is user two'
// //             })
// //         }
// //         else{
// //             callback(
// //                 'everything is working correctly')
// //         }
// //     }
// //    tutorialCallback((message) =>{
// //     console.log('success ' + message)
// //    }, (error) => {
// //     console.log(error.name + ' ' + error.message)
// //    })

// //    function tutorialPromise(){
// //         return new Promise((resolve, reject) => {
// //             if(userOne){
// //                 reject({
// //                     name: 'user one',
// //                     message: 'tis is wrong buddy'
// //                 })
// //             }
// //                 else if(userTwo){
// //                     reject({
// //                         name: 'user two',
// //                         message: 'this is user two'
// //                     })
// //                 }
// //                 else{
// //                     resolve(
// //                         'everything is working correctly')
// //                 }
// //         })
    
// //     }
// //     tutorialPromise().then((message) =>{
// //         console.log('success ' + message)
// //        }) .catch((error) => {
// //         console.log(error.name + ' ' + error.message)
// //        });

//        const doNewChallenge = new Promise((resolve, reject) => {
//         resolve('challenge one completed');
//        });
       
//        const doChallengeTwo = new Promise((resolve, reject) => {
//         resolve('challenge two completed');
//        });

//        const doChallengeThree = new Promise((resolve, reject) => {
//         resolve('challenge three completed');
//        });
//        Promise.race([
//         doNewChallenge,
//         doChallengeTwo,
//         doChallengeThree
//        ]).then((message) => {
//         console.log(message);
//        })

function makeRequest(location){
       return new Promise((resolve, reject) => {
              
              console.log(`making a new request to ${location}`);
              if(location === 'google'){
                     resolve('google says hello')
              }
              else{
                     reject('we can only talk to google')
              }
       })
}
function processRequest(response){
       return new Promise((resolve, reject) =>{
              console.log('processing request')
              resolve(`extra information ${response}`)
       })
}
makeRequest('facebook').then(response =>{
       console.log('response received')
      return processRequest(response);
}).then(processResponse =>{
       console.log(processResponse);
}).catch(err =>{
       console.log(err)
})