import get from "request-promise";
import { promises as fs } from 'fs';


try {
    let body = "";
    try {
        body = await get("https://en.wikipedia.org/wiki/Robert_Cecil_MartinXX");
    } catch (e) {
        body = "ERROR";
    }
    await fs.writeFile("article.html", body);
    console.log("File written");
} catch (e) {
    console.error(e);
}
