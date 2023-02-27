import React, { useState } from "react";
import { ROUTER_ITEM } from "../../Router/Router";
import {Menu, MenuProps} from "antd";
import {useNavigate} from "react-router-dom";

const Aside = () => {
  const [router] = useState(ROUTER_ITEM);
  const navigate = useNavigate()
  const handlerMenu: MenuProps['onClick'] = (e) => {
      const keyPth = e.keyPath.reverse().join("/");
      navigate('/'+keyPth);
      console.log(keyPth)

  }
  return (
    <div>
      <Menu items={router} mode="inline" onClick={handlerMenu} />
    </div>
  );
};
export default Aside;
