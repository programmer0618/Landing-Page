import {
  iphone,
  mobile5,
  mobile6,
  mobile7,
  notab,
  play,
  vector,
} from "../assets";

const QrCode = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row md:h-[1100px] h-auto ">
        <div className="md:[w-50%] w-[100%]">
          <div className="bg2-mission h-[400px] w-[100%] relative right-[35px] pl-10">
            <h1 className="text-[30px] md:text-[50px] flex items-end font-extrabold bg2-mission-2 h-[100%] relative right-[35px] pl-10">
              QR code
            </h1>
          </div>
          <p className="sm:w-[50%] w-[100%] mt-5">
            No more conflict situations due to wrong order. The guest selects
            the positions, and after that an individual QR code of his order is
            generated
          </p>
          <div className="flex flex-col ss:flex-row items-center justify-start mt-10 gap-5">
            <img src={iphone} alt="icloud" />
            <img src={play} alt="play" />
          </div>
        </div>
        <div className="bg-mission-2 ">
          <div className="md:[w-50%] w-[100%] md:top-[-100px] relative flex md:bg3-mission bg3-mission2 pt-[150px] md:flex-row justify-center items-center flex-col gap-0 xs:gap-20 md:h-[500px] h-auto">
            <img
              src={mobile5}
              alt="img2"
              className="relative md:w-[50%] xs:w-[100%] w-[300px] md:right-[150px] md:top-[100px] h-[600px]"
            />
            <img
              src={mobile6}
              alt="img3"
              className="relative md:w-[50%] xs:w-[100%] w-[300px] h-[600px] md:top-[500px] md:right-[200px]"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse ss:flex-col py-[30px]">
        <div className="flex w-100% relative ss:justify-center pb-40 pt-10 bgqr">
          <div className="flex justify-between w-[100%] absolute">
            <div className="flex flex-col gap-[100px]">
              <img src={notab} alt="notab" />
              <img src={notab} alt="notab" />
            </div>
            <div className="flex flex-col gap-[100px]">
              <img src={notab} alt="notab" />
              <img src={notab} alt="notab" />
            </div>
          </div>
          <div className="flex gap-10 ss:items-center items-end relative w-[100%]">
            <img
              src={mobile7}
              alt="moblie7"
              className="w-[300px] mx-auto z-10"
            />
            <div className="flex flex-col absolute sm:top-[200px] right-0 md:right-[100px] lg:right-[200px] xl:right-[400px] z-20 bottom-[-100px] xs:bottom-0">
              <img
                src={vector}
                alt="vector"
                className="rotate-[25deg] ss:rotate-0"
              />
              <div className="font-bold">Scan QR-code</div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-between justify-center flex-col md:flex-row items-center ss:border border-none">
          <h1 className="text-[26px] md:text-[50px] font-bold">
            Generate your QR-code
          </h1>
          <p className="w-[90%] text-center mx-auto">
            The guest QR code is scanned by the staff and automatically sent
          </p>
        </div>
      </section>
    </div>
  );
};

export default QrCode;
