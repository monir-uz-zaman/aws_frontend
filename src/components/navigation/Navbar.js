import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
import Colors from "../Colors";
import { getImageByKey } from "@/utils/getImageBykey";

import NavbarMenuDropdown from "./NavbarMenuDropdown/NavbarMenuDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ secondaryPage = true }) => {
  const router = useRouter();

  // SMALL SCREEN NAVIGATION ITEM ACTIVE OR NOT
  const [navActive, setNavActive] = useState(false);
  const menuRef = useRef();
  const [showSearchModal, setShowSearchModal] = useState(false);

  const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Contact", href: "/contact" },
    // { text: "Employee Info", href: "/employee-info" },
  ];

  const activeLink = MENU_LIST.find((link) =>
    link.href.includes(router.pathname)
  );
  useEffect(() => {
    const handler = (e) => {
      if (
        !menuRef?.current?.contains(e.target) &&
        !e.target.closest(".nav__menu-list")
      ) {
        // we also dont close the sidebar auto when any navitem is clicked
        setNavActive(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const customStyles = {
    content: {
      // inset: 0,
      border: "none",
      padding: "50px 20px",
      transition: "all 300ms ease-in-out",
      top: "50%",
      transform: "translate(-50%, -50%)",
      left: "50%",
      background: Colors.background,
      height: "400px",
    },
  };
  const [searchFieldInput, setSearchFieldInput] = useState("");

  const searchButtonHandler = (e) => {
    e.preventDefault();

    if (searchFieldInput.trim() === "") {
      setShowSearchModal(false);
      return;
    }
    let cur = searchFieldInput;
    setSearchFieldInput("");
    setShowSearchModal(false);

    router.push("/search", {
      query: { value: cur },
    });
  };

  const searchESCButtonHandler = () => {
    setShowSearchModal(false);
  };

  return (
    <>
      <header
        style={{
          backgroundColor: secondaryPage ? Colors.background : "inherit",
        }}
      >
        <nav
          className={`nav`}
          style={{
            backgroundColor: secondaryPage ? Colors.background : "inherit",
            height: secondaryPage ? "120px" : "100px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              zIndex: 1,
            }}
          >
            <Link href={"/"}>
              <Image
                // src={getImageByKey("organization_logo")}
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/348357152_1447952702612326_8683819901022190373_n.png?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=c_QreONHEFMAX_Yg6vL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSlRLae5N5uhOpgqgA_wt2k0UHiazk3HIfQtsy-JD0pcA&oe=648D760F"
                // src="https://scontent.xx.fbcdn.net/v/t1.15752-9/348358184_3704600689768238_8470938113957251800_n.png?_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=PvGZc_FqsMYAX873W6d&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTzvzgaGNnVm7MPOp1xmdfwfDBktnvEKzoTtv3jrKoCaQ&oe=648D7A21"
                // src={organization_logo}
                height={100}
                width={300}
                alt="logo"
                // placeholder="blur"
              />
            </Link>
            <div
              onClick={() => {
                setNavActive((prev) => !prev);
              }}
              className={`nav__menu-bar`}
              ref={menuRef}
            >
              <FontAwesomeIcon
                icon={!navActive ? faBars : faXmark}
                color={!secondaryPage ? Colors.white : Colors.black}
              />
            </div>

            {/* // filtering login cause it will be showed seperately and we just need in the MENU_LIST so we can have active link */}

            <div className={`${navActive ? "active" : ""} nav__menu-list`}>
              {MENU_LIST.map((menu) => (
                <div
                  onClick={() => {
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem
                    active={activeLink?.text === menu.text}
                    {...menu}
                    secondaryPage={secondaryPage}
                  />
                </div>
              ))}

              <NavbarMenuDropdown
                activeLink={activeLink}
                secondaryPage={secondaryPage}
                setNavActive={setNavActive}
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

{
  /* <div
onClick={() => {
  setNavActive((prev) => !prev);
}}
className={`nav__menu-bar`}
ref={menuRef}
>
<FontAwesomeIcon
  icon={!navActive ? faBars : faXmark}
  color={!secondaryPage ? Colors.white : Colors.black}
/>
</div>

{/* // filtering login cause it will be showed seperately and we just need in the MENU_LIST so we can have active link */
}

{
  /* <div className={`${navActive ? "active" : ""} nav__menu-list`}>
{MENU_LIST.filter((el) => el?.text !== "Login").map((menu) => (
  <div
    onClick={() => {
      setNavActive(false);
    }}
    key={menu.text}
  >
    <NavItem
      active={activeLink?.text === menu.text}
      {...menu}
      secondaryPage={secondaryPage}
    />
  </div>
))}

<NavbarMenuDropdown
  activeLink={activeLink}
  secondaryPage={secondaryPage}
  setNavActive={setNavActive}
/>
</div>   */
}
