let userRole = 3; // Bu değeri kendi kullanıcı kimliğinizle değiştirmelisiniz

//YUKARIDAKİ DEĞER DB'DEN GELEN DEĞERLE GÜNCELLENEREK ALINACAK VE AŞAĞIDAKİ NAVİGATON'LAR ONA GÖRE SEÇİLECEK

let exportedNavigation;

if (userRole === 1) { // Normal User
  exportedNavigation = [
    {
      text: 'Home',
      path: '/home',
      icon: 'home'
    },
    {
      text: 'Main Pages',
      icon: 'folder',
      items: [
        {
          text: 'Form List Page',
          path: '/form-list-page',
        },
        {
          text: 'Form Page',
          path: '/form-page',
        },
        {
          text: 'Process Management',
          path: '/process-management',
        },
  
      ]
    }
  ];
} else if (userRole === 2) { // Admin User
  exportedNavigation = [
    {
      text: 'Home',
      path: '/home',
      icon: 'home'
    },
    {
      text: 'Admin Panel',
      icon: 'folder',
      items: [
        {
          text: 'Attachment Management',
          path: '/attachment-mgmt',
        },
        {
          text: 'Capital Management',
          path: '/capital-mgmt',
        },
        {
          text: 'Currency Management',
          path: '/currency-mgmt',
        },
        {
          text: 'Department Management',
          path: '/department-mgmt',
        },
        {
          text: 'Item Management',
          path: '/item-mgmt',
        },
        {
          text: 'Mail Detail Management',
          path: '/mail-detail-mgmt',
        },
        {
          text: 'Master Approver Management',
          path: '/master-approver-mgmt',
        },
        {
          text: 'Plant Management',
          path: '/plant-mgmt',
        },
        {
          text: 'PM Cost Model Approver Management',
          path: '/pmcost-model-master-approver-mgmt',
        },
        {
          text: 'Question Management',
          path: '/question-mgmt',
        },
        {
          text: 'Type Of Request Management',
          path: '/type-of-request-mgmt',
        },
        {
          text: 'User List',
          path: '/user-list',
        },
  
      ]
    },
  ];
} else {
  // Diğer durumlar için gerekli navigasyon
  exportedNavigation = [ // ROOT
    {
      text: 'Home',
      path: '/home',
      icon: 'home'
    },
    {
      text: 'Examples',
      icon: 'folder',
      items: [
        {
          text: 'Profile',
          path: '/profile'
        },
      ]
    },
    {
      text: 'Admin Panel',
      icon: 'folder',
      items: [
        {
          text: 'Attachment Management',
          path: '/attachment-mgmt',
        },
        {
          text: 'Capital Management',
          path: '/capital-mgmt',
        },
        {
          text: 'Currency Management',
          path: '/currency-mgmt',
        },
        {
          text: 'Department Management',
          path: '/department-mgmt',
        },
        {
          text: 'Item Management',
          path: '/item-mgmt',
        },
        {
          text: 'Mail Detail Management',
          path: '/mail-detail-mgmt',
        },
        {
          text: 'Master Approver Management',
          path: '/master-approver-mgmt',
        },
        {
          text: 'Plant Management',
          path: '/plant-mgmt',
        },
        {
          text: 'PM Cost Model Approver Management',
          path: '/pmcost-model-master-approver-mgmt',
        },
        {
          text: 'Question Management',
          path: '/question-mgmt',
        },
        {
          text: 'Type Of Request Management',
          path: '/type-of-request-mgmt',
        },
        {
          text: 'User List',
          path: '/user-list',
        },
  
      ]
    },
    {
      text: 'Main Pages',
      icon: 'folder',
      items: [
        {
          text: 'Form List Page',
          path: '/form-list-page',
        },
        {
          text: 'Form Page',
          path: '/form-page',
        },
        {
          text: 'Process Management',
          path: '/process-management',
        },
  
      ]
    }
  ];
}

export const navigation = exportedNavigation;
