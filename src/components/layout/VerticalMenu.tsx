import { MenuItemTypes } from '@/constants';
import AppMenu from './Menu'; 

type VerticalMenuProps = {
  menuItems: MenuItemTypes[];
};

const VerticalMenu = ({ menuItems }: VerticalMenuProps) => {
  return <AppMenu menuItems={menuItems} isVertical={true} />;
};

export default VerticalMenu;