import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Home from "./pages/Home";
import { closeSidebar } from "./redux/sidebarSlice";

function App() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <div className="bg-blue-50 w-full min-h-screen p-5 relative">
      <Home />
      <Widgets />

      {/* Black overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-50 z-30"
          onClick={() => dispatch(closeSidebar())}
        ></div>
      )}

      {/* Sidebar */}
      {isOpen && <Sidebar />}
    </div>
  );
}

export default App;
