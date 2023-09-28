import Image from "next/image";
import logo from "@/public/images/logo.svg";

const Logo = () => {
  return <Image src={logo} height={130} alt="logo" />;
};

export default Logo;
