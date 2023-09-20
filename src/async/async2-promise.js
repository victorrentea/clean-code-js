import get from "request-promise";
import { promises as fs } from 'fs';


get("https://en.wikipedia.org/wiki/Robert_Cecil_Martin")
    .then(body => fs.writeFile("article.html", body))
    .then(() => console.log("File written"))
    .catch(err => console.error(err));
