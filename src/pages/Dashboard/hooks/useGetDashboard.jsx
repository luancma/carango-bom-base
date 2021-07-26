import { useEffect, useState } from "react";
import DashboardService from "services/DashboardService";

export function useGetDashboard() {
  const [dashboardItems, setDashboardItems] = useState([]);
  useEffect(() => {
    const fetchDashboard = async () => {
      const resp = await DashboardService.findAll();
      if (resp) {
        return setDashboardItems(resp);
      }
      return setDashboardItems();
    };

    fetchDashboard();
  }, []);
  return dashboardItems;
}
