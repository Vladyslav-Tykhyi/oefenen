import Artikel_1 from "./artikel_1";
import Artikel_2 from "./Artikel_2";
import Artikel_3 from "./Artikel_3";
import s from "../styles/App.module.css";
import { useState, useEffect } from "react";

const App = () => {
  const [like, setLikes] = useState(() => {
    const saved = localStorage.getItem("data");
    return saved
      ? JSON.parse(saved)
      : {
          heading: 0,
          heading_2: 0,
          heading_3: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(like));
  }, [like]);

  const handleLike = (artikelNaam) => {
    setLikes((prev) => ({
      ...prev,
      [artikelNaam]: prev[artikelNaam] + 1,
    }));
  };

  return (
    <div className={s.container}>
      <Artikel_1 like={like} handleLike={handleLike} />
      <Artikel_2 like={like} handleLike={handleLike} />
      <Artikel_3 like={like} handleLike={handleLike} />
    </div>
  );
};

export default App;
