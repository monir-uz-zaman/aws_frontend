import CustomToast from "@/components/Common/CustomToast/CustomToast";
import ProfileForm from "@/components/Form/ProfileForm";
import { useForm } from "@/hooks/form-hook";
import { updateUser } from "@/utils/http/dataHandler";
import { reactQueryGetUser } from "@/utils/http/datahandlerReactquery";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

import settings from "../../../utils/configs/settings.json";

const ProfileItem = () => {
  const { organizationId, key } = settings.organization;
  const session = useSession();
  const [profileData, setProfileData] = useState([]);
  const [loading, setLoading] = useState(false);

  const [state, InputHandler] = useForm(
    {
      EMAIL: {
        value: "",
        isValid: false,
      },

      FIRSTNAME: {
        value: "",
        isValid: false,
      },
      LASTNAME: {
        value: "",
        isValid: false,
      },
      CITY: {
        value: "",
        isValid: true,
      },
      ADDRESS: {
        value: "",
        isValid: true,
      },
      POSTALCODE: {
        value: "",
        isValid: true,
      },
    },
    false
    // the last false defines if the whole form is valid or not ( since we have set all isvalid to false so our total form validity will also be false)
  );

  const fetchUserDetail = () => {
    return reactQueryGetUser(organizationId, session?.data?.user?.user_token);
  };

  const { data: userDetail, isLoading } = useQuery(
    `userDetail`,
    fetchUserDetail,
    {
      // sends API request when user is authenticated ->user should not reach here if they are not authenticated
      // enabled: session?.status === "authenticated",
      enabled: session?.data?.user?.user_id * 1 > 1,

      // by default the cache time is 5 minutes
      cacheTime: 300000,
    }
  );
  console.log(session);

  useEffect(() => {
    if (!isLoading) {
      const newData = {
        firstName: userDetail?.data.firstName,
        lastName:
          userDetail?.data.lastName !== "x" &&
          userDetail?.data.lastName !== "Sub" &&
          userDetail?.data.lastName !== "-"
            ? userDetail?.data.lastName
            : "",
        phone:
          userDetail?.data.phone !== "0" && userDetail?.data.phone !== "-"
            ? userDetail?.data.phone
            : "",
        email: userDetail?.data.emailAddress,
        city: userDetail?.data.city !== "-" ? userDetail?.data.city : "",
        country:
          userDetail?.data.country !== "x" ? userDetail?.data.country : "",
        countryId:
          userDetail?.data.countryId !== "x" ? userDetail?.data.countryId : "",
        yTunnus:
          userDetail?.data?.userSettings?.items?.find(
            (item) => item.name === "yTunnus"
          ) &&
          userDetail?.data?.userSettings?.items?.find(
            (item) => item.name === "yTunnus"
          ).value !== "x"
            ? userDetail?.data?.userSettings?.items?.find(
                (item) => item.name === "yTunnus"
              ).value
            : "",
        organizationName:
          userDetail?.data?.userSettings?.items?.find(
            (item) => item.name === "organizationName"
          ) &&
          userDetail?.data?.userSettings?.items?.find(
            (item) => item.name === "organizationName"
          ).value !== "x"
            ? userDetail?.data?.userSettings?.items?.find(
                (item) => item.name === "organizationName"
              ).value
            : "",
        address:
          userDetail?.data.address !== "-" ? userDetail?.data.address : "",
        postalCode:
          userDetail?.data.postalCode !== "0"
            ? userDetail?.data.postalCode
            : "0",
        regionId:
          userDetail?.data.regionId !== "-" ? userDetail?.data.regionId : "",
        dateOfBirth:
          userDetail?.data?.dateOfBirth && userDetail?.data?.dateOfBirth !== "x"
            ? userDetail?.data.dateOfBirth
            : Date(),
      };

      setProfileData({ ...newData });
    }
  }, [isLoading]);

  const formSubmitHandler = async () => {
    console.log(state, profileData);
    setLoading(true);
    try {
      // Update user data
      const response = await updateUser(
        session?.data?.user?.user_id,
        session?.data?.user?.user_token,
        organizationId,
        key,
        state.inputs.FIRSTNAME.value ? state.inputs.FIRSTNAME.value : "-",
        state.inputs.LASTNAME.value ? state.inputs.LASTNAME.value : "-",
        // NOT ALLOWING TO CHANGE PHONE NUMBER SO SENDING 1
        1,
        // NOT ALLOWING TO CHANGE COUNTRY AND NEED TO SEND COUNTRYID LATER SO SENDING 88 WHICH IS FINLAND COUNTRYID

        88,
        profileData.regionId,
        state.inputs.CITY.value ? state.inputs.CITY.value : "-",
        state.inputs.POSTALCODE.value ? state.inputs.POSTALCODE.value : "-",
        state.inputs.EMAIL.value,
        profileData?.organizationName,
        profileData?.yTunnus,
        profileData?.dateOfBirth,
        state.inputs.ADDRESS.value
      );
      response?.data?.status === "ok"
        ? CustomToast("Profile Updated")
        : CustomToast(
            response?.data?.message || "Something went wrong.please try later",
            "error"
          );

      setLoading(false);
    } catch (err) {
      console.log(err);
      CustomToast("Something went wrong.please try later", "error");
      setLoading(false);
    }
  };
  return (
    profileData?.email && (
      <ProfileForm
        formSubmitHandler={formSubmitHandler}
        loading={loading}
        profileData={profileData}
        state={state}
        InputHandler={InputHandler}
      />
    )
  );
};

export default ProfileItem;
