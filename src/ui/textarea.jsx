const Textarea = ({ name, placeholder }) => {
  return (
    <div className="w-full mx-auto">
      <textarea
        name={name}
        placeholder={placeholder}
        className="w-full min-h-[120px] p-[10px] focus:outline-cyan-600 outline-[8px] focus:border-[4px] mt-6 border-cyan-500 rounded-lg text-gray-700"
      ></textarea>
    </div>
  );
};

export default Textarea;
