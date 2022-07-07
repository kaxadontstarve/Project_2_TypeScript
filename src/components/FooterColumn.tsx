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
            <Typography variant='h6' className={cl.footer__title}>
                {title}
            </Typography>
            {items.map((item) =>
                <Typography>
                    <a href='#' className={cl.footer__text}>
                        {item}
                    </a>
                </Typography>
            )}
        </Stack>
    )
}
export default FooterColumn;
