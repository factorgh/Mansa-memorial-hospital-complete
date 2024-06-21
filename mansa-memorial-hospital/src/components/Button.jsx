/* eslint-disable react/prop-types */

const Button = ({ icon, children, onClick }) => {
  return (
    <button
      type="submit"
      className="px-10 mt-10 py-4 bg-[#004F9E] rounded-md w-80 "
      onClick={onClick}
    >
      <span className="text-white flex gap-2 items-center justify-center text-sm">
        {icon} <h3>{children}</h3>
      </span>
    </button>
  );
};

export default Button;
