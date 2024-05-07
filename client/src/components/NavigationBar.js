import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const NavigationBar = () => {
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();

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
        // key: 1,
        // keyName: "",
        command: () => {
          navigate("/about");
        },
        // url: "/about",
        // to: "/about",
        // tag: Link,
        // path: ["/about"],
      },
      {
        label: "Manage",
        // to: "/manage",
        icon: "pi pi-fw pi-file-edit",
        items: [
          {
            label: "Assets",
            icon: "pi pi-fw pi-wallet",
            // key: 2,
            // keyName: "",
            command: () => {
              navigate("/assets");
            },
            // url: "/assets",

            // tag: Link,
            // path: ["/assets"],
          },
          {
            label: "Categories",
            icon: "pi pi-fw pi-list",
            // key: 3,
            // keyName: "",
            command: () => {
              navigate("/categories");
            },
            // url: "/categories",
            // tag: Link,
            // path: ["/categories"],
          },
          {
            label: "Locations",
            icon: "pi pi-fw pi-globe",
            // key: 4,
            // keyName: "",
            command: () => {
              navigate("/locations");
            },
            // url: "/locations",
            // tag: Link,
            // path: ["/locations"],
          },
        ],
      },
    ]);
  }, [navigate]);

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
      {/* {console.log("menu", menu)} */}
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

      {/* <Menubar model={items} start={start} end={end} />; */}
    </>
  );
};

export default NavigationBar;
