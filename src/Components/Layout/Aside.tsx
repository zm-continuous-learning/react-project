import React, {useState} from "react";
import {ROUTER_ITEM} from "../../Router/Router";
import {Menu, MenuProps} from "antd";
import {useNavigate} from "react-router-dom";

const Aside = () => {
    const [router] = useState(ROUTER_ITEM);
    const storageSelectKeys = sessionStorage.getItem('setSelectKeys');
    const [selectKey, setSelectKeys] = useState(storageSelectKeys);
    const defaultOpenKey = JSON.parse(sessionStorage.getItem('setOpenKey'));
    const [openKey, setOpenKey] = useState(defaultOpenKey);
    const navigate = useNavigate()
    const handlerMenu: MenuProps['onClick'] = (e) => {
        const keyPth = e.keyPath;
        const copyKeyPath = JSON.parse(JSON.stringify(keyPth));
        setOpenKey(copyKeyPath.slice(1));
        sessionStorage.setItem('setOpenKey', JSON.stringify(copyKeyPath.slice(1)));

        const router = keyPth.reverse().join("/");
        navigate('/' + router);

        //存储选中菜单的key
        sessionStorage.setItem('setSelectKeys', e.key);
        setSelectKeys(e.key);


    }
    return (
        <div>
            <Menu items={router}
                  mode="inline"
                  onClick={handlerMenu}
                  defaultOpenKeys={openKey}
                  defaultSelectedKeys={selectKey}
            />
        </div>
    );
};
export default Aside;
