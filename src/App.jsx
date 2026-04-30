import { useMemo, useState } from "react";
import "./App.css";
import { AvoidableTask } from "./Components/AvoidableTask";
import { Form } from "./Components/Form";
import { TaskTable } from "./Components/TaskTable";
import { Totalhours } from "./Components/Totalhours";

const App = () => {
  let [taskList, setTaskList] = useState([]);

  const addTask = (taskObj) => {
    setTaskList([...taskList, taskObj]);
  };

  const entryList = useMemo(() => {
    return taskList.filter((item) => item.type === "entry");
  }, [taskList]);
  const handleOnSwitch = (id, type) => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === id) {
          return { ...item, type: type };
        }
        return item;
      }),
    );
  };

  const switchBack = (id, type) => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === id) {
          return { ...item, type: type };
        }
        return item;
      }),
    );
  };
  const Totalhr = useMemo(() => {
    return taskList.reduce((acc, item) => {
      return acc + item.hour;
    }, 0);
  }, [taskList]);

  const avoidableTask = useMemo(() => {
    return taskList.filter((item) => item.type === "bad");
  }, [taskList]);

  const savedHour = useMemo(() => {
    return avoidableTask.reduce((acc, item) => acc + item.hour, 0);
  }, [avoidableTask]);

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ?")) {
      setTaskList(taskList.filter((item) => item.id !== id));
    }
  };
  return (
    <div className="wrapper pt-9 flex justify-center">
      <div className="container flex  items-center flex-col w-full">
        <h1 className="text-center font-semibold text-3xl mb-3">
          NOT TODO LIST
        </h1>
        <Form addTask={addTask} Totalhr={Totalhr} />
        <div className="flex gap-3 flex-col md:flex-row md:gap-5 w-[80%] justify-center">
          <TaskTable
            entryList={entryList}
            handleOnSwitch={handleOnSwitch}
            handleOnDelete={handleOnDelete}
          />
          <AvoidableTask
            avoidableTask={avoidableTask}
            switchBack={switchBack}
            handleOnDelete={handleOnDelete}
            savedHour={savedHour}
          />
        </div>{" "}
        <Totalhours Totalhr={Totalhr} />
      </div>
    </div>
  );
};

export default App;
