import { MapPinHouse, User } from "lucide-react";
import { Button } from "../ui/button";

const Promotion = () => {
  return (
    <div className="flex justify-between bg-black items-center px-8">
      <div>
        
      </div>
      <div className="bg-red-600 px-2 my-1">
      <h2 className="">Get 10% off your first purchase!</h2>
      <p>Use code FIRST10 at checkout.</p>
    </div>
    <div >
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-white/10 text-white cursor-pointer"
      >
       
        <User className="w-5 h-5 " />
        <span className="sr-only">Account</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="hover:bg-white/10 text-white cursor-pointer"
      >
        <MapPinHouse  className="w-5 h-5" />
        <span className="sr-only">location</span>
      </Button>
    </div>
    </div>
  );
};

export default Promotion;