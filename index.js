import dotenv from 'dotenv';
import * as filestack from 'filestack-js';
import * as http from 'http';
dotenv.config();
// import express from 'express';

// const app = express()
const hostname = '127.0.0.1'
const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(process.env.GREETING)
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})


const API_KEY = process.env.API_KEY
const client = filestack.init(API_KEY);
const options = {
    fromSources: ['local_file_system', 'instagram', 'facebook']
};

client.picker(options).open();

if (typeof window !== 'undefined') {
    console.log('You are on the browser,You are good to go')

// window.addEventListener('DOMContentLoaded',

const fileStackFunc = function() {


    const apikey = API_KEY;
    const client = filestack.init(apikey);

    const onProgress = (evt) => {
      document.getElementById('progress').innerHTML = `${evt.totalPercent}%`;
    };

    document.querySelector('input').addEventListener('change', (event) => {
      const files = event.target.files[0];
      const token = {};
      const cancel = document.getElementById('cancel');
      const pause = document.getElementById('pause');
      const resume = document.getElementById('resume');

      [cancel, resume, pause].forEach((btn) => {
        const id = btn.id;
        btn.addEventListener('click', () => {
          token[id]();
        });
      });


      client.upload(files, { onProgress }, {}, token)
        .then(res => {
          console.log('success: ', res)
        })
        .catch(err => {
          console.log(err)
        });
    });
  };

} else {
    console.log('You are on the server,Cannot execute')
   }
