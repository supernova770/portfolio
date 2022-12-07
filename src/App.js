import './App.css';

function App() {
  return (
    <div className="App">
      <div className="body-container">
        <div className="profile-container">
          <img clasName="circle" src="svds.jfif" width="100" height="100" alt="profile" />
          <h2 id="portfolio-text-title">Sietze van de Star</h2>
        </div>
        <p id="portfolio-text-body">Hi 👋 I am a front-end engineer working on accesible digital experiences.</p>
        <p id="portfolio-text-footer">Connect with me on: </p>
        <div className="chip-container">
          <div class="chip chip--green-medium"><a href='https://www.linkedin.com/in/sietze-van-de-star/' target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
          <div class="chip chip--green-medium"><a href='https://codepen.io/svandes' target="_blank" rel="noopener noreferrer">Codepen</a></div>
          <div class="chip chip--green-medium"><a href='https://github.com/op2020-cyber' target="_blank" rel="noopener noreferrer">GitHub</a></div>
        </div>
      </div>
    </div>
  );
}

export default App;
