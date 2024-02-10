import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import { Typography, useTheme, Box } from '@mui/material';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from '../../components/Header';



const Team = () => {
  const theme = useTheme();
  const columns = [
    { field: 'id', headerName: 'ID', width: 33, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: 'Name', align: 'center', headerAlign: 'center' },
    { field: 'email', headerName: 'Email', flex: 1, align: 'center', headerAlign: 'center' },
    { field: 'age', headerName: 'Age', align: 'center', headerAlign: 'center' },
    { field: 'phone', headerName: 'Phone', flex: 1, align: 'center', headerAlign: 'center' },
    {
      field: 'access', headerName: 'Access', flex: 1, align: 'center', headerAlign: 'center', renderCell: ({ row: { access } }) => {
        return (
          <Box sx={{
            p: "5px",
            width: "99px",
            borderRadius: "3px",
            textAlign: "center",
            display: "flex",
            justifyContent: "space-evenly",
            // @ts-ignore
            backgroundColor: access === "Admin" ? theme.palette.primary.dark : access === "Manager" ? theme.palette.secondary.dark : "#3da58a",
          }}>
            {access === "Admin" ? <AdminPanelSettingsOutlined sx={{ fontSize: '1.3rem', color: "white" }} /> : access === "Manager" ? <LockOpenOutlined sx={{ fontSize: '1.3rem', color: "white" }} /> : <SecurityOutlined sx={{ fontSize: '1.3rem', color: "white" }} />}
            <Typography variant="body1" sx={{ fontSize: "13px", color: "white" }}>
              {access}
            </Typography>
          </Box>
        )
      }
    },
  ];

  return (
    <Box sx={{ height: 600, width: '98%', mx: "auto" }}>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} isDashboard={false} />
      <DataGrid rows={rows}
        // @ts-ignore
        columns={columns} />
    </Box>
  )
}
export default Team;