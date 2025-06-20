'use client'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import DashboardCard from '../shared/DashboardCard';
import { ApexOptions } from "apexcharts";

const ApexArea = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;

  const optionsareachart: ApexOptions = {
    chart: { type: "area", height: 350, toolbar: { show: false } },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth' },
    xaxis: { type: "datetime" },
    fill: { type: "gradient", gradient: { shadeIntensity: 1, opacityFrom: 0.7, opacityTo: 0.9 } },
    colors: [primary],
  };

  const seriesareachart = [{
    name: "Revenue",
    data: [[new Date("2024-01-01").getTime(), 30], [new Date("2024-02-01").getTime(), 40], [new Date("2024-03-01").getTime(), 35], [new Date("2024-04-01").getTime(), 50], [new Date("2024-05-01").getTime(), 49], [new Date("2024-06-01").getTime(), 60]]
  }];

  return (
    <DashboardCard title="Area Chart" subtitle="Revenue Trends">
      <Chart options={optionsareachart} series={seriesareachart} type="area" height={350} width={"100%"} />
    </DashboardCard>
  );
};
export default ApexArea;
