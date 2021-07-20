export const paths = {
  home: "/",
  vehicleCreate: "/vehicle-new",
  vehicleEdit: "/vehicle-edit",
  brandCreate: "/cadastro-marca",
  brandEdit: "/alteracao-marca",
};

export const routeTitles = [
  { path: paths.home, title: "Carango Bom", showInSidebar: false },
  {
    path: paths.vehicleCreate,
    title: "Cadastrar Veículo",
    showInSidebar: true,
  },
  { path: paths.vehicleEdit, title: "Editar Veículo", showInSidebar: false },
  { path: paths.brandCreate, title: "Cadastrar Marca", showInSidebar: true },
  { path: paths.brandEdit, title: "Editar Marca", showInSidebar: false },
];
