export const SavedHour = ({ savedHour }) => {
  return (
    <div className="bg-white mt-3 text-gray-500 font-semibold p-3 rounded-md ">
      {" "}
      You could have saved = <span id="SavedTotal">{savedHour}</span>hr
    </div>
  );
};
