import get from "request";
import {writeFile} from "fs";

// new XMLHttpRequest, $.http(, callback), $http(ng), fetch

get( // callback hell
    "https://en.wikipedia.org/wiki/Robert_Cecil_Martin",
    (requestErr, response, body) => {
        if (requestErr) {
            console.error(requestErr);
        } else {
            writeFile("article.html", body, writeErr => {
                if (writeErr) {
                    console.error(writeErr);
                    // TODO .error
                    // TODO report in UI
                    // TODO report to BE
                } else {
                    console.log("File written");
                }
            });
        }
    }
);
// 1 get a token
// 2 use the token to call API A
// 3 open a modal dialog
// 4 if YES then do a call to API B
// 5 if success toaster.success ("Yeehaa!")




