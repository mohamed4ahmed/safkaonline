import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./InfoMaps.elements";
import { SiGooglemaps } from "react-icons/si";
import { FaWhatsapp, FaPhone, FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Maps from "./Maps/Maps";

const InfoMaps = () => {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <Container maxWidth="lg">
        <div className={classes.infoRow}>
          <div className={classes.infoColumn}>
            <div className={classes.textWrapper}>
              <Typography variant="h4" className={classes.text}>
                STORE
              </Typography>
              <div>
                <Typography variant="h6" className={classes.subTitle}>
                  Address: Abd Roba ST, Elmahala-Elkoubra, Gharbia, Egypt
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Phone number service:{" "}
                  <a href="tel:+201095416155">
                    <FaPhone /> +201095416155
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Email:{" "}
                  <a href="mailto:Safka.online.2022@gmail.com">
                    <MdEmail /> Safka.online.2022@gmail.com
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  WhatsApp:{" "}
                  <a href="whatsapp://send?text=test&phone=+201061061028">
                    <FaWhatsapp /> WhatsApp{" "}
                  </a>
                </Typography>

                <Typography variant="h6" className={classes.subTitle}>
                  Messenger:{" "}
                  <a
                    href="https://m.facebook.com/messages/t/110829101400998"
                    target="_blank"
                    aria-label="Facebook"
                    rel="noreferrer"
                  >
                    <FaFacebookMessenger /> Messenger{" "}
                  </a>
                </Typography>
              </div>
              <a
                href="https://www.google.com/maps/place/%D8%B5%D9%81%D9%82%D9%87%E2%80%AD/@30.943632,30.6421503,10z/data=!4m9!1m2!2m1!1z2LXZgdmC2Yc!3m5!1s0x14f7a5f2c8e29cd1:0x9fabded9faa9e683!8m2!3d30.9662083!4d31.161194!15sCgjYtdmB2YLZh5IBDmNsb3RoaW5nX3N0b3Jl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" className={classes.button}>
                  <SiGooglemaps /> Get Directions
                </Button>
              </a>
            </div>
          </div>
          <div className={classes.infoColumn}>
            <div className={classes.imgWrapper}>
              <Maps />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InfoMaps;
