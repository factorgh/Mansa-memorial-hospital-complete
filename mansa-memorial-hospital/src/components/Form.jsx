/* eslint-disable react/prop-types */
const Form = ({ title, children }) => {
  return (
    <label className="w-full flex-1 p-5 ">
      <h3 className="p-2">{title}</h3>
      {children}
    </label>
  );
};

export default Form;
