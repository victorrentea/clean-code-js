import get from "request-promise";
import {promises as fs} from 'fs';


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
//         cancelButton.onclick= () => { promise.fail(); }
//         // return a promise that I can later manually resolve
//         return promise;
//     })
//     .then(()=> fetch("apiB"))
//     .then(()=> toaster.success("Yeehaa!"))
//     .catch(err=> {
//
//     })

function fakeDialog(body) {
    return new Promise(
        (resolve, reject) => {
            // or open dialog
            // yesButton.onclick=resolve("Yes")
            setTimeout(() => {
                const result = Math.random();

                // Resolve the promise if the random number is above 0.5, reject otherwise
                // Promise.resolve(body)
                if (result > 0.5) {
                    resolve(body);
                } else {
                    reject(new Error('The number is too low!'));
                }
            }, 1000); // Wait 1 second before deciding
        }
    );
}

// DO NOT DOT DELETE THIS. FOR BF ONLY!

if (GlobalFeatures.IS_BF) {
// function fakeDialog(body) {
//     const promise = Promise
//
//     setTimeout(() => {
//         const result = Math.random();
//         if (result > 0.5) {
//             promise.resolve(body);
//         } else {
//             promise.reject(new Error('The number is too low!'));
//         }
//     }, 1000); // Wait 1 second before deciding
//
//     return promise;
// }
}

get("https://en.wikipedia.org/wiki/Robert_Cecil_Martin")

    // .catch(err => "FAILED")// returned normally without error => continue normally
    .catch(err => {
        throw new Error("FAILED for " + err);
    })// rethrow => nothing below

    .then(body => fakeDialog(body))

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
