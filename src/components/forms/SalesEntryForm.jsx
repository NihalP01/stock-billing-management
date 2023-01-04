import React, { useEffect, useState } from "react";
import api from "../../api/axios";

const SalesEntryForm = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    api
      .get("todos/1")
      .then((res) => {
        // handle success
        console.log(res);
        setData(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return <div>This is SalesEntryForm</div>;
};

export default SalesEntryForm;
