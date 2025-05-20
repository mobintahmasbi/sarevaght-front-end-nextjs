import axios from "axios";

export async function getBusinessInfo(businessName: string) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/appointment/business-info`,
      {
        businessName,
      }
    );
    const { data } = response;
    if (data.status === 403 || data.status === true) {
      let bstatus = '';
      let backGroundColor = ''
      const { businessInformation } = data;
      if (data.bstatus == "not-active") {
        bstatus = "غیر فعال";
        backGroundColor = 'main-gray';
      }
      if (data.bstatus == "closed") {
        bstatus = "بسته است";
        backGroundColor = 'main-red';
      }
      if (data.bstatus == "open") {
        bstatus = "باز است";
        backGroundColor = 'dark-green';
      }
      return {
        businessName: businessInformation.Name,
        bstatus,
        phoneNumber: businessInformation.phoneNumber,
        ownerFullName: businessInformation.fullName,
        address: `${businessInformation.address.state} - ${businessInformation.address.city} - ${businessInformation.address.detail}`,
        backGroundColor
      };
    }
    if (data.status === 404) {
      return {
        businessName: "نامشخص",
        bstatus: "کسب و کاری با آدرس وارد شده پیدا نشد",
        phoneNumber: "نامشخص",
        ownerFullName: "نامشخص",
        address: "نامشخص",
        backGroundColor : 'main-gray'
      };
    }
    return {
        businessName: "نامشخص",
        bstatus: "کسب و کاری با آدرس وارد شده پیدا نشد",
        phoneNumber: "نامشخص",
        ownerFullName: "نامشخص",
        address: "نامشخص",
        backGroundColor : 'main-gray'
      };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.status === 403) {
        alert("شما مجوز دسترسی به این پنل را ندارید");
      }
      if (error.status === 500) {
        alert("مشکلی غیر منتظره پیش آمده لطفا دوباره تلاش کنید");
      }
    }
    console.log(error);
    return {
        businessName: "نامشخص",
        bstatus: "مشکلی پیش آمده لطفا دوباره تلاش کنید",
        phoneNumber: "نامشخص",
        ownerFullName: "نامشخص",
        address: "نامشخص",
        backGroundColor : 'main-gray'
      };
  }
}
