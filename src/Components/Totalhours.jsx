export const Totalhours = ({ Totalhr }) => {
  return (
    <div className="bg-white mt-3 text-gray-500 font-semibold p-3 rounded-md w-[80%]">
      {" "}
      The total hours allocated = <span id="TotalHour">{Totalhr}</span>hr
    </div>
  );
};
