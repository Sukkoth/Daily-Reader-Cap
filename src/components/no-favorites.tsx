import { StarOff } from "lucide-react";

export default function NoFavorites() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-5 pt-5 text-center">
      <div className="rounded-full bg-orange-100 p-7 dark:bg-orange-200/30">
        <StarOff className="size-[4rem] rotate-[20deg] text-orange-400" />
      </div>
      <h1 className="text-xl font-bold text-gray-500 dark:text-gray-400">
        Your favorites list is empty
      </h1>
      <p className="px-10 text-gray-400">
        Tap the star icon to start saving your favorite verses
      </p>
    </div>
  );
}
