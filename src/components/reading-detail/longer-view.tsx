import { Share2, Star } from "lucide-react";
import type { Reading } from "../../types";
import IconButton from "../icon-button";

type Props = {
  reading: Reading;
};

function LongerView({ reading }: Props) {
  function getPart(index: number) {
    switch (index) {
      case 0:
        return "Old Testament";
      case 1:
        return "New Testament";
      case 2:
        return "Gospel";
    }
  }
  return (
    <div>
      {reading.readings.map((readingItem, index) => (
        <div className="mt-10" key={index}>
          <p className="text-gray-400">{getPart(index)}</p>
          <div className="flex items-center justify-between">
            <h1 className="text-[26px] font-medium">{readingItem.book}</h1>
            <div className="inline-flex gap-2">
              <IconButton
                icon={<Star className="fill-amber-500 stroke-amber-500" />}
              />
              <IconButton icon={<Share2 className="text-gray-400" />} />
            </div>
          </div>
          <p className="pt-5 text-justify text-lg leading-9 font-medium">
            {readingItem.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default LongerView;
