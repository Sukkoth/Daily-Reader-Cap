import { StarOff } from "lucide-react";

export default function NoFavorites() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-5 pt-5 text-center">
      <div className="bg-shade-2 rounded-full p-7">
        <StarOff className="size-[4rem] rotate-[20deg] text-gray-500" />
      </div>
      <h1 className="text-xl font-bold text-gray-300">
        Your favorites list is empty
      </h1>
      <p className="px-10 text-gray-400">
        Tap the star icon to start saving your favorite verses
      </p>
    </div>
  );
}
