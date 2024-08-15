import http from "@/utils/http";

const userApiRequest = {
  getMyProfile: (accessToken: string, id: string) =>
    http.get(`/user/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
};

export default userApiRequest;
