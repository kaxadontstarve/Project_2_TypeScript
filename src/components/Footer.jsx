
import { Stack, Typography } from "@mui/material";
import React from "react";
import cl from "./Footer.module.css";
import FooterColumn from "./FooterColumn";
import logo from "./imgs/Frame 24 3.png";
import telegram from "./imgs/Vector (1).svg";
import playMarket from "./imgs/Vector (2).svg";
import appleMarket from "./imgs/Vector (3).svg";
import vk from "./imgs/Vector (4).svg";

const Footer = () => {
    return (
        <Stack className={cl.footer} direction="row">
            <FooterColumn
                title="Заказчику"
                items={["Добавить заказ", "Мастера и бригады", "Как это работает?"]}
            />
            <FooterColumn
                title="Исполнителю"
                items={[" Начать работу", "Заказы", "Условия и цены"]}
            />
            <FooterColumn
                title="Компания"
                items={[" О проекте", "Поддержка", "Сообщество"]}
            />
            <Stack className={cl.footer__column}>
                <Typography variant="h6" sx={{ pb: 3 }}>
                    Мобильные приложения
                </Typography>
                <Stack direction="row" spacing={4}>
                    <Stack spacing={4}>
                        <Typography>Для заказчика</Typography>
                        <Stack direction="row" spacing={3}>
                            <Typography>
                                <a href="#">
                                    <img src={appleMarket} />
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#">
                                    <img src={playMarket} />
                                </a>
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack spacing={4}>
                        <Typography>Для исполнителя</Typography>
                        <Stack direction="row" spacing={3}>
                            <Typography>
                                <a href="#">
                                    <img src={appleMarket} />
                                </a>
                            </Typography>
                            <Typography>
                                <a href="#">
                                    <img src={playMarket} />
                                </a>
                                 </Typography> 
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack spacing={4}>
                <Typography> 
                <a href="#">
                    <img src={logo} />
                </a>
                </Typography> 
                <Typography> 
                <a href="#">
                    <img src={vk} />
                </a>
                </Typography> 
                <Typography> 
                <a href="#">
                    <img src={telegram} />
                </a>
                </Typography> 
            </Stack>
        </Stack>
    );
};
export default Footer;
