import { HasComponentType, MessageType } from "../context/messageContext";
import { TemplateType } from "../services/messageApi";
import { ComponentParameterEnum, ComponentTypeEnum } from "./enums";

type ErrorReturnType = { emptyBody: boolean };

type GenerateTemplateReturnType = TemplateType | ErrorReturnType;

const generateTemplate = (
  message: MessageType,
  hasComponent: HasComponentType
): GenerateTemplateReturnType => {
  // TO DO: It needs name, language, phone number id and auth token, where do I get that?
  // TO DO: Buttons and footer: to be better defined

  if (!message.body.trim()) return { emptyBody: true };

  const template: TemplateType = {
    name: "template name",
    language: { code: "en_US" },
    components: [
      {
        type: ComponentTypeEnum.Body,
        parameters: [{ type: ComponentParameterEnum.Text, text: message.body }],
      },
    ],
  };

  if (hasComponent.header) {
    // Should the header handle use Resumable Upload API to generate it?
    template.components.push({
      type: ComponentTypeEnum.Header,
      parameters: [{ type: message.headerType, image: message.headerMedia }],
    });
  }

  if (hasComponent.footer) {
    template.components.push({
      type: ComponentTypeEnum.Footer,
      parameters: [{ type: ComponentParameterEnum.Text, text: message.footer }],
    });
  }

  if (hasComponent.buttons) {
    // Not sure if the button is been handle correctly
    message.buttons.forEach((btn, index) => {
      template.components.push({
        type: ComponentTypeEnum.Button,
        index,
        parameters: [{ type: ComponentParameterEnum.Text, text: btn }],
      });
    });
  }

  return template;
};

export default generateTemplate;
