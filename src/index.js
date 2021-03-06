import './style.css';
import fetchOnRefresh from './refreshScores';
import addScores from './addScores';

const root = document.querySelector('.root');

const fetchScores = async () => {
  let results;
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Dgl1g5JXUz6joOBlRdMy/scores',
  )
    .then((response) => response.json())
    .then((json) => {
      const tableList = document.querySelector('#scores');
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

const leaderboardTitle = () => {
  const leaderboardTitle = document.createElement('h1');
  leaderboardTitle.innerHTML
    += '<h1 class="mb-5 ms-3 text-center">Leaderboard <hr></h1>';
  root.appendChild(leaderboardTitle);
};

const leaderboard = () => {
  const leaderboardSection = document.createElement('section');
  leaderboardSection.classList.add('d-flex');
  leaderboardSection.innerHTML += `
  <div class="container justify-content-center shadow-lg p-3 mb-5 ms-5 bg-white rounded">
    <div class="title d-flex justify-content-between">
      <h2 class="px-2">Recent scores</h2>
      <button type="button" class="refresh button btn">Refresh</button>
    </div>
    <div class="player-scores mt-4 overflow">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Names</th>
            <th scope="col">Scores</th>
          </tr>
        </thead>
        <tbody id="scores"></tbody>
      </table>
    </div>
  </div>
  <div class="container">
    <form class="shadow p-3 mb-5 bg-white rounded text-center">
      <h3 class="mb-4">Add your score</h3>
      <input type="text" placeholder="Your name" class="names" required/>
      <br /> <br />
      <input type="number" placeholder="Your score" class="scores" required/>
      <br /> <br />
      <input type="submit" value="Submit" class="button submit btn" />
    </form>
  </div>`;

  return root.appendChild(leaderboardSection);
};

leaderboardTitle();
leaderboard();
fetchScores();

const refreshButton = document.querySelector('.refresh');
refreshButton.addEventListener('click', fetchOnRefresh);

const submitScores = document.querySelector('.submit');
submitScores.addEventListener('click', addScores);