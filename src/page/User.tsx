"use client";

import { AddUser } from "@/components/module/AddUser";
import { UpdateUser } from "@/components/module/UpdateUser";
import { useAppSelector, useAppDispatch } from "@/redux/hock";
import { selectUsers, deleteUser } from "@/redux/features/user/userSlice";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function User() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  return (
    <div className="p-4 space-y-6">
      <div className="flex flex-wrap items-center gap-5">
        <h2 className="text-2xl font-bold">User Management</h2>
        <AddUser />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className={cn(
              "p-4 rounded-xl shadow-md border flex justify-between items-center",
              "bg-white dark:bg-gray-900 dark:text-white"
            )}
          >
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                ID: {user.id}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <UpdateUser user={user} />
              <button
                onClick={() => dispatch(deleteUser(user.id))}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 cursor-pointer"
                aria-label={`Delete user ${user.name}`}
                type="button"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
