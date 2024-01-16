import  AxiosInstance  from "../configs/axiosInstance";

export const FetchToken = (access_token) => {

    AxiosInstance.post('/auth/convert-token',{
        "token":access_token,
        "backend":"google-oauth2",
        "grant_type":"convert_token",
        "client_id":"knNwVoqdcqMVx5yBLV9z0MfRJzQvsqdA6mkL96lc",
        "client_secret":"Qm8fSzJOe8f4z4GsnmL61OEgvI9RAc6YwMeKbCpGH5OS6JjBrtN116mfiGD0JdKgHWfG4ZM8lClrfkTG6n4CiuLTbamTL29bbovzfsIdah3Sb1rQqIOOPYf3QtJm6uFB",
    })
    .then((res)=>{
      console.log(res);
      localStorage.setItem('accessToken',res.data.access_token);
      localStorage.setItem('refreshToken',res.data.refresh_token);
    }).catch((error) => {
        console.error('Error:', error.response || error.message);
      });

} 