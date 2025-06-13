import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { getReadingData } from "../../utils/parse-reading-data";
import NoReading from "../reading-detail/no-reading";
import { MoveRight } from "lucide-react";

function Preview() {
  const navigate = useNavigate();
  const today = format(new Date(), "yyyy-MM-dd");
  const todaysReading = getReadingData(today);

  return (
    <div
      onClick={() => navigate(`/readings/${today}`)}
      className="bg-light-2 dark:bg-shade-2 flex flex-grow cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-200 px-8 text-center text-xl leading-8 font-medium dark:border-gray-700"
    >
      {!todaysReading?.readings.length && <NoReading />}
      {todaysReading?.readings.length === 1 && (
        <>
          <p>{todaysReading?.readings[0].text}</p>
          <p className="mt-10 text-sm text-gray-400">
            {todaysReading?.readings[0].book}
          </p>
        </>
      )}
      {todaysReading?.readings.length === 3 && (
        <>
          <p className="text-sm text-gray-400">{todaysReading?.description}</p>
          <p className="py-5 text-2xl">{todaysReading?.title}</p>
          <div className="text-center">
            {todaysReading?.readings.map((reading, index) => (
              <p key={index}>{reading.book}</p>
            ))}
          </div>
          <p className="mt-10 cursor-pointer text-sm text-gray-400 italic hover:text-gray-600 dark:hover:text-gray-300">
            Read all{" "}
            <span className="ml-1">
              <MoveRight className="inline size-4" />
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default Preview;
