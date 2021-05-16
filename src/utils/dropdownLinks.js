import { CgProfile, CgShoppingBag } from 'react-icons/cg';
import { GoListOrdered } from 'react-icons/go';

export const dropdownLinks = [
  {
    id: 1,
    icon: <CgProfile />,
    text: 'View Profile',
    path: '/user',
  },
  {
    id: 2,
    icon: <CgShoppingBag />,
    text: 'View Cart',
    path: '/cart',
  },
  {
    id: 3,
    icon: <GoListOrdered />,
    text: 'Your Orders',
    path: '/order',
  },
];
