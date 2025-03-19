"use client";
import React, { useRef, useState } from "react";

const VerifyCodeEntry: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return; // Allow only single digit numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input if a digit is entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ display: "flex", gap: "8px" }} className="flex-row-reverse">
      {otp.map((digit, index) => (
        <input
          key={index}
          dir="ltr"
          type="text"
          autoFocus={index === 0}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          maxLength={1}
          className="w-full rounded-[15px] px-4 sm:h-[60px] h-[52px] secondary-border bg-milky text-[15px] text-center focus:outline-none font-bold dark-white phone-entry"
        />
      ))}
    </div>
  );
};

export default VerifyCodeEntry;
