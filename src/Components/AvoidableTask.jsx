import { SavedHour } from "./SavedHour";

export const AvoidableTask = ({ avoidableTask }) => {
  return (
    <div className="w-full">
      <h2 className="mt-8 font-semibold text-2xl text-center mb-2">
        Avoidable Task
      </h2>
      <hr />
      <div className="relative overflow-x-auto bg-neutral-primary shadow-lg rounded-md mt-6 p-8 w-full bg-transparent border-2 border-white">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body border-b border-default">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-neutral-secondary-soft font-medium"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-neutral-secondary-soft font-medium"
              >
                Task
              </th>
              <th scope="col" className="px-6 py-3 font-medium">
                Hour
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-neutral-secondary-soft font-medium"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {avoidableTask.map((item, i) => {
              return (
                <tr key={i} className="border-b border-gray-400">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-heading whitespace-nowrap bg-neutral-secondary-soft"
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4">{item.task}</td>
                  <td className="px-6 py-4 ">{item.hour}</td>
                  <td className="px-6 py-4 bg-neutral-secondary-soft ">
                    {" "}
                    <button className="bg-red-500 pt-1 pb-1 pr-3 pl-3 rounded-md cursor-pointer mr-2">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <button className="bg-blue-500 pt-1 pb-1 pr-3 pl-3 rounded-md cursor-pointer">
                      <i className="fa-solid fa-arrow-left"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <SavedHour />
    </div>
  );
};
