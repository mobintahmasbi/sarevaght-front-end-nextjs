import axios from "axios"
import { WorkSchedule } from "./dayType"

export default async function sendWorkScheduleData(TimingState: Partial<WorkSchedule>) {
    const token = localStorage.getItem('token')
    if(token === null) {
        return null
    }
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/business/set-Times`, {
            ...TimingState,
            token
        })
        const { data } = response
        if(data.status) {
            alert('اطلاعات شما با موفقیت بروز شد.')
            return null
        }
        alert('اطلاعات شما تغییری نکرده است')
        return null

    } catch (error) {
        if(axios.isAxiosError(error)) {
            alert('اتفاقی غیر منتظره رخ داده است لطفا دوباره تلاش کنید')
        }
        console.log(error);
        return null
    }
}