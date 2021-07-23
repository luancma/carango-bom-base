import React from "react"
import { Box, makeStyles } from "@material-ui/core"
import { useGetDashboard } from "./hooks/useGetDashboard";
import DashboardItem from "./DashboardItem"

const useTheme = makeStyles({
    wrapper: { 
        height: '80vh', width: '100%', overflow: 'auto', paddingBottom: '0.5rem'
    },
    gridList: { 
        display: "grid",
        gridTemplateColumns:"repeat(auto-fill, 200px)",
        gap: "24px",
        width: "100%",
        justifyContent: "center"
    }
})

export default function Dashboard(){
    const styles = useTheme();
    const dashboardItems = useGetDashboard();

    return (
        <Box className={styles.wrapper}>
          <Box className={styles.gridList}>
            {dashboardItems.map(item => <DashboardItem key={item.brand} brandDetails={item} />)}
          </Box>
        </Box>
    )
}