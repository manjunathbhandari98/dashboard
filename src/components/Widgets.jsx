import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { categories } from "../data/data";
import { toggleSidebar } from "../redux/sidebarSlice";

const Widgets = () => {
  const dispatch = useDispatch();

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold">Example Dashboard</h2>
      <div className="flex flex-col gap-5">
        {categories.map((category) => (
          <div key={category.id}>
            <h3 className="text-md font-semibold">{category.name}</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {category.widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="bg-white min-h-40 flex items-center justify-center rounded-lg text-center p-4"
                >
                  {widget.text}
                </div>
              ))}
              <div className="bg-white min-h-40 flex items-center justify-center rounded-lg text-center p-4">
                <div
                  onClick={() => dispatch(toggleSidebar())}
                  className="flex bg-gray-50 text-sm rounded cursor-pointer gap-2 text-gray-700 border border-gray-300 px-4 py-2 items-center justify-center"
                >
                  <Plus size={16} />
                  <h2 className="font-medium">Add Widget</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widgets;
