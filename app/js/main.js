/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// helper functions ----------

function logResult(result) { 
// untuk menampilkan result pada console ketika salah satu data kita klik maka akan muncul di bagian console
  console.log(result);
}

function logError(error) { //fungsi ini berfungsi untuk menmpilkan kegiatan yang error
  console.log('Looks like there was a problem:', error);
}

function showImage(responseAsBlob) { 
  const container = document.getElementById('img-container');
  const imgElem = document.createElement('img');
  container.appendChild(imgElem);
  const imgUrl = URL.createObjectURL(responseAsBlob);
  imgElem.src = imgUrl;
  //  digunakan untuk merespon data img dengan mengubah menjadi img url dan membuat element img dan menampilkan image
}

function showText(responseAsText) {
  const message = document.getElementById('message');
  message.textContent = responseAsText;
   // digunakan untuk merespon dan menampilkan pada bagian data text, kemidian jika merespon maka akan di tampilkan text 
}


function validateResponse(response) { 
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
// bagian ini digunakan untuk memvalidasi data dengan pengendaian jika tidak merespon maka tampilkan error jika bener maka akan retur ke response

function readResponseAsJSON(response) { 
  return response.json();
  //  berfungsi untuk membaca merespon data json
}

function readResponseAsBlob(response) { 
  return response.blob();
  //  digunakan untuk membaca respon dari blob, blob adalah decode dari img 
}

function readResponseAsText(response) { 
  return response.text();
  // untuk membaca data text 
}

// Fetch JSON ----------


function fetchJSON() {
  // TODO
  fetch('examples/animals.json')
	.then(validateResponse) // 2
	.then(readResponseAsJSON) // 3
	.then(logResult) // 4
	.catch(logError);
	// mengambil/memanggil data dari examples/animals.json kemudian memvalidate oleh fungsi validateresponse

}
const jsonButton = document.getElementById('json-btn');
jsonButton.addEventListener('click', fetchJSON);
// digunakan untuk memanggil element id yaitu json-btn kemudian ditambahkan eventlistener jika di klik event maka akan json-btn


// Fetch Image ----------


function fetchImage() {
  // TODO
  fetch('examples/fetching.jpg')
	.then(validateResponse)
	.then(readResponseAsBlob)
	.then(showImage)
	.catch(logError);
	//untuk membanggil data/resouce dari examples/fetching.jpg kemudian memvalidasi dari fungsi validateResponse jika error maka akan di tampilkan di console atau kegiatan error(logerror)
}
const imgButton = document.getElementById('img-btn');
imgButton.addEventListener('click', fetchImage);
// digunakan untuk memanggil element id yaitu json-btn kemudian ditambahkan eventlistener jika di klik event maka akan img-btn

// Fetch text ----------
function fetchText() {
  // TODO
  fetch('examples/words.txt')
	.then(validateResponse)
	.then(readResponseAsText)
	.then(showText)
	.catch(logError);
	// memanggil/memfetching ke resource examples/words.txt kemudian memvalidasi di fungsi validasi dan fungsi lainnya kemidan jika salah akaan tampilkan logerror
}
const textButton = document.getElementById('text-btn');
textButton.addEventListener('click', fetchText);
// digunakan untuk memanggil element id yaitu json-btn kemudian ditambahkan eventlistener jika di klik event maka akan text-btn


function fetchdata() {
  // TODO
  fetch('http://jsonplaceholder.typicode.com/users')
	.then(validateResponse) // 2
	.then(readResponseAsText)// 3
	.then(showText) // 4
	.catch(logError);

}
const dataButton = document.getElementById('data-btn');
dataButton.addEventListener('click', fetchdata);


// HEAD request ----------

function headRequest() {
  // TODO
}
const headButton = document.getElementById('head-btn');
headButton.addEventListener('click', headRequest);


// POST request ----------

/* NOTE: Never send unencrypted user credentials in production! */
function postRequest() {
  // TODO
}
const postButton = document.getElementById('post-btn');
postButton.addEventListener('click', postRequest);
