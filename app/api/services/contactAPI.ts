import { quertTypes } from "@/types";
import Axios from "../axios";

export const sendQuery = async ({ first_name, last_name, email, message,receiver_comm_message, store_data}: quertTypes) => {
    const payload = {
        first_name,
        last_name,
        email,
        message,
        receiver_comm_message,
        store_data
    }
    const { data } = await Axios.post("/query", payload);
    return data;
}