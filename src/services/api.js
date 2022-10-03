import axios from "axios";
import { toast } from "react-toastify";
import env from "react-dotenv";

console.log("ENV ::::::::", env.REACT_APP_BASE_URL);

const apiClient = axios.create({
  baseURL: env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
const requestHandler = async (request) => {
  let token = localStorage.getItem("authToken")
    ? localStorage.getItem("authToken")
    : null;
  request.headers.Authorization = token;
  return request;
};

apiClient.interceptors.request.use(
  (request) => requestHandler(request),
  (err) => {
    return Promise.reject(err);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    console.log("response.status ::::", response.status, response.data);

    if (response.data.data.token) {
      localStorage.setItem("authToken", response.data.data.token);
    }

    if (response.data.isBan) {
      toast.error("User is banned ☠️");
      localStorage.removeItem("authToken");
      document.location.href = "/?msg=User is banned";
    }
    if (
      !response.data.stravaLinked &&
      response.data.stravaLinked != undefined
    ) {
      toast.error("User is stravaLinked ☠️");
      document.location.href =
        "http://www.strava.com/oauth/authorize?client_id=90770&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read,read_all,profile:read_all,activity:read,activity:read_all";
      // document.location.href = "/?msg=Link strava";
    }

    if (
      !response.data.onBoardingQue &&
      response.data.onBoardingQue != undefined
    ) {
      toast.error("User is Profile Completion is Pending ☠️");
      document.location.href = "http://localhost:3000/qna";
      // document.location.href = "/?msg=Link strava";
    }

    if (response.status === 200 || response.status === 201) {
      if (response.data.error) {
        toast.error(response.data.msg);
      }
      return Promise.resolve(response);
    } else {
      if (response.data.error) {
        toast.error(response.data.msg);
      }
      return Promise.reject(response);
    }
  },
  (error) => {
    console.log(
      "response.status :::: ERROR :::",
      error.response.data.msg,
      error.response.status,
      error.response.data
    );

    if (
      !error.response.data.stravaLinked &&
      error.response.data.stravaLinked != undefined
    ) {
      toast.error("User is stravaLinked ☠️");
      document.location.href =
        "http://www.strava.com/oauth/authorize?client_id=90770&response_type=code&redirect_uri=http://localhost:3000/exchange_token&approval_prompt=force&scope=read,read_all,profile:read_all,activity:read,activity:read_all&update=true";
      // document.location.href = "/?msg=Link strava";
    }

    if (!error.isAxiosError && !error.response) {
      toast.error(error.response.data.msg);
      return Promise.reject(error.response.data);
    }
    if (error.response.status == 500) {
      if (error.response.config.url.indexOf("member") > -1) {
        return Promise.reject(error.response.data);
      } else {
        toast.error(error.response.data.msg);
        return Promise.reject(error.response);
      }
    } else {
      toast.warning(error.response.data.msg);
      return Promise.reject(error.response);
    }
  }
);
export default apiClient;
