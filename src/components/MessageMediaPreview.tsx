import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { Box } from "@mui/material";
import { MessageDivider, MessageTitle } from "./MessageExample.styled";
import { headerMediaAtom } from "../atoms/messageAtoms";

const mediaStyle = {
  width: "100%",
  height: "auto",
  borderRadius: 8,
};

const MessageMediaPreview = () => {
  const [headerMedia] = useAtom(headerMediaAtom);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (headerMedia) {
      const fileUrl = URL.createObjectURL(headerMedia);
      setPreviewUrl(fileUrl);
      return () => {
        URL.revokeObjectURL(fileUrl);
      };
    }
  }, [headerMedia]);

  if (!headerMedia) return null;

  const renderMedia = () => {
    const mediaType = headerMedia.type;
    if (mediaType.includes("image")) {
      return (
        <img src={previewUrl} alt="Header media preview" style={mediaStyle} />
      );
    }
    if (mediaType.includes("video")) {
      return <video controls src={previewUrl} style={mediaStyle} />;
    }
    return <></>;
  };

  return (
    <>
      <Box position="relative">
        {renderMedia()}
        <MessageTitle position="absolute" top={8} left={8}>
          Header
        </MessageTitle>
      </Box>
      <MessageDivider />
    </>
  );
};

export default MessageMediaPreview;
