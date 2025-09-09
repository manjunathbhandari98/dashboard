import { Square, X } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categories } from "../data/data";
import { toggleSidebar } from "../redux/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div
      className={`fixed top-0 right-0 w-1/2 h-full bg-white flex flex-col justify-between shadow-lg transform transition-transform duration-500 z-40 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="">
        <div className="flex justify-between items-center bg-blue-900 text-white p-2">
          <h2 className="font-medium">Add Widget</h2>
          <X
            size={18}
            className="cursor-pointer"
            onClick={() => dispatch(toggleSidebar())}
          />
        </div>
        <p className="text-gray-600 p-2 text-sm font-medium">
          Personalize your dashboard by adding the following widget
        </p>

        {/* Category Tabs */}
        <div className="mt-2 flex flex-wrap gap-3 px-2 border-gray-200 border-b w-fit">
          {categories.map((category) => (
            <div
              onClick={() => setActiveTab(category.id)}
              key={category.id}
              className={`${
                activeTab == category.id &&
                " font-medium border-b border-blue-950 text-blue-900"
              } cursor-pointer px-4`}
            >
              {category.name}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 my-2 p-2">
          {categories[activeTab - 1].widgets.map((widget) => (
            <div className="border p-2 flex gap-2 items-center">
              <Square size={18} className="text-gray-700 cursor-pointer" />
              <p>{widget.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex gap-10 justify-center items-center my-5">
        <button className="border-blue-800 border rounded-lg cursor-pointer px-8 py-2 text-center">
          Cancel
        </button>
        <button className="bg-blue-900 text-white rounded-lg cursor-pointer px-8 py-2 text-center">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
