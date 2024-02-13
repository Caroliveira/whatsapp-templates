import { useContext, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { MessageContext } from "../context/messageContext";
import { MessageDivider, MessageTitle } from "./MessageExample.styled";
import { Document, Page } from "react-pdf";

const mediaStyle = {
  width: "100%",
  height: "auto",
  borderRadius: 8,
};

const MessageMediaPreview = () => {
  const [previewUrl, setPreviewUrl] = useState("");
  const { message } = useContext(MessageContext);
  const { headerMedia } = message;

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
    return (
      <Box height={120} overflow="hidden" borderRadius={2}>
        <Document file={headerMedia}>
          <Page pageNumber={1} width={240} />
        </Document>
      </Box>
    );
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
