export const Form = ({ addTask, Totalhr }) => {
  const randomIdGenerator = (length = 6) => {
    const str = "abcdefghijklmnopqrstuvwxyzASHJFVBNMXCERTYUIOPQ234569871";
    let id = "";
    for (let i = 0; i < length; i++) {
      let random = Math.floor(Math.random() * str.length);
      id += str[random];
    }
    return id;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newForm = new FormData(e.target);
    const task = newForm.get("task");
    const hour = +newForm.get("hours");

    const taskObj = {
      task,
      hour,
      id: randomIdGenerator(),
      type: "entry",
    };
    addTask(taskObj);

    const TotalhrPerWeek = 24 * 7;

    const existinghr = Totalhr;
    if (existinghr + hour > TotalhrPerWeek) {
      return alert("sorry your limit has been exceeded");
    }
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleOnSubmit}
        className="grid grid-cols-1 md:grid-cols-7 gap-4 w-[80%] shadow-lg p-7 mt-2 bg-transparent border-2 rounded-lg "
      >
        <div className="md:col-span-4">
          <input
            type="text"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            placeholder="Task ..."
            aria-label="First name"
            name="task"
            id="task"
          />
        </div>
        <div className="md:col-span-1">
          <input
            type="number"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            placeholder="hours"
            aria-label="Last name"
            name="hours"
            min="1"
          />
        </div>
        <div className="md:col-span-2 grid">
          <button className="text-black bg-yellow-400 rounded-md cursor-pointer hover:bg-sky-400 transition ease duration-150 py-2 md:py-1 font-semibold p-3">
            Add New task
          </button>
        </div>
      </form>
    </>
  );
};
