import React, { useState } from "react";
import { ROUTER_ITEM } from "../../Router/Router";

const Aside = () => {
  const [router] = useState(ROUTER_ITEM);
  return (
    <div>
      {router.map((route) => (
        <span>{route.label}</span>
      ))}
    </div>
  );
};
export default Aside;
