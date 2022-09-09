import "../styles/header.scss";

export function Header() {
  return (
    <header class="main-header">
      <a href="index.html" class="main-header-link">
        <img src="./images/newavatar.png" alt="avatar" />
      </a>
      <h1 class="main-header-title">
        Olá, meu nome é <br />
        <strong>Lucas Romão</strong>,<br />
        sou programador Front-End.
        <br />
        Acesso a meu{" "}
        <a
          href="https://www.linkedin.com/in/lucas-romão-131b3a200/"
          class="main-header-link"
        >
          LinkedIn
        </a>
        .
      </h1>
    </header>
  );
}
