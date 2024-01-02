import emailjs from "@emailjs/browser";

export const actionSendEmail = async (data: any) =>
  await emailjs.send(
    "service_mf0t7ue",
    "template_y99r5od",
    data,
    "vlpX08JUqln2ZSQ_Z",
  );
