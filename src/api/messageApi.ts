import { ComponentTypeEnum, ComponentParameterEnum } from "../types/enums";

const ACCESS_TOKEN = "";
const FROM_PHONE_NUMBER_ID = "";

export type TemplateType = {
  name: string;
  language: { code: string };
  components: {
    index?: number;
    type: ComponentTypeEnum;
    parameters: {
      type: ComponentParameterEnum;
      image?: { link: string };
      text?: string;
    }[];
  }[];
};

const sendMessageApi = async (template: TemplateType) => {
  try {
    const response = await fetch(
      `https://graph.facebook.com/v16.0/${FROM_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(template),
      }
    );
    return await response.json();
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

export default sendMessageApi;
