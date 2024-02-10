import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows, columns } from './data';
import Header from "../../components/Header";

export default function contacts() {
  return (
    <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
      <Header title={"CONTACTS"} subTitle={"List of Contacts for Future Reference"} isDashboard={false} />

      <DataGrid
        checkboxSelection
        slots={{
          toolbar: GridToolbar,
          // @ts-ignore
        }} columns={columns} rows={rows}
      />
    </Box>
  )
}
