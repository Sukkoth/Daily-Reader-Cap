import { useNavigate } from "react-router-dom";

function Preview() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/readings/2025-05-01")}
      className="bg-light-2 dark:bg-shade-2 flex flex-grow flex-col items-center justify-center rounded-xl border border-gray-200 px-8 text-center text-xl leading-8 font-medium dark:border-gray-700"
    >
      <p>
        Rejoice and be glad, because great is your reward in heaven, for in the
        same way they persecuted the prophets who were before you.
      </p>
      <p className="mt-10 text-sm text-gray-400">Mathew 5:12</p>
    </div>
  );
}

export default Preview;
