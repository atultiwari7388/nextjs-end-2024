// Sidebar.js
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed h-screen p-4 flex flex-col items-center space-y-8 bg-gray-800 transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sm:translate-x-0 sm:w-16 border-r border-gray-700`}
    >
      <div className="text-white">Logo</div>
      <div className="text-gray-400 cursor-pointer" onClick={toggleSidebar}>
        📁
      </div>
      <div className="text-gray-400 cursor-pointer" onClick={toggleSidebar}>
        👤
      </div>
      <div className="text-gray-400 cursor-pointer" onClick={toggleSidebar}>
        ⚙️
      </div>
    </div>
  );
};

export default Sidebar;
