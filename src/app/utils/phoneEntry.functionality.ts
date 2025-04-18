import axios from "axios"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export function phoneNumberValidator(PhoneNumber: string): boolean {
    const phoneNumberValidation = /^09\d{9}$/.test(PhoneNumber.trim())
    return phoneNumberValidation
}

export async function sendPhoneNumber(phoneNumber: string, router: AppRouterInstance) {
    const phoneNumberValidation = phoneNumberValidator(phoneNumber)
    if(!phoneNumberValidation) {
        alert('شماره تلفن باید با 09 شروع شود و شامل 11 شماره باشد')
        return null
    }
    const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/otp/send`, {
        phoneNumber
    })
    const { status } = response
    const { data } = response
    if(status == 500 || data == null || data.status == 500) {
        alert('یک مشکل غیر منتظره رخ داده لطفا دوباره تلاش کنید')
        return null
    }
    if(data.status == 400) {
        router.push('/verify-code')
        return null
    }
    if(data.status == 201) {
        localStorage.clear()
        localStorage.setItem('otpCreationDetail', JSON.stringify({
            phoneNumber, creationTime: Date.now()
        }))
        router.push('/verify-code')
        return null
    }

    alert('something impossible just happened')
    return null
}