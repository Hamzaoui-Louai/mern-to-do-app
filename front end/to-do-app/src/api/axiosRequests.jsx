import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
})

export async function getRequest(url)
{
    const data = await api.get(url)
    console.log(data)
    return data;
}

export async function postRequest(url,body)
{
    const data = await api.post(url,body)
    return data;
}

export async function putRequest(url,body)
{
    const data = await api.put(url,body)
    return data;
}

export async function patchRequest(url,body)
{
    const data = await api.patch(url,body)
    return data;
}

export async function deleteRequest(url,body)
{
    const data = await api.delete(url,body)
    return data;
}