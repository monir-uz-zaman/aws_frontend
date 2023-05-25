import ProfileItem from "@/components/User/Profile/ProfileItem";
import { getSession } from "next-auth/react";
import React from "react";

const Profile = () => {
  return (
    <div className="main-container">
      <ProfileItem />
    </div>
  );
};

export default Profile;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  // redirecting when there is no logged in user

  if (!session) {
    return {
      redirect: {
        destination: `/`,

        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
