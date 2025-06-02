import React from "react";
import {
  MapPin,
  Clock,
  Phone,
  Facebook,
  Twitter,
  Mail,
  Linkedin,
} from "lucide-react";

const TopBar = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div
      className={`text-white py-[12px] text-[14px] bg-black/30 transition-all duration-300 ${
        isScrolled ? "opacity-0 h-0 py-0 overflow-hidden" : "opacity-100"
      }`}
    >
      <div className="max-w-[1170px] mx-auto px-[16px]">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Info */}
          <div className="hidden lg:flex flex-wrap items-center space-x-[24px]">
            <div className="flex items-center space-x-[8px]">
              <MapPin className="h-[16px] w-[16px] text-primary" />
              <span>Collins Street West, Victoria 8007 Australia</span>
            </div>
            <div className="flex items-center space-x-[8px]">
              <Clock className="h-[16px] w-[16px] text-primary" />
              <span>Monday - Friday 08:00-16:00</span>
            </div>
            <div className="flex items-center space-x-[8px]">
              <Phone className="h-[16px] w-[16px] text-primary" />
              <span>1800 899 900</span>
            </div>
          </div>

          {/* Right Info */}
          <div className="flex items-center space-x-[20px] ml-auto">
            {/* Social Icons */}
            <div className="flex items-center gap-[20px]">
              <Facebook className="h-[16px] w-[16px] hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-[16px] w-[16px] hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-[16px] w-[16px] hover:text-primary cursor-pointer transition-colors" />
              <Mail className="h-[16px] w-[16px] hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
