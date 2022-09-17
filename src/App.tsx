import { useEffect, useState } from "react";
import axios from "axios";

import { GameBanner } from "./components/GameBanner";
import { CreateAdModal } from "./components/CreateAdModal";

import "./styles/main.css";

import logoImg from "./assets/logo-nlw.svg";
export interface GameProps {
  id: string;
  bannerUrl: string;
  title: string;
  adsCount: number;
}

function App() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3333/games").then(({ data }) => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center justify-center my-20 relative">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(({ id, adsCount, bannerUrl, title }) => (
          <GameBanner
            key={id}
            id={id}
            adsCount={adsCount}
            title={title}
            bannerUrl={bannerUrl}
          />
        ))}
      </div>

      <CreateAdModal />
    </div>
  );
}

export default App;
