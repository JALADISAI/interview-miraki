import { BASE_URL } from "../config"

export const getUserInfo = async (data) => {
    const res = await fetch(`${BASE_URL}/user/login`, {
        body: JSON.stringify(data),
        method: `post`,
        headers: {
            "Content-Type": "application/json",
        }
    });
    const result = await res.json();
    return result
}