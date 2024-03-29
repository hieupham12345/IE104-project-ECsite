import axios from "axios";

export const axiosJWT = axios.create()

export const loginUser = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, data)
    return res.data
}

export const getDetailUser = async (id,access_token) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/get-detail-user/${id}`,{
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const refreshToken = async (refresh_token) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {} , {
        headers: {
            token: `Bearer ${refresh_token}`,
        }
    })
    return res.data
}

export const userSignup = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data)
    return res.data
}

export const getAllUser = async (access_token) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/get-all-user`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getProvinces = async () => {
    const res = await axios.get('https://provinces.open-api.vn/api/?depth=3')
    return res.data
}

export const updateUser = async (id, access_token, data) => {
    const res = await axios.put(`${process.env.REACT_APP_API_URL}/user/update-user/${id}`, data, {
      headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}