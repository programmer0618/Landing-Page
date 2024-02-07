import {
  ellips1,
  iphone,
  line1,
  login,
  logo,
  mobile,
  play,
  vectorbg1,
} from "../assets";

const Header = () => {
  return (
    <section>
      <nav className="flex gap-10 sm:justify-start justify-between">
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="logo" className="sm:h-auto h-[50px]" />
          <span className="font-natoSans font-extrabold sm:text-3xl text-[25px]">
            NoTab
          </span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={login} alt="login" className="sm:block hidden" />
          <span className="font-montserrat underline font-bold">Login</span>
        </div>
      </nav>
      <section className="flex items-center justify-between">
        <div className="w-[50%] h-[400px] flex flex-col justify-start md:gap-20 gap-[10px] ">
          <h1 className="font-montserrat font-extrabold py-[50px] lg:text-[56px] md:text-[46px]  text-[26px] md:w-[700px] xs:w-[300px] w-[250px]">
            A platform <br /> that works smarter
          </h1>
          <div className="flex gap-5 relative items-start">
            <img
              src={line1}
              alt="line1"
              className="ss:block hidden h-[100px] relative top-[-50px] mt-[20px]"
            />
            <img
              src={ellips1}
              alt="ellips"
              className="absolute left-[-100px] top-[-170px]"
            />
            <span className="ss:w-[380px] xs:w-[300px] w-[250px]">
              NoTab allows bars & nightclubs <br /> to manage, understand, and
              grow <br /> their business from a single dashboard
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center relative w-[50%]">
          <div className="sm:overflow-hidden overflow-auto md:h-[700px] h-[530px] z-[2] flex items-center justify-center ">
            <img
              src={mobile}
              alt="mobile1"
              className="md:h-[900px] h-[600px] md:object-none object-cover md:relative absolute md:top-0 md:left-0 top-[-5px] left-[80px] "
            />
          </div>
          <img
            src={vectorbg1}
            alt="vector"
            className="absolute right-[-100px] top-[-50px] w-[100%] h-[800px]"
          />
        </div>
      </section>
      <section className="flex w-[100%] justify-between items-center my-1 md:my-20 flex-col lg:flex-row">
        <div className="font-montserrat ss:text-[36px] text-[26px] text-center w-[100%] lg:w-[50%] font-semibold tracking-tighter">
          DOWNLOAD OUR APP
        </div>
        <div className="text-center w-[100%] lg:w-[50%] h-[100px] ss:flex-row flex-col ss:mt-0 mt-[30px] sm:overflow-hidden flex items-center justify-center ss:gap-10 gap-4">
          <img
            src={iphone}
            alt="iphone"
            className="h-[60px] cursor-pointer w-[150px]"
          />
          <img
            src={play}
            alt="google"
            className="h-[60px] cursor-pointer w-[150px]"
          />
        </div>
      </section>
      <section className="bg-[#212834] flex items-center justify-between min-h-[70px] my-8 ss:flex-row flex-col ss:gap-2 gap-4 sm:my-0 px-2 py-5 sm:py-2 sm:px-10">
        <div className="">
          We use cookie to improve your experience on our site. By using our
          site you consent cookies.
        </div>
        <button className="w-[150px] rounded-xl border p-2 bg-gray-600 active:bg-gray-600 duration-200 hover:bg-slate-500">
          Ok
        </button>
      </section>
      <section className="flex items-center py-[50px] justify-center md:gap-20 gap-[30px] w-[100%] flex-col md:flex-row">
        <div className="border rounded-xl md:w-[40%] h-[250px] flex flex-col items-start justify-evenly p-10 w-[100%]">
          <h1 className="text-[26px] font-bold">
            Would like to become a member, please contact us
          </h1>
          <a href="#" className="underline">
            support@notab.com
          </a>
        </div>
        <div className="border rounded-xl md:w-[40%] w-[100%] h-[250px] flex flex-col items-start justify-evenly p-10">
          <h1 className="text-[26px] font-bold">Already a partner?</h1>
          <a href="#" className="underline">
            Login
          </a>
        </div>
      </section>
    </section>
  );
};

export default Header;
