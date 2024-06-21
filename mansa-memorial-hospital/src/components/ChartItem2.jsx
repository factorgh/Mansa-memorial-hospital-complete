import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { MdDragIndicator } from "react-icons/md";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "minutes",
      data: [50, 40, 30, 20, 50, 30, 20, 30, 50],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#F78509"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 3,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

export default function ChartItem() {
  return (
    <Card className="w-[400px] h-[300px]  rounded-md shadow-sm ">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex  gap-4 rounded-none md:flex-row md:items-center text-sm "
      >
        <div className="p-2 flex justify-center items-center gap-2">
          <div className="w-2 h-2 bg-[#F78509] rounded-full"></div>
          <h3 className="text-[12px] font-semibold">
            Patients wait time for the lab test
          </h3>
        </div>
        <div className="flex gap-2 justify-between items-center  p-3 mx-auto">
          <h5 className="text-[12px]">24hours</h5>
          <MdDragIndicator className="text-gray-600" />
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartConfig} />
      </CardBody>
    </Card>
  );
}
