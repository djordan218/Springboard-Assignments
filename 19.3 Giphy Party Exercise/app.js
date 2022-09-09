const gifArea = document.querySelector('#gif');
const searchText = document.querySelector('#text');

function addGif(res) {
  let numResults = res.data.length;
  console.log(numResults);
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let newCol = document.createElement('div');
    newCol.classList.add('col-md-4', 'col-12mb-4');
    let img = document.createElement('img');
    img.classList.add('w-100');
    img.src = res.data[randomIdx].images.original.url;
    newCol.append(img);
    gifArea.append(newCol);
  }
}

const form = document.querySelector('#form');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  let searchTerm = searchText.value;
  console.log(searchTerm);

  const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
    params: { q: searchTerm, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' },
  });
  addGif(response.data);
  console.log(response.data);
});

const remove = document.getElementById('remove');
remove.addEventListener('click', function () {
  document.querySelectorAll('img').forEach((e) => e.remove());
});
