
import { Box } from '@mui/material';
import Line from './Line';
import Header from '../../components/Header';





// eslint-disable-next-line react/prop-types
const LineChart = () => {

  return (
    <Box sx={{ height: "75vh" }}>
      <Header title={"Line Chart"} subTitle={"Simple Line Chart"} isDashboard={false} />
      <Line />
    </Box>
  );
};

export default LineChart;