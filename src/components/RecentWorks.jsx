import "../styles/recent.scss";

export function RecentWorks() {
  return (
    <section class="main-content-section">
      <h3>Recent Works</h3>

      <article class="recent-works-card">
        <a href="./images/thumbs/movie-helper-bckg2.png">
          <img
            src="./images/thumbs/movie-helper-bckg.png"
            title="movie helper"
          />
        </a>
        <a href="https://github.com/LucasGabryell/Movie-Helper">
          <p class="recent-works-card-title">Movie Helper</p>
        </a>
        <p>Site com filmes populares e descrição dos mesmos - ReactJS/NodeJS</p>
        <br />
      </article>

      <article class="recent-works-card">
        <a href="./images/thumbs/pokemon.gif">
          <img src="./images/thumbs/pokemon bckg.png" title="Pokedex" />
        </a>
        <a href="https://github.com/LucasGabryell/Pokedex">
          <p class="recent-works-card-title">Pokedex</p>
        </a>
        <p>Pokedex com centenas de Pokemons - Javascript</p>
        <br />
      </article>

      <article class="recent-works-card">
        <a href="./images/thumbs/sales-mvc-2.png">
          <img src="./images/thumbs/sales-mvc-bckg.png" title="Sales MVC" />
        </a>
        <a href="https://github.com/LucasGabryell/SistemaWeb">
          <p class="recent-works-card-title">Sales MVC</p>
        </a>
        <p>CRUD em um Sistema Web - Asp.NET</p>
        <br />
      </article>

      <a
        href="https://github.com/LucasGabryell"
        title="Veja Portifolio completo"
        class="button-default"
      >
        Veja Portifolio completo
      </a>
    </section>
  );
}
