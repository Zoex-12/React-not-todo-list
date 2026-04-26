import "./App.css";
import { AvoidableTask } from "./Components/AvoidableTask";
import { Form } from "./Components/Form";
import { TaskTable } from "./Components/TaskTable";
import { Totalhours } from "./Components/Totalhours";

const App = () => {
  return (
    <div className="wrapper pt-9 flex justify-center">
      <div className="container flex  items-center flex-col w-full">
        <h1 className="text-center font-semibold text-3xl mb-3">
          NOT TODO LIST
        </h1>
        <Form />
        <div className="flex gap-3 flex-col md:flex-row md:gap-5 w-[80%] justify-center">
          <TaskTable />
          <AvoidableTask />
        </div>{" "}
        <Totalhours />
      </div>
    </div>
  );
};

export default App;
