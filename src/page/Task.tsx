import { AddTask } from "@/components/module/AddTask";
import { UpdateTask } from "@/components/module/UpdateTask";
import { cn } from "@/lib/utils";
import {
  deleteTask,
  selectTasks,
  toggleTaskCompletion,
  updateFilter,
} from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hock";
import { Trash2, CheckCircle, Circle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectUsers } from "@/redux/features/user/userSlice";

export default function Task() {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  const getUserName = (userId?: string) => {
    const user = users.find((u) => u.id === userId);
    return user?.name;
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-wrap items-center gap-5">
        <h2 className="text-2xl font-bold">Task List</h2>

        <AddTask />

        <div className="flex w-full max-w-sm flex-col gap-6">
          <Tabs defaultValue="all">
            <TabsList>
              {["all", "low", "medium", "high"].map((priority) => (
                <TabsTrigger
                  key={priority}
                  onClick={() =>
                    dispatch(
                      updateFilter(
                        priority as "all" | "low" | "medium" | "high"
                      )
                    )
                  }
                  value={priority}
                >
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={cn(
              "rounded-2xl shadow-md p-5 space-y-2 relative hover:shadow-lg transition border",
              "bg-white text-gray-800 border-gray-200",
              "dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
            )}
          >
            <div className="absolute top-3 right-3 flex gap-2">
              <UpdateTask task={task} />
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className={cn(
                  "hover:text-red-800 cursor-pointer",
                  "text-red-600 cursor-pointer",
                  "dark:text-red-400 dark:hover:text-red-300 cursor-pointer"
                )}
                aria-label="Delete task"
              >
                <Trash2 size={18} />
              </button>
              <button
                onClick={() => dispatch(toggleTaskCompletion(task.id))}
                className={cn(
                  "hover:text-green-800 cursor-pointer",
                  "text-green-600 cursor-pointer",
                  "dark:text-green-400 dark:hover:text-green-300 cursor-pointer"
                )}
                title={
                  task.isCompleted ? "Mark as Pending" : "Mark as Completed"
                }
                aria-label={
                  task.isCompleted ? "Mark as Pending" : "Mark as Completed"
                }
              >
                {task.isCompleted ? (
                  <CheckCircle size={18} />
                ) : (
                  <Circle size={18} />
                )}
              </button>
            </div>

            <h3 className="text-xl font-semibold">{task.title}</h3>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              {task.description}
            </p>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              📅 Due:{" "}
              {new Date(task.dueDate).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>

            <div className="text-sm">
              🔥 Priority:{" "}
              <span
                className={cn(
                  "font-semibold",
                  task.priority === "high"
                    ? "text-red-500 dark:text-red-400"
                    : task.priority === "medium"
                    ? "text-yellow-500 dark:text-yellow-400"
                    : "text-green-500 dark:text-green-400"
                )}
              >
                {task.priority}
              </span>
            </div>

            <div className="text-sm">
              ✅ Status:{" "}
              <span
                className={cn(
                  "font-medium",
                  task.isCompleted
                    ? "text-green-600 dark:text-green-400"
                    : "text-gray-500 dark:text-yellow-300"
                )}
              >
                {task.isCompleted ? "Completed" : "Pending"}
              </span>
            </div>

            <div className="text-sm">
              👤 Assigned To:{" "}
              <span className="font-medium text-blue-600 dark:text-blue-400">
                {task.user ? getUserName(task.user) : "Unassigned"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
