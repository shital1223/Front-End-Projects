import { Header } from "../components/Header";
import { Joke } from "../components/Joke";

export function JokePage() {
  return (
    <main>
      <Header
        heading="ChuckNorris Joke"
        subHeading="Free JSON API for hand curated Chuck Norris facts."
      ></Header>
      <Joke />
    </main>
  );
}
