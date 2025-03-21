import Image from "next/image";
import userIcon from "../../../public/user-icon.png";
import Menu from "./menu";

export default function PanelHeader() {
  return (
    <>
      <header className="w-full h-16 bg-main-blue flex items-center justify-between">
        <div className="flex items-center h-full">
          <Menu menuType="panel" />
          <div className="font-bold text-white text-xl flex items-center ms-5 cursor-pointer">
            سروقت
          </div>
          <ul className="hidden sm:flex text-white text-[15px] list-none ms-5">
            <li className="me-4 cursor-pointer">گزارش روزانه</li>
            <li className="me-4 cursor-pointer">لیست مشتری ها</li>
            <li className="me-4 cursor-pointer">پلن ها</li>
            <li className="me-4 cursor-pointer">شیفت های کاری</li>
            <li className="me-4 cursor-pointer">پشتیبانی</li>
          </ul>
        </div>
        <Image src={userIcon} alt="user-icon" className="me-4 cursor-pointer" />
      </header>
    </>
  );
}
