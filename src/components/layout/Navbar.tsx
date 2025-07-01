
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <div
      className={cn(
        "flex justify-between items-center p-4 shadow-sm",
        "bg-white text-gray-800", // Light mode
        "dark:bg-gray-900 dark:text-gray-100" // Dark mode
      )}
    >
      <div className="text-xl font-bold">Navbar</div>
      <ul className="flex space-x-6 text-sm font-medium">
        <li>
          <Link to="/">
            <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Task
            </a>
          </Link>
        </li>
        <li>
          <Link to="/user">
            <a className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              User
            </a>
          </Link>
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}
