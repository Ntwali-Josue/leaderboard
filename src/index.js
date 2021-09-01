import './style.css';

const root = document.querySelector('.root');

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

const leaderboardTitle = () => {
  const leaderboardTitle = document.createElement('h1');
  leaderboardTitle.innerHTML += '<h1 class="mb-5 ms-3">Leaderboard</h1>';
  root.appendChild(leaderboardTitle);
};

const leaderboard = () => {
  const leaderboardSection = document.createElement('section');
  leaderboardSection.classList.add('d-flex');
  leaderboardSection.innerHTML += `<div class="container">
  <div class="title d-flex">
    <h2 class="px-2">Recent scores</h2>
    <button type="button" class="refresh button btn mx-5">Refresh</button>
  </div>
  <div class="player-scores mt-4">
    <span class="px-2">Click the Refresh button to load the scores.<span>
    <ul class="list-group" id="scores"></ul>
  </div>
</div>
<div class="container">
  <form>
    <h3 class="mb-4">Add your score</h3>
    <input type="text" placeholder="Your name" required /> <br />
    <br />
    <input type="text" placeholder="Your score" required /> <br />
    <br />
    <input type="submit" value="Submit" class="button btn" />
  </form>
</div>`;

  return root.appendChild(leaderboardSection);
};

leaderboardTitle();
leaderboard();

const refreshButton = document.querySelector('.refresh');
refreshButton.addEventListener('click', fetchOnRefresh);
