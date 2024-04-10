import { hour } from "../utils/index";

const days = ["日", "月", "火", "水", "木", "金", "土"];

export function WeekCalender() {
  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-2">
          <div className="grid gap-3 mt-6">
            {hour(24).map((time) => (
              <div
                className="text-right mr-3 relative before:absolute before:content-[''] before:top-11 before:left-5 before:w-calc-100vw-minus-70px　before:border-t before:border-gray-300"
                key={time}
              >
                {time}:00
              </div> // 各要素に key プロパティを追加します
            ))}
          </div>
          <div className="grid grid-cols-7">
            {days.map((day) => (
              <div key={day}>{day}</div> // 各要素に key プロパティを追加します
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
