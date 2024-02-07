import {
  int1,
  int2,
  int3,
  int4,
  int5,
  int6,
  int7,
  mobile,
  mobile2,
  mobile3,
  mobile4,
} from "../assets";

const Mission = () => {
  return (
    <div>
      <section className="flex flex-col-reverse justify-center items-center ss:flex-row gap-10">
        <div className="overflow-hidden sm:w-[60%] w-[100%]">
          <img
            src={mobile2}
            alt="mobile2"
            className="ss:block hidden w-[400px] h-[400px] object-cover md:w-[700px] md:h-[700px] "
          />
          <div className="sm:w-100% overflow-hidden">
            <img
              src={mobile}
              alt="mobile1"
              className="ss:hidden block object-cover w-[500px] h-[600px] mx-auto "
            />
          </div>
        </div>
        <div className="overflow-hidden sm:w-[60%] w-[100%]">
          <h1 className="text-[25px] md:text-[56px] leading-[30px] md:leading-[50px] font-semibold">
            Our mission <br className="ss:block hidden" /> and vision
          </h1>
          <p className="sm:mt-[20px] mt-[10px] max-w-[400px]">
            While technology is our sweet spot, we've developed our vision
            alongside our customers to ensure your everyday problems are solved
            through simplistic tools. And as your business grows, we'll grow
            right alongside with you.
          </p>
        </div>
      </section>
      <section className="relative">
        <div className="bg-mission h-[500px] w-[100%] z-0 absolute top-0 right-0">
          <div className="bg-mission-2  w-[100%] h-[100%]"></div>
        </div>
        <div className="flex flex-col-reverse z-10 relative md:flex-row md:gap-5 gap-20 items-end">
          <div className="flex md:justify-start gap-10 md:w-[50%] w-[100%] justify-center object-cover ss:flex-row flex-col items-center">
            <img src={mobile3} className="ss:w-[40%] w-[80%]" alt="mobile3" />
            <img src={mobile4} className="ss:w-[40%] w-[80%]" alt="mobile4" />
          </div>
          <div className="w-[100%] md:w-[50%] md:pb-[40px] pb-0">
            <h1 className="text-[30px] md:text-[50px] font-extrabold">
              ID Scanner
            </h1>
            <p className="sm:w-[60%] w-[100%]">
              Scan, verify, and collect data on each person that walks through
              your door to humanize your data. You also get a digital 86 list as
              well as a citywide ban list to keep your venue safe.
            </p>
          </div>
        </div>
      </section>
      <section className="flex md:flex-row flex-col relative z-10 md:mt-[150px] mt-[100px] md:gap-[20px] gap-[100px] h-auto mb-[100px]">
        <div className="md:w-[50%] w-[100%]">
          <h1 className="text-[30px] md:text-[50px] font-bold">
            BI Tool Integration
          </h1>
          <p className="ss:w-[80%] w-[100%] text-16px font-natoSans">
            We use Business Intelligence Tool that allows you to be updated what
            is happening in your business just by one click. Track revenue and
            profit by one click.
          </p>
        </div>
        <div className="flex md:w-[50%] w-[100%] relative md:h-[500px] h-[400px] ss:right-0 right-[200px] ">
          <img
            src={int1}
            alt="int1"
            className="relative top-[-100px] right-[-200px] w-[200px] h-[200px]"
          />
          <img
            src={int2}
            alt="int2"
            className="relative w-[200px] h-[200px] top-0 right-[150px]"
          />
          <img
            src={int3}
            alt="int3"
            className="relative w-[150px] h-[200px] top-[80px] right-[0px]"
          />
          <img
            src={int4}
            alt="int4"
            className="relative w-[200px] h-[200px] top-[150px] right-[600px]"
          />
          <img
            src={int5}
            alt="int5"
            className="relative w-[200px] h-[200px] top-[200px] z-10 right-[560px]"
          />
          <img
            src={int6}
            alt="int6"
            className="relative w-[200px] h-[200px] top-[300px] right-[850px]"
          />
          <img
            src={int7}
            alt="int7"
            className="relative w-[300px] h-[200px] top-[320px] right-[800px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Mission;
