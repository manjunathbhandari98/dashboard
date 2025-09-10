import { MoreVertical, Plus, RefreshCcw, Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";
import { toggleSidebar } from "../redux/sidebarSlice";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex justify-between items-center">
        {/* Search bar */}
        <div className="flex items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg px-3 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            className="ml-2 flex-1 border-0 outline-none text-sm placeholder-gray-400"
            placeholder="Search anything..."
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-5">
          {/* Add Widget Button */}
          <div
            onClick={() => dispatch(toggleSidebar())}
            className="bg-white text-sm cursor-pointer rounded-lg flex gap-1 text-gray-900 border border-gray-400 p-2 items-center"
          >
            <h2 className="">Add Widget</h2>
            <Plus size={18} className="text-gray-500" />
          </div>

          {/* Refresh Buttons */}
          <div className="bg-white text-sm cursor-pointer rounded-lg gap-1 text-gray-900 border border-gray-400 p-2">
            <RefreshCcw size={18} className="text-gray-500" />
          </div>

          {/* More Button */}
          <div className="bg-white text-sm cursor-pointer rounded-lg gap-1 text-gray-900 border border-gray-400 p-2">
            <MoreVertical size={18} className="text-gray-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
