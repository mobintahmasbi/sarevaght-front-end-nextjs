"use client";
import Image from "next/image";
import menuIcon from '../../../public/menu-icon.png';
import { useState, useRef, useEffect } from "react";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef<HTMLUListElement | null>(null);

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
        onClick={() => setShowMenu(prev => !prev)}
      />
      {showMenu && (
        <ul
          ref={ulRef}
          tabIndex={0}
          onBlur={() => setShowMenu(false)}
          className="absolute top-16 right-0 w-full bg-main-blue text-white text-[15px] list-none p-4 focus:outline-none"
        >
          <li className="cursor-pointer w-full text-center">درباره ما</li>
          <hr className="border-white my-2" />
          <li className="cursor-pointer w-full text-center">پشتیبانی</li>
          <hr className="border-white my-2" />
          <li className="cursor-pointer w-full text-center">همکاری در فروش</li>
        </ul>
      )}
    </div>
  );
}
