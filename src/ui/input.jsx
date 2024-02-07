const Input = ({ type = "text", placeholder, name }) => {
  return (
    <div className="w-full mx-auto">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full ss:h-[73px] h-[50px] p-[10px] focus:outline-cyan-600 outline-[8px] focus:border-[4px] mt-6 border-cyan-500 rounded-lg text-gray-700"
      />
    </div>
  );
};

export default Input;
