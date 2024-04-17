interface Children {
  icon?: string;
  path?: string;
  title: string;
  type?: string;
  blank?: string;
  children?: Array<Children>;
}
export interface Menu {
  path: string;
  icon: string;
  title: string;
  type?: string;
  exact?: any;
  navheader?: boolean;
  children?: Array<Children>;
}
const menu: Array<Menu> = [
  {
    path: "/home",
    icon: "nav-icon fas fa-tachometer-alt",
    title: "Home"
  },
  {
    path: "/",
    icon: "nav-icon fas fa-database",
    title: "Touch",
    children: [
      {
        path: "/holidays",
        title: "Holidays"
      },
      {
        path: "/sickness",
        title: "Sickness"
      },
      {
        path: "/onetoone",
        title: "One to One"
      },
      {
        path: "/documents",
        title: "Documents"
      },
      {
        path: "/emergency-contacts",
        title: "Emergency Contacts"
      },
      {
        path: "/personal-history",
        title: "Personal History"
      },
      {
        path: "/medical-facts",
        title: "Medical Facts"
      },
      {
        path: "/administration",
        title: "Administration"
      }
    ]
  },
  {
    path: "/",
    icon: "nav-icon fas fa-database",
    title: "Menu Level",
    children: [
      {
        path: "/",
        title: "Level 1"
      },
      {
        path: "",
        title: "Level 2",
        icon: "nav-icon fas far fa-circle nav-icon",
        children: [
          {
            path: "/",
            title: "Sub Level 2"
          },
          {
            path: "/",
            title: "Sub Level 3"
          },
          {
            path: "/",
            title: "Sub Level 4"
          }
        ]
      },
      {
        path: "/",
        title: "Level 3"
      }
    ]
  }
];

export default menu;
