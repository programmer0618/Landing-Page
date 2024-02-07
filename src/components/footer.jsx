import { iphone, play } from "../assets";

const Footer = () => {
  return (
    <>
      <section className="flex w-[100%] items-center my-1 md:my-20 flex-col bgend">
        <div className="font-montserrat text-[26px] text-center w-[100%] lg:w-[50%] font-semibold tracking-tighter">
          DOWNLOAD OUR APP
        </div>
        <div className="text-center w-[100%] lg:w-[50%] h-[100px] ss:flex-row flex-col ss:mt-0 mt-[30px] sm:overflow-hidden flex items-center justify-center ss:gap-10 gap-4">
          <img
            src={iphone}
            alt="iphone"
            className="h-[60px] cursor-pointer w-[200px]"
          />
          <img
            src={play}
            alt="google"
            className="h-[60px] cursor-pointer w-[200px]"
          />
        </div>
      </section>
      <section className="w-full flex justify-between ss:flex-row flex-col-reverse text-center items-center ss:mt-[30px] mt-[50px] gap-10 bgend">
        <ul>
          <li className="font-bold font-montserrat text-center">NOTAB</li>
          <li>
            Contact us: <br className="ss:block hidden" />
            <span className="font-bold">support@notab.com</span>
          </li>
          <li>© 2020 - NoTab®</li>
        </ul>
        <div className="flex flex-col font-bold items-start">
          <span>Terms to use</span>
          <span>Privacy policy</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
