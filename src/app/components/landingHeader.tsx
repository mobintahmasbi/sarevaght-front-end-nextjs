import Link from "next/link";
import Menu from "./menu";

export default function LandingHeader() {
  return (
    <>
      <header className="w-full bg-main-blue h-16 flex items-center justify-between">
        <div className="flex items-center h-full">
          <Menu />
          <div className="font-bold text-white text-xl flex items-center sm:ms-5 cursor-pointer">
            سروقت
          </div>
          <ul className="hidden sm:flex text-white text-[15px] list-none ms-5">
            <li className="me-4 cursor-pointer">درباره ما</li>
            <li className="me-4 cursor-pointer">پشتیبانی</li>
            <li className="cursor-pointer">همکاری در فروش</li>
          </ul>
        </div>
        <div className="h-full flex items-center">
          <Link className="bg-main-orange text-[15px] text-white py-3 px-4 text-center rounded-[15px] me-4 cursor-pointer" href={'/phone-entry'}>
            ثبت نام - ورود
          </Link>
        </div>
      </header>
    </>
  );
}
