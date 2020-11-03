// require('popper.js')
let $ = require('jquery')
const { exec } = require('child_process');

// require('bootstrap')

$("#run-script").click(function () {
    exec('./run.sh', (err, stdout, stderr) => {
        if (err) {
            console.error(`exec error: ${err}`);
            return;
        }

        $("#story").append(stdout)
    });
})
console.log("fraier");

