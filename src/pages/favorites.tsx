import { useNavigate } from "react-router-dom";

function Favorites() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center flex-col h-[92.5dvh]">
      <h1>This is favorites page</h1>
      <button
        onClick={() => navigate("/")}
        className="px-5 mt-4 py-2 bg-gray-800 rounded-xl"
      >
        Back to home
      </button>
    </div>
  );
}

export default Favorites;
