import { Stack, Typography } from '@mui/material';
import React from 'react'
import cl from "./Footer.module.css";//почемуто когда я называю "ftrsty.css", "Footer.sty.css", "Footer.ftrsty.css" стили не подключаються
import FooterColumn from './FooterColumn';
import logo from "./imgs/Frame 24 3.png";
import telegram from "./imgs/Vector (1).svg";
import playMarket from "./imgs/Vector (2).svg";
import appleMarket from "./imgs/Vector (3).svg";
import vk from "./imgs/Vector (4).svg";


const Footer = () => {
    return (
        <Stack className={cl.footer} direction='row'>

            <FooterColumn title='Заказчику' items={['Добавить заказ', 'Мастера и бригады', 'Как это работает?']} />
            <FooterColumn title='Исполнителю' items={[' Начать работу', 'Заказы', 'Условия и цены']} />
            <FooterColumn title='Компания' items={[' О проекте', 'Поддержка', 'Сообщество']} />
            <Stack className={cl.footer__column}>
                <Typography
                    sx={{
                        fontSize: '20px',
                        fontWeight: '500',
                    }}
                    className={cl.footer__title}>
                    Мобильные приложения
                </Typography>
                <Stack direction='row' className={cl.footer__row}>
                    <Stack className={cl.footer__items}>
                        <div className={cl.footer__item_text}><a href='#'>Для заказчика</a></div>
                        <Stack direction='row' className={cl.footer__row}>
                            <Typography><a href='#'><img src={appleMarket} /></a></Typography>
                            <Typography><a href='#'><img src={playMarket} /></a></Typography>
                        </Stack>
                    </Stack>
                    <Stack className={cl.footer__items}>
                        <div className={cl.footer__item_text}> <a href='#'>Для исполнителя</a></div >
                        <Stack direction='row' className={cl.footer__row}>
                            <Typography><a href='#'><img src={appleMarket} /></a></Typography>
                            <Typography><a href='#'><img src={playMarket} /></a></Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack className={cl.footer__column + ' ' + cl.img_block}>
                <Typography><a href='#'><img src={logo} /></a></Typography>
                <Typography><a href='#'><img src={vk} /></a></Typography>
                <Typography><a href='#'><img src={telegram} /></a></Typography>
            </Stack>
        </Stack >


    )
}
export default Footer;
