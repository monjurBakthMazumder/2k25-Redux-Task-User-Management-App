export interface ITask {
  id: string;
  title: string;
  description: string;
  dueDate: string; // stored as ISO string
  isCompleted: boolean;
  priority: "low" | "medium" | "high";
  user?: string | null;
}

export interface IUser {
  id: string;
  name: string;
}
