import React, { useEffect, useState } from "react";

import styles from "../../styles/Home.module.css";
import Users from "@/components/Users/Users";
import classes from "../../components/Users/Users.module.css";
import { getSession, useSession } from "next-auth/react";
import axios from "axios";
import { getBaseRoute } from "@/lib/getBaseRoute";

const EmployeeInfo = () => {
  const session = useSession();
  console.log("session", session);
  const [users, setUsers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.data?.user?.accessToken}`,
      };

      let url = `${getBaseRoute}/employee/${session?.data?.user?.sub}`;

      if (session?.data?.user?.role === "manager") {
        url = `${getBaseRoute}/employee/${session?.data?.user?.sub}/salaries`;
      }

      try {
        const res = await axios.get(url, {
          headers,
        });
        console.log("res", res);
        setUsers(
          session?.data?.user?.role === "manager" ? res?.data : [res?.data]
        );
      } catch (error) {
        console.log("error", error);
      }
    };
    if (session?.data?.user?.accessToken) {
      fetchData();
    }
  }, [session?.data?.user?.accessToken]);

  return (
    <main className={styles.main}>
      <div className={`${classes.projects_details} protrebleheavy`}>
        <div className={classes.projects_info__order_number}>
          Employee Number
        </div>
        <div className={classes.project_info__name}>
          {" "}
          {session?.data?.user?.role === "manager" ? "From" : "Work Started"}
        </div>
        <div className={classes.project_info__created}>
          {" "}
          {session?.data?.user?.role === "manager" ? "To" : "Name"}
        </div>
        {
          <div className={classes.project_info__action}>
            {" "}
            {session?.data?.user?.role === "manager"
              ? "Salary"
              : "Date of Birth"}
          </div>
        }
      </div>
      {users &&
        users.length > 0 &&
        users.map((el, i) => (
          <Users
            el={el}
            key={i.toString()}
            i={i}
            role={session?.data?.user?.role}
          />
        ))}
    </main>
  );
};

export default EmployeeInfo;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  // redirecting when there is session

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
