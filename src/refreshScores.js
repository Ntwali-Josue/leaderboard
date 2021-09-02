const fetchOnRefresh = async () => {
  let results;
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Dgl1g5JXUz6joOBlRdMy/scores',
  ).then((response) => response.json())
    .then((json) => {
      const ul = document.querySelector('#scores');
      ul.innerHTML = '';
      for (let i = 0; i < json.result.length; i += 1) {
        results = json.result[i];
        const list = document.createElement('li');
        list.innerHTML += `<li class="list-group-item text-start">${results.user}: ${results.score}</li>`;
        ul.appendChild(list);
      }
    });
};

export default fetchOnRefresh;