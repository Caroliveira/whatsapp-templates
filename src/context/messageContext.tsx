import { createContext, ReactNode, useReducer } from "react";
import { ComponentParameterEnum } from "../utils/enums";

export type HasComponentType = {
  header?: boolean;
  footer?: boolean;
  buttons?: boolean;
};

export type MessageType = {
  headerType: ComponentParameterEnum;
  headerMedia?: File;
  body: string;
  footer?: string;
  buttons: string[];
};

type MessageContextType = {
  setHasComponent: (hasComponent: HasComponentType) => void;
  hasComponent: HasComponentType;
  setMessage: (message: Partial<MessageType>) => void;
  message: MessageType;
};

type MessageContextProviderProps = {
  children: ReactNode;
};

const defaultMessageContext: MessageContextType = {
  setHasComponent: () => null,
  hasComponent: {},
  setMessage: () => null,
  message: {
    headerType: ComponentParameterEnum.Image,
    body: "",
    buttons: [],
  },
};

export const MessageContext = createContext(defaultMessageContext);

const updateReducer = <T,>(value: T, update: Partial<T>): T => {
  return { ...value, ...update };
};

export const MessageContextProvider = ({
  children,
}: MessageContextProviderProps) => {
  const [message, setMessage] = useReducer(
    updateReducer<MessageType>,
    defaultMessageContext.message
  );

  const [hasComponent, setHasComponent] = useReducer(
    updateReducer<HasComponentType>,
    defaultMessageContext.hasComponent
  );

  return (
    <MessageContext.Provider
      value={{ message, setMessage, hasComponent, setHasComponent }}
    >
      {children}
    </MessageContext.Provider>
  );
};
