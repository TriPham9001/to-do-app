"use client";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full p-4 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-start w-full h-16 p-4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4">
        <p className="text-lg font-bold">Sidebar</p>
      </div>
      <div className="flex flex-col items-start justify-start w-full h-full p-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
        <p className="text-md font-semibold">Menu Item 1</p>
        <p className="text-md font-semibold">Menu Item 2</p>
        <p className="text-md font-semibold">Menu Item 3</p>
      </div>
    </div>
  );
};
export default Sidebar;
