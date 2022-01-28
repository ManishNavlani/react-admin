import { VisibilitySharp } from "@mui/icons-material";
import { widgetSmData } from "../../data";
function WidgetSm() {
  return (
    <div className="basis-4/12 p-5 mr-5 rounded-xl bg-white shadow-lg shadow-indigo-500/50">
      <h3 className="text-xl font-semibold">New Join Members</h3>
      <ul className="list-none m-0 p-0">
        {widgetSmData.map((data) => (
          <li key={data.id} className="flex justify-between my-5 items-center">
            <img src={data.img} className="rounded-full" alt="personImg" />
            <div className="flex flex-col ">
              <span className="font-bold">{data.name}</span>
              <span className="text-gray-500">{data.job}</span>
            </div>
            <button className="flex items-center bg-white border-none rounded-lg p-1 text-gray-500 hover:bg-indigo-100 hover:text-gray-800 cursor-pointer hover:shadow-lg hover:shadow-indigo-500/50">
              <VisibilitySharp className="mr-1" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WidgetSm;
