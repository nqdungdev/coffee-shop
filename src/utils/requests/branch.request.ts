import http from "@/utils/http";

const branchApiRequest = {
  getBranchList: () => http.get<any>("/branch"),
};

export default branchApiRequest;
