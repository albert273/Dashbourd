import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../pieChart/Pie";
import Bar from "../barChart/bar";
import Geo from "../geography/geo";

export default function Row3() {
  const theme = useTheme();

  return (
    <Stack direction={"row"} sx={{mt: "20px"}} gap={2} flexWrap={"wrap"} >
      <Paper sx={{flexGrow: 1,minWidth: "400px", width: "28%", }}>
        <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px", mb:"40px"}}
          variant="h6"
          fontWeight="600"
        >
          Campaign
        </Typography>
        <Pie isDashboard={true}/>
        <Typography variant="h6" align="center" sx={{ mt: "15px" }}>
          $48,352 revenue generated
        </Typography>
        <Typography variant="body2" px={0.7} pb={3} align="center">
          Includes extra misc expenditures and costs
        </Typography>
      </Paper>


      <Paper sx={{width: "33%", minWidth: "400px", flexGrow:1}}>
                <Typography
          color={theme.palette.secondary.main}
          sx={{ padding: "30px 30px 0 30px", mb:"40px"}}
          variant="h6"
          fontWeight="600"
        >
          Sales Quantity
        </Typography>
        <Bar isDashbord={true}/>
      </Paper>
      <Paper sx={{width: "33%", minWidth: "400px", flexGrow:1, overflow: "hidden"}}>
        <Geo isDashbord={true}/>
      </Paper>
    </Stack>
  )
}
