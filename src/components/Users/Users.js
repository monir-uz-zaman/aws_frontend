import React from "react";
import classes from "./Users.module.css";

const Users = ({ el, i, role }) => {
  console.log("el", el);
  return (
    <div className={`${classes.projects_detail} regular`} key={i}>
      <div className={classes.projects_info__order_number}>{el?.emp_no}</div>
      <div className={classes.projects_info__order_number}>
        {el?.hire_date || el?.from_date}
      </div>
      <div className={classes.projects_info__name}>
        {el?.first_name || el?.to_date}
      </div>
      {
        <div className={classes.project_info__created}>
          {el?.salary || el?.birth_date}
        </div>
      }
    </div>
  );
};

export default Users;
