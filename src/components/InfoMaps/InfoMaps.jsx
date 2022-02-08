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
                  Address: 2st Taha el-Sawy, Elmahala-Elkoubra, Gharbia, Egypt
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
                href="https://www.google.com/maps/place/safka/@31.0914078,30.0063286,9z/data=!4m9!1m2!2m1!1ssafka!3m5!1s0x14f7a3837569d0af:0x5ea168e21e0b6dab!8m2!3d30.9738629!4d31.1822901!15sCgVzYWZrYZIBDmNsb3RoaW5nX3N0b3Jl"
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
