'use client';
import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa6';

import { findAllParent, findMenuItem, getMenuItemFromURL } from '@/helpers/menu';
import { cn } from '@/helpers';
import { MenuItemTypes } from '@/constants';

type SubMenus = {
  item: MenuItemTypes;
  linkClassName?: string;
  activeMenuItems?: Array<string>;
  toggleMenu?: (item: any, status: boolean) => void;
  className?: string;
  level: number;
};

type SubmenuListProps = {
  items: MenuItemTypes[];
  level: number;
  toggleMenu?: (item: MenuItemTypes, status: boolean) => void;
  activeMenuItems?: string[];
};

const MenuItemWithChildren = ({
  item,
  activeMenuItems,
  toggleMenu,
  level,
}: SubMenus) => {
  const [open, setOpen] = useState<boolean>(
    activeMenuItems!.includes(item.key)
  );

  useEffect(() => {
    if (activeMenuItems?.includes(item.key)) {
      setOpen(true);
    }
  }, [activeMenuItems, item.key]);

  const handleToggle = () => {
    const status = !open;
    setOpen(status);
    if (toggleMenu) toggleMenu(item, status);
  };

  // Case 1: The parent item is JUST a category toggle
  if (!item.url) {
    return (
      <li className={cn('relative', level === 1 ? 'w-full' : '')}>
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center justify-between w-full py-2"
        >
          <span
            className={cn(
              'font-medium',
              activeMenuItems?.includes(item.key)
                ? 'text-[#8a50bc]'
                : 'text-gray-800'
            )}
          >
            {item.label}
          </span>
          <FaChevronDown
            size={12}
            className={cn(
              'transition-transform duration-200',
              open ? 'rotate-180' : ''
            )}
          />
        </button>
        <div
          className={cn(
            'transition-all duration-300 overflow-hidden',
            open ? 'block' : 'hidden',
            level > 1 ? 'ps-3' : 'ps-2'
          )}
        >
          <SubmenuList
            items={item.children ?? []}
            level={level + 1}
            toggleMenu={toggleMenu}
            activeMenuItems={activeMenuItems}
          />
        </div>
      </li>
    );
  }

  return (
    <li className={cn('relative', level === 1 ? 'w-full' : '')}>
      <div className="flex items-center justify-between">
        <Link
          href={item.url}
          className={cn(
            'font-medium flex-1 py-2',
            activeMenuItems?.includes(item.key)
              ? 'text-[#8a50bc]'
              : 'text-gray-800'
          )}
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={handleToggle}
          className={cn(
            'p-2 -me-2 transition-transform duration-200',
            open ? 'rotate-180' : ''
          )}
        >
          <FaChevronDown size={12} />
        </button>
      </div>
      <div
        className={cn(
          'transition-all duration-300 overflow-hidden',
          open ? 'block' : 'hidden',
          level > 1 ? 'ps-3' : 'ps-2'
        )}
      >
        <SubmenuList
          items={item.children ?? []}
          level={level + 1}
          toggleMenu={toggleMenu}
          activeMenuItems={activeMenuItems}
        />
      </div>
    </li>
  );
};

const SubmenuList = ({
  items,
  level,
  toggleMenu,
  activeMenuItems,
}: SubmenuListProps) => {
  return (
    <ul className="py-1 space-y-1" aria-label="submenu">
      {items.map((child) => (
        <Fragment key={child.key}>
          {child.children ? (
            <MenuItemWithChildren
              item={child}
              level={level}
              toggleMenu={toggleMenu}
              activeMenuItems={activeMenuItems}
            />
          ) : (
            <MenuItem item={child} level={level} className="nav-item" />
          )}
        </Fragment>
      ))}
    </ul>
  );
};

const MenuItem = ({ item, className, linkClassName, level }: SubMenus) => {
  return (
    <li className={className}>
      <MenuItemLink item={item} className={linkClassName} level={level + 1} />
    </li>
  );
};

const MenuItemLink = ({ item, className }: SubMenus) => {
  const activeMenuItems = usePathname() === item.url ? 'active' : '';
  return (
    <Link
      className={cn(
        'nav-link flex py-2 text-gray-700',
        activeMenuItems && 'text-[#8a50bc] font-semibold',
        className
      )}
      href={item.url ?? '#'}
      target={item.target ?? '_self'}
      data-menu-key={item.key}
    >
      {item.label}
    </Link>
  );
};

type AppMenuProps = {
  menuItems: MenuItemTypes[];
  isVertical?: boolean;
};

const AppMenu = ({ menuItems, isVertical = false }: AppMenuProps) => {
  const [activeMenuItems, setActiveMenuItems] = useState<string[]>([]);
  const location: string = usePathname();

  const toggleMenu = (menuItem: MenuItemTypes, show: boolean) => {
    if (show) {
      setActiveMenuItems([menuItem.key, ...findAllParent(menuItems, menuItem)]);
    }
  };

  const activeMenu = useCallback(() => {
    const matchingMenuItem = getMenuItemFromURL(menuItems, location);
    if (matchingMenuItem) {
      const activeItems = findAllParent(menuItems, matchingMenuItem);
      activeItems.push(matchingMenuItem.key);
      setActiveMenuItems(activeItems);
    }
  }, [location, menuItems]);

  useEffect(() => {
    activeMenu();
  }, [activeMenu]);

  return (
    <ul
      className={cn(
        'flex items-center',
        isVertical
          ? 'flex-col items-start gap-y-1 w-full'
          : 'flex-row gap-x-3 justify-center'
      )}
    >
      {(menuItems ?? []).map((item) => (
        <Fragment key={item.key}>
          {item.children ? (
            <MenuItemWithChildren
              item={item}
              level={1}
              toggleMenu={toggleMenu}
              activeMenuItems={activeMenuItems}
            />
          ) : (
            <MenuItem
              item={item}
              level={1}
              className={cn(isVertical ? 'w-full' : 'nav-item')}
            />
          )}
        </Fragment>
      ))}
    </ul>
  );
};

export default AppMenu;