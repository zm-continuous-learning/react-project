import React, { useState } from "react";
import { ROUTER_ITEM } from "../../Router/Router";
import {Menu, MenuProps} from "antd";
import {useNavigate} from "react-router-dom";

const Aside = () => {
  const [router] = useState(ROUTER_ITEM);
  const storageSelectKeys = sessionStorage.getItem('setSelectKeys');
  const [selectKey,setSelectKeys]=useState(storageSelectKeys);
  const navigate = useNavigate()
  const handlerMenu: MenuProps['onClick'] = (e) => {
      const keyPth = e.keyPath.reverse().join("/");
      navigate('/'+keyPth);

      //存储选中菜单的key
      sessionStorage.setItem('setSelectKeys',e.key);
      setSelectKeys(e.key);

  }
  return (
    <div>
      <Menu items={router}
            mode="inline"
            onClick={handlerMenu}
            defaultOpenKeys={['layout']}
            defaultSelectedKeys={selectKey}
      />
    </div>
  );
};
export default Aside;
