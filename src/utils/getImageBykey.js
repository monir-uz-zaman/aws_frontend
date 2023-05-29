import organization_logo from "../constants/assets/images/logos/org_logo.svg";

import login_background from "../constants/assets/images/auth/login_background.svg";
import signup_background from "../constants/assets/images/auth/signup_background.svg";
import forgot_password from "../constants/assets/images/auth/forgot_password.svg";
import change_password from "../constants/assets/images/auth/change_password.svg";
import user_profile from "../constants/assets/images/auth/user_profile.svg";
import profile_background from "../constants/assets/images/auth/profile_background.svg";

import no_result from "../constants/assets/images/search/no_result.svg";

import contact_us from "../constants/assets/images/contact/contact_us.svg";
import contact1 from "../constants/assets/images/contact/1.jpeg";
import contact2 from "../constants/assets/images/contact/2.jpeg";
import contact3 from "../constants/assets/images/contact/3.jpeg";
import contact4 from "../constants/assets/images/contact/4.jpeg";
import contact5 from "../constants/assets/images/contact/5.jpeg";
import contact6 from "../constants/assets/images/contact/6.jpeg";

import product1 from "../constants/assets/images/products/product 1.png";
import product2 from "../constants/assets/images/products/product 2.png";
import product3 from "../constants/assets/images/products/product 3.png";
import product4 from "../constants/assets/images/products/product 4.jpg";
import product5 from "../constants/assets/images/products/product 5.jpg";
import product6 from "../constants/assets/images/products/product 6.png";
import product7 from "../constants/assets/images/products/product 7.png";

const images = {
  organization_logo,
  login_background,
  signup_background,
  forgot_password,
  change_password,
  user_profile,
  profile_background,
  no_result,
  contact_us,
  contact1,
  contact2,
  contact3,
  contact4,
  contact5,
  contact6,
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
};

const getImageByKey = (key) => {
  return images[key];
};

export { getImageByKey };
