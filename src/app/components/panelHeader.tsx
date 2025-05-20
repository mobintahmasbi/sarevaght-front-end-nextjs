import Image from "next/image";
import Link from "next/link";
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
            <li className="me-4 cursor-pointer">
              <Link href={"/panel/dayli-reports"}>گزارش روزانه</Link>
            </li>
            <li className="me-4 cursor-pointer">
              <Link href={"/panel/customer-list"}>مدیریت مشتری ها</Link>
            </li>
            <li className="me-4 cursor-pointer">
              <Link href={"/panel/plans"}>پلن ها</Link>
            </li>
            <li className="me-4 cursor-pointer">
              <Link href={"/panel/set-timing"}>شیفت های کاری</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={"/panel/support"}>پشتیبانی</Link>
            </li>
          </ul>
        </div>
        <Link href={"/panel/setting"}>
          <Image
            src={userIcon}
            alt="user-icon"
            className="me-4 cursor-pointer"
          />
        </Link>
      </header>
    </>
  );
}
