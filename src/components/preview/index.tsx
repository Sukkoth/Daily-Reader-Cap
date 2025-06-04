import { useNavigate } from "react-router-dom";

function Preview() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/readings/1")}
      className="bg-light-2 dark:bg-shade-2 flex-grow flex flex-col items-center justify-center px-8 rounded-xl text-xl font-medium text-center leading-8 border border-gray-200 dark:border-gray-700"
    >
      <p>
        Rejoice and be glad, because great is your reward in heaven, for in the
        same way they persecuted the prophets who were before you.
      </p>
      <p className="mt-10 text-gray-400 text-sm">Mathew 5:12</p>
    </div>
  );
}

export default Preview;
