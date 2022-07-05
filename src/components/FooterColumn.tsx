import { Stack, Typography } from '@mui/material';
import React from 'react'
import cl from "./Footer.module.css";

interface FooterColumnProps {
    title: string;
    items: [];

}

const FooterColumn = ({ title, items }: FooterColumnProps) => {

    return (
        <Stack className={cl.footer__column}>
            <Typography sx={{fontSize:'20px', fontWeight: '500'}} className={cl.footer__title}>
                {title}
            </Typography>
            {items.map((item) =>
                <a href='#' className={cl.footer__text}>
                    {item}
                </a>
            )}
        </Stack>
    )
}
export default FooterColumn;
