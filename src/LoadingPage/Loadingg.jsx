import { Hourglass } from "react-loader-spinner";

const Loadingg = () => {
    return (
        <div className=" absolute bg-slate-800 w-full h-[100vh]">
        <h1 className=" flex animate-pulse text-6xl font-medium text-white pt-[40vh] lg:pl-[42%] md:pl-[30%] pl-[10%]">
          Loading{" "}
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#306cce", "#72a1ed"]}
          />{" "}
        </h1>
      </div>
    );
};

export default Loadingg;
