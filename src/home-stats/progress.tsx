import { cn } from "../utils/cn";

type Props = {
  percent: number;
};
function Progress({ percent }: Props) {
  const width = `${percent}%`;
  return (
    <div className="rounded-xl overflow-clip bg-gray-700">
      <div
        className={cn(
          "bg-gradient-to-r from-orange-400 to-orange-600 h-3 rounded-xl"
        )}
        style={{ width }}
      ></div>
    </div>
  );
}

export default Progress;
