import instance from "../axios";

const groups = ["109256395255187270"];

export const actionAddSubscriber = async (email: string) => {
  const response = await instance.post("subscribers", {
    email,
    groups,
  });
  return response;
};
