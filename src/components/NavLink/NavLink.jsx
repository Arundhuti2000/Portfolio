const NavLink = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
  >
    {children}
  </button>
);

export default NavLink;
