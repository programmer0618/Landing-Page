import Input from "../ui/input";
import Textarea from "../ui/textarea";

const Forms = () => {
  return (
    <section className="w-full sm:w-[80%] mx-auto p-[30px] formpng">
      <div className="mb-[30px] sm:mb-[50px]">
        <h1 className="text-[26px] md:text-[50px] font-bold text-center">
          Get In Touch
        </h1>
        <p className="max-w-[450px] text-[15px] mx-auto">
          Have questions about Noble or just want to say hello? Drop us a line
          and a member of our team will getback to you shortly.
        </p>
      </div>
      <form onLoad={false} className="mx-auto max-w-[830px] flex flex-col">
        <Input placeholder={"Name"} name={"name"} />
        <Input placeholder={"Venue Name"} name={"name2"} />
        <div className="flex w-full gap-3">
          <Input placeholder={"Venue City"} name={"city"} />
          <Input placeholder={"State City"} name={"city2"} />
        </div>
        <Input placeholder={"Email"} name={"email"} type="email" />
        <Input placeholder={"Subject"} name={"subject"} type="text" />
        <Textarea placeholder={"Message"} name={"message"} />
        <button
          type="button"
          className="font-montserrat p-[10px] border rounded-lg ss:w-[300px] w-full mx-auto mt-[10px] font-bold tracking-[1px]"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Forms;
