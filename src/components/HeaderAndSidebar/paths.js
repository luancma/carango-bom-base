export const paths = {
  home: "/",
  vehicleCreate: "/vehicle-new",
  vehicleEdit: "/vehicle-edit",
  vehicleList: "/vehicles",
  brandCreate: "/cadastro-marca",
  brandEdit: "/alteracao-marca",
  userCreate: "/user-new",
  userList: "/users",
};

export const routeTitles = [
  { path: paths.home, title: "Carango Bom", showInSidebar: false },
  { path: paths.vehicleList, title: "Veículos", showInSidebar: true },
  {
    path: paths.vehicleCreate,
    title: "Cadastrar Veículo",
    showInSidebar: true,
  },
  { path: paths.vehicleEdit, title: "Editar Veículo", showInSidebar: false },
  { path: paths.brandCreate, title: "Cadastrar Marca", showInSidebar: true },
  { path: paths.brandEdit, title: "Editar Marca", showInSidebar: false },
  { path: paths.userList, title: "Usuários", showInSidebar: true },
  { path: paths.userCreate, title: "Cadastrar Usuário", showInSidebar: true },
];
