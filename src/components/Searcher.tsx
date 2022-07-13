import { Button, InputBase, Stack, Typography } from "@mui/material";
import React from "react";

import noNameIcon from "./imgs/no-name-icon.png";
import { Hashtager } from "./Hashtager";
import { SearcherInput } from "./SearcherInput";

export const Searcher = () => {
  return (
    <Stack direction={"row"} sx={{ pt: 27, pl: 27, pb: 13 }} spacing={5}>
      <Stack>
        <Typography
          variant="h6"
          color={"black"}
          sx={{ fontSize: "58px", fontWeight: "700", width: "691px", mb: 6.5 }}
        >
          Мотивирующий лозунг на пару строчек
        </Typography>
        <SearcherInput />
        <Hashtager />
      </Stack>
      <Typography
        sx={{
          bgcolor: "#D9D9D9",
          height: "368px",
          width: "368px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={noNameIcon} />
      </Typography>
    </Stack>
  );
};
