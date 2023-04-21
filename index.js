require('dotenv').config()
import * as filestack from 'filestack-js';
const client = filestack.init(REPLACE_WITH_API_KEY);
client.picker().open();

const API_KEY = process.env.API_KEY

window.addEventListener('DOMContentLoaded', function () {
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
  });
