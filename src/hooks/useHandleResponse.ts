import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

type ResponseError = {
  error?: { message?: string };
};

const useHandleResponse = () => {
  const { setSnackbar } = useContext(GlobalContext);

  const handleResponse = async <T extends ResponseError>(response: T) => {
    if (response.error) {
      const message =
        response.error.message || "Something went wrong, try again later!";
      setSnackbar({ open: true, message, severity: "error" });
    } else {
      setSnackbar({
        open: true,
        message: "Success! Your changes have been saved.",
        severity: "success",
      });
    }
  };

  return { handleResponse };
};

export default useHandleResponse;
