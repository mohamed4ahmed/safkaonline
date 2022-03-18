import { Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Footer.elements";
import logoImg from "../../assets/img/logo-web-white.png";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiGooglemaps } from "react-icons/si";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container maxWidth="lg">
        <div className={classes.footer__wrap}>
          <div className={classes.info}>
            <Typography variant="h6" className={classes.subTitle}>
              Location :{" "}
              <a
                href="https://www.google.com/maps/place/%D8%B5%D9%81%D9%82%D9%87%E2%80%AD/@31.0913359,30.0063166,9z/data=!4m9!1m2!2m1!1z2LXZgdmC2Yc!3m5!1s0x14f7a5f2c8e29cd1:0x9fabded9faa9e683!8m2!3d30.9662083!4d31.161194!15sCgjYtdmB2YLZh5IBDmNsb3RoaW5nX3N0b3Jl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGooglemaps /> Get Directions
              </a>
            </Typography>

            <Typography variant="h6" className={classes.subTitle}>
              Phone :{" "}
              <a href="tel:+201095416155">
                <FaPhone /> +201095416155
              </a>
            </Typography>

            <Typography variant="h6" className={classes.subTitle}>
              Email :{" "}
              <a href="mailto:Safka.online.2022@gmail.com">
                <GrMail /> Safka.online.2022@gmail.com
              </a>
            </Typography>

            <Typography variant="h6" className={classes.subTitle}>
              مواعيد العمل : من 10 صباحآ الي 10 مساء طوال الاسبوع
            </Typography>

            <ul className={classes.nav__menu}>
              <li className={classes.nav__item}>
                <NavLink
                  to="/products"
                  className={classes.nav__link}
                  activeClassName={classes.activeClass}
                >
                  مـنـتـجـاتـنا
                </NavLink>
              </li>

              <li className={classes.nav__item}>
                <NavLink
                  to="/blog"
                  className={classes.nav__link}
                  activeClassName={classes.activeClass}
                >
                  أحـدث الأخـبـار
                </NavLink>
              </li>

              <li className={classes.nav__item}>
                <NavLink
                  to="/membership"
                  className={classes.nav__link}
                  activeClassName={classes.activeClass}
                >
                  تـسـجـيـل عـضـويه
                </NavLink>
              </li>
            </ul>
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
