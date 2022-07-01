import React from 'react'
import cl from "./Footer.module.css";

interface FooterColumnProps {
    title: string;
    items: [];

}

const FooterColumn = ({ title, items }: FooterColumnProps) => {

    return (
        <div className={cl.footer__column}>
            <div className={cl.footer__title}>
                {title}
            </div>
            {items.map((item) =>
                <a href='#' className={cl.footer__text}>
                    {item}
                </a>
            )}
        </div>
    )
}
export default FooterColumn;
