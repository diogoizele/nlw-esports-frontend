import { GameProps } from "../App";

export function GameBanner({ id, adsCount, bannerUrl, title }: GameProps) {
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt={title} className="w-full h-full object-cover" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
