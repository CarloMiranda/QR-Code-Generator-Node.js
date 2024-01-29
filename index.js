
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
.prompt([
    {
        messsafe: "Type in your URL: ",
        name: "URL",
    },
])
.then((answers) => {
    const url = answers.URL;
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.text", url, (err) => {
        if (err) throw err;
        console.log("Thie file has been saved!");
    });
})