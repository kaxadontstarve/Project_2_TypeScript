import { Stack, Typography } from "@mui/material";
import React from "react";
import cl from "./Footer.module.css";

interface FooterColumnProps {
    title: string;
    items: [];
}

const FooterColumn = ({ title, items }: FooterColumnProps) => {
    return (
        <Stack className={cl.footer__column}>
            <Typography variant="h6" sx={{ pb: 3 }}>
                {title}
            </Typography>
            {items.map((item) => (
                <Typography sx={{ pb: 2 }}>
                    <a href="#">{item}</a>
                </Typography>
            ))}
        </Stack>
    );
};
export default FooterColumn;