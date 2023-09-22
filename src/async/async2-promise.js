import get from "request-promise";
import { promises as fs } from 'fs';



// 1 get a token
// 2 use the token to call API A
// 3 open a modal dialog
// 4 if YES then do a call to API B
// 5 if success toaster.success ("Yeehaa!")

// fetch("url")
//     .then(response => {
//         if (response.success) {
//             return fetch("apiA?"+response.token);
//         }
//     })
//     .then(reponA=> {
//         // open dialog
//         const promise = new Promise()
//         yesButton.onclick= () => { promise.resolve("YES"/"NO"); }
//         cancelButton.onclick= () => { promise.error(); }
//         // return a promise that I can later manually resolve
//         return promise;
//     })
//     .then(()=> fetch("apiB"))
//     .then(()=> toaster.success("Yeehaa!"))
//     .catch(err=> {
//
//     })

get("https://en.wikipedia.org/wiki/Robert_Cecil_MartinX")

    // .catch(err => "FAILED")// returned normally without error => continue normally
    .catch(err => {
        throw new Error("FAILED for " + err);
    })// rethrow => nothing below

    .then(body => fs.writeFile("article.html", body))

    .then(() => console.log("File written"))
    .catch(err => console.error("ERROR", err))
    // .finally()
;

// if the get fails, write to file "FAILED"

// try {
//     const body = await get("https://en.wikipedia.org/wiki/Robert_Cecil_Martin");
//     await fs.writeFile("article.html", body);
//     console.log("File written");
// } catch (e) {
//     console.error(e);
// }
//
// // const results = [];
// // for (let i = 0; i < 100; i++) { // perf anti-pattern
// //     results.push(await get("https://en.wikipedia.org/wiki/Robert_Cecil_Martin" + i));
// // }
//
// const ids = [1,2,3,4,5,6,7,8,9,10]
// // parallelize the network calls
// let promises = ids.map(id => get("http://order-service/order/" + id));
// let all = await Promise.all(promises);
// console.log(all);
//
// // instead of repeteadly calling a remote API, prefer to use a BATCHED api (if there is one)
// // const allData = await get("http://order-service/order/many", body:ids)
//
// //ORM
//
// // Post.findAll({
// //     where: {
// //         authorId: {
// //             [Op.in]: ids
// //         }
// //     }
// // });
//
//
//     //
//     //
//     // .then(body => fs.writeFile("article.html", body))
//     // .then(() => console.log("File written"))
//     // .catch(err => console.error(err));


// const res = await showDialog("Text", "Body", "Yes","No");
// if (res === "Yes") {
//
// }
