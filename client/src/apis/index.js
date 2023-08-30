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

export const getAllTasks = async () => {
    const res = await fetch(`${BASE_URL}/tasks/list`);
    const data = await res.json();
    return data
}

export const getTaskById = async (id) => {
    const res = await fetch(`${BASE_URL}/task/${id}`);
    const data = await res.json();
    return data
}

export const updateTaskById = async (body) => {
    const res = await fetch(`${BASE_URL}/task/${body.id}`, {
        body: JSON.stringify(body),
        method: `put`,
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    return data
}

export const createTask = async (body) => {
    const res = await fetch(`${BASE_URL}/task/add`, {
        body: JSON.stringify(body),
        method: `post`,
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    return data
}

export const delTaskById = async (id) => {
    const res = await fetch(`${BASE_URL}/task/${id}`, {
        method: `delete`,
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await res.json();
    return data
}

