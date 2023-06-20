import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/newOperations";
import { getNewTasks } from "../redux/selectors";
import { Layout } from "./Layout/Layout";
// import { AppBar } from "./AppBar/AppBar";
// import { TaskForm } from "./TaskForm/TaskForm";
// import { TaskList } from "./TaskList/TaskList";

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getNewTasks);
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);
  return (
    <Layout>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
      </div>
      {/* <AppBar />
      <TaskForm />
      <TaskList /> */}
    </Layout>
  );
};
