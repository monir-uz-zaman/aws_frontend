import useWindowDimensions from "@/hooks/WindowDimension";
import Link from "next/link";
import Colors from "../Colors";
const NavItem = ({ text, href, active, secondaryPage, onClick }) => {
  const { width } = useWindowDimensions();
  let linkColor;

  // DEPENDING ON PAGE WE HAVE DIFFERENT Colors.IN MAIN PAGE THE COLOR WILL BE WHITE WHERAS IN OTHER PAGE IT WILL BE BLACK.ACTIVE COLORS WILL ALWAYS BE RED

  if (secondaryPage) {
    if (active) {
      linkColor = Colors.red;
    } else if (width > 768) {
      linkColor = Colors.black;
    } else {
      linkColor = Colors.white;
    }
  } else if (!secondaryPage) {
    if (active) {
      linkColor = Colors.red;
    } else {
      linkColor = Colors.white;
    }
  }
  return onClick ? (
    <>
      <div
        className={`nav__item ${active ? "active" : ""} font-400`}
        style={{
          color: linkColor,
        }}
        onClick={onClick}
      >
        Haku
      </div>
    </>
  ) : (
    <Link
      href={href}
      className={`nav__item ${active ? "active" : ""} font-400`}
      style={{
        color: linkColor,
      }}
    >
      {text}
    </Link>
  );
};

export default NavItem;
