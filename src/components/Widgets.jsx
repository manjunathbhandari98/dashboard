import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../data/data";
import { toggleSidebar } from "../redux/sidebarSlice";

const Widgets = () => {
  const dispatch = useDispatch();
  const widgets = useSelector((state) => state.widget.widgets);
  const searchQuery = useSelector((state) => state.search.query.toLowerCase());

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold">Example Dashboard</h2>
      <div className="flex flex-col gap-5">
        {categories.map((category) => (
          <div key={category.id}>
            <h3 className="text-md font-semibold">{category.name}</h3>
            <div className="grid sm:grid-cols-3 gap-3">
              {widgets
                // keep only widgets belonging to this category
                .filter((w) => category.widgets.some((c) => c.id === w.id))
                // apply search filter
                .filter(
                  (w) =>
                    w.text.toLowerCase().includes(searchQuery) ||
                    w.title?.toLowerCase().includes(searchQuery)
                )
                .map((widget) => (
                  <div
                    key={widget.id}
                    className="bg-white min-h-40 flex items-center justify-center rounded-lg text-center p-4"
                  >
                    <div>
                      <h4 className="font-medium">{widget.title}</h4>
                      <p className="text-sm text-gray-600">{widget.text}</p>
                    </div>
                  </div>
                ))}

              {/* Add Widget card */}
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
