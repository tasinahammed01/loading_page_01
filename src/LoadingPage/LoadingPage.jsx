import { useEffect, useState } from "react";
import Loadingg from "./Loadingg";

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Banner, setBanner] = useState(true);

  useEffect(() => {
    // Add a delay of 2500ms (2.5 seconds) before hiding the loading and showing the banners
    setTimeout(() => {
      setIsLoading(false);

      // Add a delay of 1000ms (1 second) before hiding the right banner
      setTimeout(() => {
        setBanner(false);
      }, 1000);
    }, 2500);
  }, []);

  return (
    <div className="flex">
      {isLoading ? (
        <Loadingg />
      ) : (
        <div
          className={`flex absolute bg-slate-800 w-full h-[100vh] ${
            Banner ? "opacity-100" : "opacity-0"
          } transition duration-1000`}
        ></div>
      )}
    </div>
  );
};

export default LoadingPage;
