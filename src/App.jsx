import Footer from "./components/footer";
import Forms from "./components/form";
import Header from "./components/header";
import Mission from "./components/mission";
import Order from "./components/order";
import QrCode from "./components/qrcode";

const App = () => {
  return (
    <div className="bg-bgBlack">
      <div className="max-w-[2000px] bg-bgBlack mx-auto text-white py-1 lg:px-[100px] ss:px-[60px] px-[20px] overflow-hidden">
        <Header />
        <Mission />
        <QrCode />
        <Order />
        <Forms />
        <Footer />
      </div>
    </div>
  );
};

export default App;
