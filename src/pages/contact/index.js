import { getImageByKey } from "@/utils/getImageBykey";
import Image from "next/image";
import React from "react";
import classes from "../../styles/contact.module.css";

const ALL_EMPLOYEES = [
  {
    label: "Manager",
    src: getImageByKey("contact1"),
  },
  {
    label: "Cloud Developer",
    src: getImageByKey("contact2"),
  },
  {
    label: "Software Developer",
    src: getImageByKey("contact3"),
  },
  {
    label: "Software Developer",
    src: getImageByKey("contact4"),
  },
  {
    label: "Lead Developer",
    src: getImageByKey("contact5"),
  },
  {
    label: "Team Lead",
    src: getImageByKey("contact6"),
  },
];

export default function ContactUs() {
  return (
    <div className="main-container">
      <div className={classes.ContactUsPrimary}>
        {/* <div className={classes.ContactUs_image}>
          <Image
            src={getImageByKey("contact_us")}
            alt="contact_us"
            width={"400"}
            height="400"
          />
        </div> */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flex: 1.5,
          }}
        >
          {ALL_EMPLOYEES.map((el) => (
            <div
              style={{
                flexDirection: "column",
              }}
            >
              <Image
                src={el?.src}
                alt="contact_us"
                width={"200"}
                height="200"
              />
              <div
                style={{
                  padding: "20px",
                  textAlign: "center",
                  background: "white",
                }}
              >
                {el?.label}
              </div>
            </div>
          ))}
        </div>
        <div className={classes.ContactUs_description}>
          <div className={classes.ContactUs_description_Primary}>
            <h4 className="font-700">{"Contact Us"}</h4>
            <div className={classes.ContactUs_description_address}>
              <div
                className={`${classes.ContactUs_description_address_info} font-400`}
              >
                <div>Foodin oy</div>
                <div
                  className={classes.ContactUs_description_address_info_title}
                >
                  {"Address"}
                </div>
                <div>Best place in the world</div>
              </div>
            </div>
            <div className={classes.ContactUs_description_phone}>
              <div className={classes.ContactUs_description_address_info_title}>
                {"Phone"}
              </div>
              <div>0207 000 240</div>
            </div>
            <div className={classes.ContactUs_description_email}>
              <a
                className={classes.ContactUs_description_email_button}
                href="mailto:main@mail.com"
                target="_blank"
                rel="noreferrer"
              >
                {"Send Email"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
