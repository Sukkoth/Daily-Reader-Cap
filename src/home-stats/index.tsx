import Progress from "./progress";
import WeeklyStats from "./weekly-stats";

function HomeStats() {
  return (
    <div className="mt-5 space-y-5 bg-light-2 dark:bg-shade-2 px-3 py-4 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-medium pb-1">Reading Streak</h2>
          <p className="text-gray-400 text-sm font-medium">
            Best record: 14 days
          </p>
        </div>
        <div className="flex items-end gap-1">
          <p className="text-3xl font-bold">7</p>
          <span className="text-sm text-gray-400 mb-[2px]">days</span>
        </div>
      </div>
      <div>
        <Progress percent={100} />
      </div>
      <div>
        <WeeklyStats />
      </div>
    </div>
  );
}

export default HomeStats;
