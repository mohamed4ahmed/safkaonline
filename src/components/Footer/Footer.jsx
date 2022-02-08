import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Footer.elements";
import logoImg from "../../assets/img/logo-web-white.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.footer__wrap}>
          <div className={classes.info}>
            <Typography variant="h6" className={classes.subTitle}>
              العنوان : شارع طه الطاوي ,المحلة الكبري , الغربية , مصر
            </Typography>

            <Typography variant="h6" className={classes.subTitle}>
              لهاتف:{" "}
              <a href="tel:+201095416155">
                <FaPhone /> +201095416155
              </a>
            </Typography>

            <Typography variant="h6" className={classes.subTitle}>
              البريد :{" "}
              <a href="mailto:Safka.online.2022@gmail.com">
                <GrMail /> Safka.online.2022@gmail.com
              </a>
            </Typography>

            <Typography variant="h6" className={classes.subTitle}>
              مواعيد العمل من 7 صباحآ الي 10 مساء علي طوال الاسبوع
            </Typography>
          </div>
          <NavLink to="/" className={classes.footer__logo}>
            <img
              src={logoImg}
              alt="logoImg"
              className={classes.footer__logoImg}
            />
          </NavLink>
          <div className={classes.footer__center}>
            <div className={classes.footer__centerText}>
              Safka صــفـقـة للملابس الجاهزة @ 2022.
            </div>
            <div className={classes.footer__centerText}>
              Made with ♥ by:{" "}
              <a
                href="https://www.mohamedahmed.ml"
                target="__blank"
                aria-label="Facebook"
                className={classes.footer__centerMo}
              >
                Mohamed Ahmed
              </a>
            </div>
          </div>
          <div className={classes.footer__right}>
            <a
              className={classes.footer__rightLink}
              href="https://www.facebook.com/Safka.Online22/"
              target="__blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              className={classes.footer__rightLink}
              href="https://www.instagram.com/safka_online21/"
              target="__blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className={classes.footer__rightLink}
              href="whatsapp://send?text=order-from-website&phone=+201061061028"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
