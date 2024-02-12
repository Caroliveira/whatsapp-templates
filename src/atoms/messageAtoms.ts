import { atom } from "jotai";

export const bodyMessageAtom = atom<string>("");
export const footerMessageAtom = atom<string>("");
export const buttonsAtom = atom<string[]>([]);

export const sendMessageAtom = atom(null, async (get) => {
  // TO DO: It needs name, language, phone number id and auth token, where do I get that?
  // TO DO: Buttons and footer: to be better defined

  const bodyMessage = get(bodyMessageAtom);
  const footerMessage = get(footerMessageAtom);
  const buttons = get(buttonsAtom);

  const formatedButtons = buttons.map((btn, index) => ({
    type: "button",
    sub_type: "quick_reply",
    index,
    parameters: [{ type: "payload", payload: "PAYLOAD" }],
  }));

  const template = {
    // name: "template name",
    // language: { code: "en_US" },
    components: [
      {
        type: "header",
        parameters: [{ type: "image", image: { link: "https://URL" } }],
      },
      { type: "body", parameters: [{ type: "text", text: bodyMessage }] },
      { footer: { text: footerMessage } },
      ...formatedButtons,
    ],
  };

  console.log("template message:", template);

  // try {
  //   const response = await fetch(
  //     `https://graph.facebook.com/v16.0/FROM_PHONE_NUMBER_ID/messages`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ACCESS_TOKEN`,
  //       },
  //       body: JSON.stringify(template),
  //     }
  //   );
  //   console.log(response.json());
  // } catch (error) {
  //   console.error("Error sending message:", error);
  // }
});
