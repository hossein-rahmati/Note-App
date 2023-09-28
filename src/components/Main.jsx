import { Toaster } from "react-hot-toast";
import { useTheme } from "../context/ThemeContext";

function Main({ children }) {
  const { theme } = useTheme();
  return (
    <div className={`font-sans ${theme === "light" ? "" : "dark"}`}>
      {theme === "light" ? (
        <Toaster />
      ) : (
        <Toaster
          toastOptions={{
            duration: 3000,
            style: {
              backgroundColor: "#1f2937",
              color: "#fff",
            },
          }}
        />
      )}
      {children}
    </div>
  );
}

export default Main;
