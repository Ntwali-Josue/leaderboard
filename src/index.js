import './style.css';

const root = document.querySelector('.root');

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
    <ul class="list-group" id="scores">
      <li class="list-group-item text-start">Name : 100</li>
      <li class="list-group-item list-group-item-dark text-start">
        Name: 20
      </li>
      <li class="list-group-item text-start">Name: 50</li>
      <li class="list-group-item list-group-item-dark text-start">
        Name: 78
      </li>
      <li class="list-group-item text-start">Name: 125</li>
    </ul>
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