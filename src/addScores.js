const addScores = async (e) => {
  e.preventDefault();
  const names = document.querySelector('.names').value;
  const scores = document.querySelector('.scores').value;

  const fetchUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Dgl1g5JXUz6joOBlRdMy/scores';
  await fetch(fetchUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: names,
      score: scores,
    }),
  }).then((response) => response.json());
};

export default addScores;