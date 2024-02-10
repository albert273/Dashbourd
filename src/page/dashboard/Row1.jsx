import { Stack, useTheme } from "@mui/material";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";


export default function Row1() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1}  justifyContent={{ xs: "center", sm: "space-between" }} marginTop={"20px"}>
      <Card icon={<EmailIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"Emails Sent"} number={"12,361"} increase={"+14%"} scheme={"nivo"} data={data1} />
      <Card icon={<PointOfSaleIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"Sales obtained"} number={"431,225"} increase={"+21%"} scheme={"category10"} data={data2} />
      <Card icon={<PersonAddIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"New Clients"} number={"32,441"} increase={"+5%"} scheme={"accent"} data={data3} />
      <Card icon={<TrafficIcon sx={{ fontSize: "23px", color: theme.palette.secondary.main }} />} title={"Traffic Received"} number={"1,325,134"} increase={"+43%"} scheme={"dark2"} data={data4} />
    </Stack>
  )
}