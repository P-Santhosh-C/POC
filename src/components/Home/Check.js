import React, { useContext, useEffect, useState } from "react";
import { store } from "../Store/store";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Check = () => {
  const token = useContext(store);
  const [data, setData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/myprofile", {
        headers: {
          "x-token": token[0],
        },
      })
      .then((res) => {
        console.log(data);
        if (data && data.category === "Admin") {
          history.push("/admin/dashboard");
        }

        if (data && data.category === "Doctor") {
          history.push("/doctor/dashboard");
        }

        if (data && data.category === "Patient") {
          history.push("/patient/dashboard");
        }
        setData(res.data);
      })
      .catch((err) => console.log(err));
  });

  return <div></div>;
};

export default Check;
