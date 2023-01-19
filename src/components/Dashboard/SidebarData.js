import * as React from "react";
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [


    {
      title: 'Página inicial',
      path: '/Dashboard',
      icon: <MdIcons.MdHome/>,
    },
    {
      title: 'Cadastro',
      icon: <MdIcons.MdOutlinePointOfSale/>,

      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpSFill/>,

      subNav: [
        {
          title: 'Usuários',
          path: '/Users',
          icon: <IoIcons.IoIosPaper/>,  
        },
      ]
    },
    {
      title: 'Movimentações',
      icon: <MdIcons.MdAddShoppingCart/>,

      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpSFill/>,

      subNav: [
        {
         title: 'Ponto de venda - PDV',
         path: '/PonitOfSale',
         icon: <IoIcons.IoIosPaper/>,  
        },
        {
         title: 'Pedido de venda',
         path: '/',
         icon: <IoIcons.IoIosPaper/>,  
        },
      ]
    },
    {
      title: 'Produtos',
      icon: <MdIcons.MdAccountBalance/>,

      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpSFill/>,

      subNav: [
        {
          title: 'Estoque',
          path: '/Product',
          icon: <IoIcons.IoIosPaper/>,  
        },
      ]
    },
    {
      title: 'Configurações',
      icon: <MdIcons.MdVerifiedUser/>,

      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpSFill/>,

      subNav: [
        {
          title: 'Empresa',
          path: '/Company',
          icon: <IoIcons.IoIosPaper/>,  
        },
      ]
    },
    {
      title: 'LGPD',
      icon: <MdIcons.MdVerifiedUser/>,

      iconClosed: <RiIcons.RiArrowDownSFill/>,
      iconOpened: <RiIcons.RiArrowUpSFill/>,

      subNav: [
        {
          title: 'Proteção de dados pessoais',
          path: '/',
          icon: <IoIcons.IoIosPaper/>,  
        },
      ]
    },
]