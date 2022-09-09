import { Header } from "./components/Header";
import { AboutMe } from "./components/AboutMe";
import { Presentation } from "./components/Presentation";
import { RecentWorks } from "./components/RecentWorks";

import "./styles/normalize.scss";
import "./styles/body.scss";

export function App() {
  return (
    <body>
      <div class="main-header">
        <Header />
      </div>
      <main>
        <AboutMe />
        <Presentation />
        <div class="recent-works">
          <RecentWorks />
        </div>
      </main>
    </body>
  );
}
