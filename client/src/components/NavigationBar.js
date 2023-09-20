import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";

const NavigationBar = () => {
  const [menu, setMenu] = useState([]);
  const menuRight = useRef(null);
  // const items = [
  //   {
  //     label: "About",
  //     icon: "pi pi-fw pi-user",
  //   },
  //   {
  //     label: "Manage",
  //     icon: "pi pi-fw pi-file-edit",
  //     items: [
  //       {
  //         label: "Assets",
  //         icon: "pi pi-fw pi-wallet",
  //       },
  //       {
  //         label: "Categories",
  //         icon: "pi pi-fw pi-list",
  //       },
  //       {
  //         label: "Locations",
  //         icon: "pi pi-fw pi-globe",
  //       },
  //     ],
  //   },
  // ];

  useEffect(() => {
    setMenu([
      {
        label: "About",
        icon: "pi pi-fw pi-user",
        key: 1,
        keyName: "",
        url: "/about",
        // to: "/about",
        tag: NavLink,
        path: ["/about"],
      },
      {
        label: "Manage",
        // to: "/manage",
        icon: "pi pi-fw pi-file-edit",
        items: [
          {
            label: "Assets",
            icon: "pi pi-fw pi-wallet",
            key: 2,
            keyName: "",
            url: "/assets",

            tag: NavLink,
            path: ["/assets"],
          },
          {
            label: "Categories",
            icon: "pi pi-fw pi-list",
            key: 3,
            keyName: "",
            url: "/categories",
            tag: NavLink,
            path: ["/categories"],
          },
          {
            label: "Locations",
            icon: "pi pi-fw pi-globe",
            key: 4,
            keyName: "",
            url: "/locations",
            tag: NavLink,
            path: ["/locations"],
          },
        ],
      },
    ]);
  }, []);

  const start = <div>Asset Manager</div>;
  const end = (
    <>
      <Button
        label='Sign In'
        icon='pi pi-fw pi-sign-in'
        className='mr-2'
        aria-controls='popup_menu_right'
        aria-haspopup
      />
    </>
  );

  return (
    <>
      <div>
        {console.log("menu", menu)}
        {/* {menu.map((m) => (
          <NavLink tag={m.tag} key={m.key} to={m.to}>
            {m.label}
          </NavLink>
        ))} */}
        <Menubar model={menu} start={start} end={end} />
        {/* <Menubar
          model={menu.map((m) => (
            <NavLink tag={m.tag} key={m.key} to={m.to}>
              {m.label}
            </NavLink>
          ))}
        /> */}
      </div>
      {/* <Menubar model={items} start={start} end={end} />; */}
    </>
  );
};

export default NavigationBar;
