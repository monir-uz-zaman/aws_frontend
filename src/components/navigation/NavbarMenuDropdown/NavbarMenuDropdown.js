import React, { useEffect, useRef, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import useWindowDimensions from "@/hooks/WindowDimension";
import classes from "./NavbarMenuDropdown.module.css";
import NavItem from "../NavItem";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faRightFromBracket,
  faUser,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { getImageByKey } from "@/utils/getImageBykey";
import Image from "next/image";
import { getBaseURL } from "@/lib/getBaseRoute";

const DROPDOWN_ITEMS = [
  // {
  //   text: "Profile",
  //   href: "/",
  //   icon: <FontAwesomeIcon icon={faUser} />,
  // },
  {
    text: "Employee Info",
    href: "/employee-info",
    icon: <FontAwesomeIcon icon={faLock} />,
  },
  {
    text: "Logout",
    href: "/",
    icon: <FontAwesomeIcon icon={faRightFromBracket} />,
    onClick: () => {
      signOut({ callbackUrl: getBaseURL });
    },
  },
];
const DROPDOWN_ITEMS1 = [
  {
    text: "User Login",
    href: "/auth/login",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    text: "Admin Login",
    href: "/auth/login",
    icon: <FontAwesomeIcon icon={faUserAstronaut} />,
  },
];

function DropdownItem({ setOpen, setNavActive, onClick, href, icon, text }) {
  const dropdownItemClickHandler = () => {
    // we have to manually close the profile and side menu cause they will not close when anyitem in dropdown container is clicked

    setOpen((prev) => !prev);
    setNavActive((prev) => !prev);
    onClick && onClick();
  };
  return (
    <Link
      className={`${classes["dropdownItem"]} font-400`}
      onClick={dropdownItemClickHandler}
      href={href}
    >
      {icon && icon}

      {text}
    </Link>
  );
}

const NavbarMenuDropdown = ({ activeLink, secondaryPage, setNavActive }) => {
  const session = useSession();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const { width } = useWindowDimensions();

  useEffect(() => {
    const handler = (e) => {
      if (!menuRef?.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    session?.status !== "loading" &&
    (session?.data?.user?.accessToken ? (
      <div className={`${classes.menuContainer}  `} ref={menuRef}>
        <div
          className={classes.menuTrigger}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* // in small screen we also show name (profile) */}
          {width <= 768 && <div className="font-400 nav__item"> User</div>}
          {/* <img
            src={
              // "https://cdn4.iconfinder.com/data/icons/office-thick-outline/36/office-14-1024.png"
            }
          /> */}
          <Image
            src={getImageByKey("user_profile")}
            alt="user_profile"
            height={50}
            width={50}
            className={classes.containerbgImage}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base65,iVBORw0KGgoAAAANSUhEUgAAAFIAAABWCAYAAABcvcGNAAAMQGlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnluSkEBoAQSkhN4E6QSQEkILIL0INkISIJQQA0HFji4quHYRARu6KqLYAbEjdhbBhn2xoKKsiwW78iYFdN1XvjffN3f"
          />
        </div>
        <div
          className={`${classes["dropdown-menu"]} ${
            open ? classes.activeDropdown : classes.inactiveDropdown
          }`}
        >
          <div className={`${classes.title} font-500`}>
            {session?.data?.user?.user_name || "JOHN DOE"}
            <br />
          </div>
          <div className={classes.dropdownItemsContainer}>
            {DROPDOWN_ITEMS.map((el) => (
              <DropdownItem
                key={el?.text}
                text={el?.text}
                setOpen={setOpen}
                setNavActive={setNavActive}
                {...el}
              />
            ))}
          </div>
        </div>
      </div>
    ) : (
      // show only login button when not logged in
      <div className={`${classes.menuContainer}  `} ref={menuRef}>
        <div
          className={classes.menuTrigger}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* // in small screen we also show name (profile) */}

          <div
            className="font-400 nav__item"
            style={{
              color: !secondaryPage ? "white" : "black",
            }}
          >
            {" "}
            Login
          </div>
        </div>
        <div
          className={`${classes["dropdown-menu"]} ${
            open ? classes.activeDropdown : classes.inactiveDropdown
          }`}
        >
          <div className={classes.dropdownItemsContainer}>
            {DROPDOWN_ITEMS1.map((el) => (
              <DropdownItem
                key={el?.text}
                text={el?.text}
                setOpen={setOpen}
                setNavActive={setNavActive}
                {...el}
              />
            ))}
          </div>
        </div>
      </div>
    ))
  );
};

export default NavbarMenuDropdown;
