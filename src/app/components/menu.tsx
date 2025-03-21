"use client";
import Image from "next/image";
import menuIcon from "../../../public/menu-icon.png";
import { useState, useRef, useEffect } from "react";

export default function Menu({ menuType }: { menuType: "landing" | "panel" }) {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef<HTMLUListElement | null>(null);
  const menuItems = {
    landing: [
      {
        title: "درباره ما",
        link: "/about-us",
        liKey: "lml-li-1",
        hrKey: "lml-hr-1",
      },
      {
        title: "پشتیبانی",
        link: "/support",
        liKey: "lml-li-2",
        hrKey: "lml-hr-2",
      },
      {
        title: "همکاری در فروش",
        link: "/sales",
        likey: "lml-li-3",
        hrKey: null,
      },
    ],
    panel: [
      {
        title: "گزارش روزانه",
        link: "/daily-report",
        likey: "pmp-li-1",
        hrKey: "pmp-hr-1",
      },
      {
        title: "لیست مشتری ها",
        link: "/customers-list",
        likey: "pmp-li-2",
        hrKey: "pmp-hr-2",
      },
      { title: "پلن ها", link: "/plans", likey: "pmp-li-3", hrKey: "pmp-hr-3" },
      {
        title: "شیفت های کاری",
        link: "/shifts",
        likey: "pmp-li-4",
        hrKey: "pmp-hr-4",
      },
      { title: "پشتیبانی", link: "/support", likey: "pmp-li-5", hrKey: null },
    ],
  };

  useEffect(() => {
    if (showMenu && ulRef.current) {
      ulRef.current.focus();
    }
  }, [showMenu]);

  return (
    <div>
      <Image
        src={menuIcon}
        alt="menu-icon"
        className="sm:hidden w-9 h-9 mx-2"
        onClick={() => setShowMenu((prev) => !prev)}
      />
      {showMenu && (
        <ul
          ref={ulRef}
          tabIndex={0}
          onBlur={() => setShowMenu(false)}
          className="absolute top-16 right-0 w-full bg-main-blue text-white text-[15px] list-none p-4 focus:outline-none z-20"
        >
          {menuItems[menuType].map((item) => (
            <>
              <li key={item.likey} className="text-center cursor-pointer">
                {item.title}
              </li>
              {item.hrKey && (
                <hr key={item.hrKey} className="border-white my-2" />
              )}
            </>
          ))}
        </ul>
      )}
    </div>
  );
}
