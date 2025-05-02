/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  getAllCityNames,
  getAllStateNames,
  IStateName,
  sendAddressInfo,
} from "../utils/adjustAddress.functionality";

type AdjustAddressType = {
  hideWindow: () => void;
};

export default function AdjustAddress({ hideWindow }: AdjustAddressType) {
  const [stateList, setStateList] = useState<IStateName[]>([]);
  const [cityList, setCityList] = useState<string[]>([]);
  const [activeChooser, setActiveChooser] = useState("state");
  const [page, setPage] = useState(1);
  const [addressState, setAddressState] = useState({
    state: "",
    city: "",
    detail: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (activeChooser == "city") {
      getAllCityNames(router, setCityList, addressState);
    }
  }, [activeChooser]);

  useEffect(() => {
    getAllStateNames(router, setStateList);
  }, []);

  const stateListOption = stateList.map((v) => {
    return (
      <div
        key={v._id}
        className={`w-full py-2 ps-4 font-bold ${
          addressState.state === v.province ? "bg-gray-300" : null
        }`}
        onClick={() =>
          setAddressState((prevState) => {
            return {
              ...prevState,
              state: v.province,
            };
          })
        }
      >
        {v.province}
      </div>
    );
  });

  const cityListOption = cityList.map((v) => {
    return (
      <div
        key={v}
        className={`w-full py-2 ps-4 font-bold ${
          addressState.city === v ? "bg-gray-300" : null
        }`}
        onClick={() =>
          setAddressState((prevState) => {
            return {
              ...prevState,
              city: v,
            };
          })
        }
      >
        {v}
      </div>
    );
  });

  return (
    <>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center sm:px-0 px-4"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.35)",
        }}
      >
        <div className="sm:w-sm w-full rounded-[15px] bg-white">
          <div className="w-full bg-main-blue text-center text-white py-3 rounded-t-[15px] font-bold sm:text-[18px]">
            تنظیم آدرس
          </div>
          {page === 1 ? (
            <>
              <div className="w-full my-4 flex items-center justify-between flex-wrap px-4">
                <div
                  className={`main-border px-4 py-2 rounded-[4px] w-[45%] text-center font-bold cursor-pointer ${
                    activeChooser === "state" ? "bg-gray-300" : null
                  }`}
                  onClick={() => setActiveChooser("state")}
                >
                  انتخاب استان
                </div>
                <div
                  className={`main-border px-4 py-2 rounded-[4px] w-[45%] text-center font-bold cursor-pointer ${
                    activeChooser === "city" ? "bg-gray-300" : null
                  }`}
                  onClick={() => {
                    if (addressState.state != "") {
                      setActiveChooser("city");
                    }
                  }}
                >
                  انتخاب شهر
                </div>
              </div>
              <div className="w-full my-4 px-4">
                <div className="main-border h-[250px] rounded-[15px] overflow-y-scroll">
                  {activeChooser === "state" ? stateListOption : cityListOption}
                </div>
              </div>
              <div className="w-full px-4 mb-3">
                <button
                  className="w-full bg-main-blue text-white py-2 rounded-[15px] font-bold cursor-pointer"
                  onClick={() => {
                    if (addressState.state != "" && addressState.city != "") {
                      setPage(2);
                    }
                  }}
                >
                  صفحه بعد
                </button>
              </div>
            </>
          ) : null}
          {page === 2 ? (
            <>
              <div className="w-full px-4">
                <textarea
                  name="address-detail"
                  id="Address-detail"
                  placeholder="جزئیات آدرس"
                  className="w-full main-border my-4 rounded-[4px] p-2 h-[100px]"
                  onChange={(e) => {setAddressState((prevState) => {
                        return {
                          ...prevState,
                          detail: e.target.value
                        }
                  })}}
                  value={addressState.detail}
                />
              </div>
              <div className="w-full px-4 mb-3">
                <button
                  className="w-full bg-main-blue text-white py-2 rounded-[15px] font-bold cursor-pointer"
                  onClick={() => {
                    if (addressState.state != "" && addressState.city != "") {
                      setPage(1);
                    }
                  }}
                >
                  صفحه قبل
                </button>
              </div>
              <div className="w-full px-4 mb-3">
                  <button className="w-full bg-light-green dark-green font-bold py-2 rounded-[15px] cursor-pointer" onClick={() => {
                    sendAddressInfo(addressState, router).then((v) => {
                      if(v) {
                        hideWindow()
                      }
                    })
                  }}>
                    ثبت آدرس
                  </button>
              </div>
            </>
          ) : null}
          <div className="w-full px-4 mb-4">
            <button
              className="w-full bg-light-red text-white py-2 rounded-[15px] main-red font-bold cursor-pointer"
              onClick={() => hideWindow()}
            >
              بستن صحفه
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
