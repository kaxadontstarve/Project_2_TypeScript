import { Button, Stack } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

export const HashButton = styled(Button)(({ theme }) => ({
  fontSize: "16px",
  backgroundColor: "#D9D9D966",
  borderRadius: 0,
  marginRight: theme.spacing(2.375),
  color: "black",
  padding: theme.spacing(1.25),
  textTransform: "none",
}));

export const Hashtager = () => {
  return (
    <Stack direction={"row"} sx={{ mt: 2 }}>
      <HashButton>#Хештег</HashButton>
      <HashButton>#Хештег</HashButton>
      <HashButton>#Хештег</HashButton>
      <HashButton>#Хештег</HashButton>
    </Stack>
  );
};
