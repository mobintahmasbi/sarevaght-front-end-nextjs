import PanelHeader from "@/app/components/panelHeader";

export default function Support() {
  return (
    <>
      <PanelHeader />
      <div className="w-full px-5 my-5">
        <div className="w-full main-shadow secondary-border rounded-[15px] pb-5">
          <div className="w-full p-4">
            <div className="ms-2 mb-2 font-bold">پشتیبانی</div>
            <hr className="secondary-border" />
          </div>
          <div className="w-full sm:flex sm:items-center sm:mb-0 px-4 justify-between">
            <div className="flex items-center ms-4 sm:mb-0 mb-2">
              <div className="me-6 font-bold">0 مکالمه باز</div>
              <div className="font-bold">0 مکالمه بسته شده</div>
            </div>
            <button className="bg-secondary-blue text-white px-4 py-2 rounded-[4px] cursor-pointer me-4">
              درخواست پشتیبانی
            </button>
          </div>
          <hr className="secondary-border mx-4 mt-3 mb-2" />
          <div className="w-full px-4">
          <table className="w-full border-collapse sm:table-fixed table-auto">
              <thead>
                <tr>
                  <th>عنوان</th>
                  <th className="sm:table-cell hidden">وضعیت</th>
                  <th className="sm:table-cell hidden">تاریخ شروع مکالمه</th>
                  <th>جزئیات</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>فعال نشدن اکانت</td>
                  <td className="sm:table-cell hidden">بسته شده</td>
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
