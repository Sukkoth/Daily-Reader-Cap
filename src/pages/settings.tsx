import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[90.5dvh] flex-col items-center justify-center">
      <h1>This is settings page</h1>
      <button
        onClick={() => navigate("/")}
        className="mt-4 rounded-xl bg-gray-800 px-5 py-2"
      >
        Back to home
      </button>
    </div>
  );
}

export default Settings;
