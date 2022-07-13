import { Button, InputBase, Stack } from "@mui/material";
import React from "react";
import searchIcon from "./imgs/search-icon.png";

export const SearcherInput = () => {
  return (
    <Stack direction="row">
      <InputBase
        placeholder="Найти"
        sx={{
          fontSize: "20px",
          bgcolor: "#EAEAEA",
          width: "530px",
          height: "60px",
          //   pt: 2.3, pl: 3, pb: 2.3
          pl: 3,
        }}
      ></InputBase>
      <Button
        sx={{
          borderRadius: "0px",
          bgcolor: "#CC2323",
          height: "60px",
          width: "60px",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={searchIcon} />
      </Button>
    </Stack>
  );
};
