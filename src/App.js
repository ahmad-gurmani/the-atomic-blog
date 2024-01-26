import { useEffect, useState } from "react";

import Header from "./Components/Header";
import Main from "./Components/Main";
import Archive from "./Components/Archive";
import Footer from "./Components/Footer";
import { ContextProvider, usePosts } from "./Context/ContextProvider";

function App() {
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  const [isFakeDark, setIsFakeDark] = useState(false);

  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>

      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      <ContextProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </ContextProvider>

    </section>
  );
}

export default App;
