// Create function 'showImages' which
// loads images.json which has links to images as an array.


'use strict';

const ul = document.querySelector('ul');

const showImages = async (code) => {
  const array = await code;
  array.forEach((image) => {
      // put code here
      // create elements
      const h3 = document.createElement('h3');
      const figcaption = document.createElement('figcaption');
      const img = document.createElement('img');
      const a = document.createElement('a');
      const figure = document.createElement('figure');
      const li = document.createElement('li');

      // add text content
      const text = document.createTextNode(image.mediaTitle);
      h3.appendChild(text);
      // or
      // h3.innerHTML = image.mediaTitle;

      // add attributes
      img.setAttribute('src', 'img/thumbs/' + image.mediaThumb);
      a.setAttribute('href', 'img/original/' + image.mediaUrl);

      // nest elements
      figcaption.appendChild(h3);
      a.appendChild(img);
      figure.appendChild(a);
      figure.appendChild(figcaption);
      li.appendChild(figure);

      // insert new elements to page
      ul.appendChild(li);
  });
};

const getFetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
 };

 try {
    const code = getFetchData('images.json');
    showImages(code);
 } catch(e) {
    console.error(e);
 }