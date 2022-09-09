import "../styles/aboutme.scss";

export function AboutMe() {
  return (
    <section class="about-me" id="about">
      <div class="container">
        <div class="about-content">
          <div class="left-content">
            <div>
              <h1 class="about-heading">About Me</h1>
            </div>
            <p>
              Hi, I'm 20 years old, I do computer science and I'm in sixth
              period. Currently, I am studying a lot and improving my frontend
              and as for my backend I can say that I have good programming
              logic. In my free time I like to go out to eat with friends or
              watch a good series or movie.
            </p>
          </div>
          <div class="work-arrow">
            <p>
              <a href="#my-works">
                Check out my works <i class="fas fa-arrow-down"></i>
              </a>
            </p>
          </div>
        </div>
        <div class="skills">
          <div class="right-content">
            <div>
              <h1 class="skills-heading">My Skills</h1>
            </div>
          </div>
          <div class="skills-bar">
            <div class="bar">
              <div class="info">
                <span>HTML</span>
              </div>
              <div class="progress-line">
                <span class="html"></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>CSS</span>
              </div>
              <div class="progress-line">
                <span class="css"></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>JavaScript</span>
              </div>
              <div class="progress-line">
                <span class="javascript"></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>Python</span>
              </div>
              <div class="progress-line">
                <span class="python"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
