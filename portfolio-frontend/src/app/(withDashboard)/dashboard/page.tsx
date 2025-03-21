

const DashboardPage = async () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1
        className="text-5xl font-bold text-center mt-10 dark:text-white text-black"
  
      >
        Welcome to Your Dashboard 🚀
      </h1>

      <p
        className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center"
    
      >
        Manage your projects, track progress, and explore insights.
      </p>

      <div
        className="mt-6 p-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg text-lg font-semibold cursor-pointer hover:scale-105 transition-transform"
       
      >
        Get Started 🚀
      </div>
    </div>
  );
};

export default DashboardPage;
