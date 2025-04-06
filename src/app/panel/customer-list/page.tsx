import PanelHeader from "@/app/components/panelHeader";

export default function CustomerList() {
  return (
    <>
      <PanelHeader />
      <div className="w-full sm:px-5 px-3 my-5">
        <div className="w-full main-border main-shadow py-1 rounded-[15px]">
          <div className="w-full p-4">
            <div className="ms-2 mb-2 font-bold">مدیریت مشتری ها</div>
            <hr className="secondary-border" />
          </div>
          <div className="w-full sm:px-5 px-2 pb-3">
            <table className="w-full border-collapse sm:table-fixed table-auto">
              <thead>
                <tr>
                  <th>نام</th>
                  <th className="sm:table-cell hidden">شماره تلفن</th>
                  <th className="sm:table-cell hidden">آخرین بازدید</th>
                  <th>جزئیات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>مبین طهماسبی اصل</td>
                  <td className="sm:table-cell hidden">09035083850</td>
                  <td className="sm:table-cell hidden">16 / 02 / 1404</td>
                  <td>
                    <button className="bg-main-blue text-white px-4 py-2 rounded-[4px] cursor-pointer">
                        جزئیات
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
