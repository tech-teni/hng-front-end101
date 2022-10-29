// import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="project container">
      <div className="arrow-container">
        <div className="arrow-circle">
          <img src="./imgs/arrow.svg" alt="" />
        </div>
      </div>
      <Header />
      <section>
        <div className="button-container">
          <Button id="twitter" word="Twitter Link" href="#" />
          <Button
            id="btn_zuri"
            word="Zuri Team"
            href="https://training.zuri.team/"
          />
          <Button id="book" word="Zuri Books" href="http://books.zuri.team" />
          <Button
            id="python_book"
            word="Python Books"
            href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>"
          />
          <Button
            id="pitch"
            word="Background Check for Coders"
            href="https://background.zuri.team,"
          />
          <Button
            id="book_design"
            word="Design Books"
            href="https://books.zuri.team/design-rules"
          />

          <button></button>
        </div>
      </section>
      <div className="socials-container">
        <img src="./imgs/slack.svg" alt="" />
        <img src="./imgs/github.svg" alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
