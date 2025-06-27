const Spinner = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-12 h-12 border-4 border-slate-700 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        
        {/* Inner dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Spinner;
  