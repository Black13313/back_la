interface MenuItem {
  name: string;
  route: string;
}

//type MenuItemAarray = Array<MenuItem>

export default interface MenuModel {
  name: string;
  icon: string;
  route: string;
  isParent: boolean;
  menuItems?: MenuItem[];
}
