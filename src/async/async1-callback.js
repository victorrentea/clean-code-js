import get from "request";
import {writeFile} from "fs";

get(
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


