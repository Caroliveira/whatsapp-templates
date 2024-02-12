import { atom } from "jotai";
import sendMessageApi, { TemplateType } from "../api/messageApi";
import { ComponentParameterEnum, ComponentTypeEnum } from "../types/enums";

export const headerTypeAtom = atom<ComponentParameterEnum>(
  ComponentParameterEnum.Image
);
export const bodyMessageAtom = atom<string>("");
export const footerMessageAtom = atom<string>("");
export const buttonsAtom = atom<string[]>([]);

export const sendMessageAtom = atom(null, async (get) => {
  // TO DO: It needs name, language, phone number id and auth token, where do I get that?
  // TO DO: Buttons and footer: to be better defined

  const headerType = get(headerTypeAtom);
  const bodyMessage = get(bodyMessageAtom);
  const footerMessage = get(footerMessageAtom);
  const buttons = get(buttonsAtom);

  // This is what I found on the docs:
  // const formatedButtons = buttons.map((btn, index) => ({
  //   type: "button",
  //   sub_type: "quick_reply",
  //   index,
  //   parameters: [{ type: "payload", payload: "PAYLOAD" }],
  // }));

  const formatedButtons = buttons.map((btn, index) => {
    return {
      type: ComponentTypeEnum.Button,
      index,
      parameters: [{ type: ComponentParameterEnum.Text, text: btn }],
    };
  });

  // Should the header handle use Resumable Upload API to generate it?
  const template: TemplateType = {
    name: "template name",
    language: { code: "en_US" },
    components: [
      {
        type: ComponentTypeEnum.Header,
        parameters: [{ type: headerType, image: { link: "https://URL" } }],
      },
      {
        type: ComponentTypeEnum.Body,
        parameters: [{ type: ComponentParameterEnum.Text, text: bodyMessage }],
      },
      {
        type: ComponentTypeEnum.Footer,
        parameters: [
          { type: ComponentParameterEnum.Text, text: footerMessage },
        ],
      },
      ...formatedButtons,
    ],
  };

  console.log("template message:", template);
  console.log("save response:", sendMessageApi(template));
});
