import "../styles/content.scss";

const title = "FrontEnd Developer";

export function Presentation() {
  return (
    <section class="main-content-section">
      <h2>{title}</h2>
      <p>
        Sou um entusiasta de programação, estou sempre me reinventando nesse
        universo de possibilidade. Com minha curiosidade em aprender e minha
        perseverança, me torno um programador melhor a cada dia. E por essa
        minha sede de aprendizado e novas experiências que quero embarcar no
        mercado dessa área maravilhosa.
      </p>
      <a href="#" title="Veja mais" class="button-default">
        Veja mais
      </a>
    </section>
  );
}
