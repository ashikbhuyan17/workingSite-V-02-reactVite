const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: "fas fa-tachometer-alt",
  },
  {
    title: "Product Management",
    icon: "fas fa-sitemap",
    iconOpened: "fa-angle-left",
    iconClosed: "fa-angle-down",
    subNav: [
      {
        title: "Custom Charges",
        path: "/custom-charge-list",
        icon: "fa-circle",
        cName: "sub-nav",
      },
      {
        title: "Products",
        path: "/product-list",
        icon: "fa-circle",
        cName: "sub-nav",
      },
      {
        title: "Location status list",
        path: "/location-status-list",
        icon: "fa-circle",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Bookings",
    icon: "fas fa-layer-group",
    iconOpened: "fa-angle-left",
    iconClosed: "fa-angle-down",
    subNav: [
      {
        title: "Bookings",
        path: "/booking-list",
        icon: "fa-circle",
        cName: "sub-nav",
      },
      {
        title: "Create New Booking",
        path: "/booking-create",
        icon: "fa-circle",
        cName: "sub-nav",
      },
      {
        title: "Promo Codes",
        path: "/promo-code-list",
        icon: "fa-circle",
        cName: "sub-nav",
      },
      {
        title: "Update Lot Status",
        path: "/update-lot-status",
        icon: "fa-circle",
        cName: "sub-nav",
      },
      {
        title: "Lot List",
        path: "/lot-list",
        icon: "fa-circle",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Payment Histories",
    path: "/payment-history-list",
    icon: "fas fa-money-bill",
    iconOpened: "fa-angle-left",
    iconClosed: "fa-angle-down",
    subNav: [
      {
        title: "Create New Payment",
        path: "/create-new-payment",
        icon: "fa-circle",
        cName: "sub-nav",
      },
      {
        title: "Payment Histories",
        path: "/payment-history-list",
        icon: "fa-circle",
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Customers",
    path: "/customer-list",
    icon: "fas fa-user-friends",
    iconOpened: "fa-angle-left",
    iconClosed: "fa-angle-down",
  },
  // {
  //   title: "Booking Tracking",
  //   path: "/order-tracking",
  //   icon: "fab fa-wpexplorer",
  // },

  {
    title: "Shipments",
    path: "/shipment-list",
    icon: "fas fa-shipping-fast",
    iconOpened: "fa-angle-left",
    iconClosed: "fa-angle-down",
  },
  {
    title: "Office Expenses",
    path: "/office-expense-list",
    icon: "fas fa-donate",
    iconOpened: "fa-angle-left",
    iconClosed: "fa-angle-down",
    subNav: [
      {
        title: "Expense Categories",
        path: "/expense-category-list",
        icon: "fa-circle",
        cName: "sub-nav",
      },
      {
        title: "Office Expenses",
        path: "/Office-expense-list",
        icon: "fa-circle",
        cName: "sub-nav",
      },
    ],
  },
  // {
  //   title: "Reports",
  //   icon: "fas fa-book",
  //   iconOpened: "fa-angle-left",
  //   iconClosed: "fa-angle-down",
  //   subNav: [
  //     {
  //       title: "Shipment",
  //       path: "/shipmentReport",
  //       icon: "fa-circle",
  //       cName: "sub-nav",
  //     },
  //     {
  //       title: "Office Expenses",
  //       path: "/expense-report",
  //       icon: "fa-circle",
  //       cName: "sub-nav",
  //     },
  //     {
  //       title: "Booking",
  //       path: "/bookingReport",
  //       icon: "fa-circle",
  //       cName: "sub-nav",
  //     },
  //   ],
  // },
  {
    title: "Users",
    path: "/user-list",
    icon: "fas fa-users",
  },
  {
    title: "Branches",
    path: "/branch-list",
    icon: "fas fa-code-branch",
  },

  {
    title: "Settings",
    path: "/company-meta-info-list",
    icon: "fas fa-cog",
    iconOpened: "fa-angle-left",
    iconClosed: "fa-angle-down",
    subNav: [
      {
        title: "Company Meta Info",
        path: "/company-meta-info-list",
        icon: "fa-circle",
        cName: "sub-nav",
      },
    ],
  },
];

export default SidebarData;
