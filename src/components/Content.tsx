import { Stack } from "@mui/material";

import React from 'react';
import cl from "./Content.module.css";
import { Searcher } from "./Searcher";
import { Statistics } from "./Statistics";


const Content = () => {
  return (
    <Stack sx={{width: '1440px'}}>
      <Searcher />
      <Statistics />
    </Stack>
  )
}
export default Content;
