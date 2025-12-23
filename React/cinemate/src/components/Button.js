export const Button = ({ children }) => {
  return (
    <button className="w-64 text-xl bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg px-5 py-2 mr-2 mb-2 font-medium">
      {children}
    </button>
  );
};
