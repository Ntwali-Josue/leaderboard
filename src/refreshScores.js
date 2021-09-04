const fetchOnRefresh = async () => {
  let results;
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/wR9B3hRbawbomUvn3wZJ/scores',
  ).then((response) => response.json())
    .then((json) => {
      const tableList = document.querySelector('#scores');
      tableList.innerHTML = '';
      for (let i = 0; i < json.result.length; i += 1) {
        results = json.result[i];
        const scores = document.createElement('tr');
        scores.innerHTML += `
        <tr>
        <td>${results.user}</td>
        </tr>
        <tr>
        <td>${results.score}</td>
        </tr>
      `;
        tableList.appendChild(scores);
      }
    });
};

export default fetchOnRefresh;