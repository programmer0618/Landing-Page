import { mobile8, mobile9, scren } from "../assets";

const Order = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col w-full ss:w-[60%] sm:text-center ss:mb-[40px] mb-[100px]  text-start float-end">
        <h1 className="text-[26px] md:text-[45px] font-bold">
          Easier ordering. <br />
          Happier Guests.
        </h1>
        <p>NoTab makes it simple for patrons to easily</p>
      </div>
      <div className="w-full relative h-[800px] ss:h-auto">
        <img src={mobile8} alt="mobile8" className="mx-auto mt-[40px] z-0" />
        <div className="flex flex-col gap-[200px] absolute z-10 top-[30%] left-[40%]">
          <div className="flex flex-col ">
            <div className="max-w-[220px] border rounded-lg p-[10px] text-center bg-black relative sm:right-[300px] md:right-[400px] right-[150px] top-[-100px]">
              No more lost or forgotten credit cards
            </div>
            <div className="max-w-[220px] border rounded-lg p-[10px] text-center bg-black relative sm:right-[-100px]">
              No more lost or forgotten credit cards
            </div>
          </div>
          <div className="flex flex-col gap-[5px] relative top-[-100px]">
            <div className="max-w-[220px] border rounded-lg p-[10px] text-center bg-black relative right-[-70px] w-[150px] ss:right-[-200px]">
              No more split your tab
            </div>
            <div className="max-w-[220px] border rounded-lg p-[10px] text-center bg-black relative w-[150px] right-[100px] lg:right-[300px]">
              Skip the line
            </div>
          </div>
        </div>
      </div>
      <div className="bg-notab h-[1000px] ss:block hidden">
        <div className="relative flex justify-center items-center h-full">
          <img src={mobile9} alt="moblie9" className="z-0" />
          <img
            src={scren}
            alt="screen"
            className="z-10 absolute md:w-auto w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Order;
