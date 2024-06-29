/* eslint-disable react/prop-types */
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { MdDragIndicator } from "react-icons/md";

// If you're using Next.js please use the dynamic import for react-apexcharts and remove the import from the top for the react-apexcharts
// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
// function convertMinutesToTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const remainingMinutes = minutes % 60;

//   // Pad single-digit minutes with a leading zero
//   const paddedMinutes =
//     remainingMinutes < 10 ? "0" + remainingMinutes : remainingMinutes;

//   return hours + ":" + paddedMinutes;
// }

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "minutes",
      data: ["20", "40", "50", "40"],
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
    colors: ["#004F9E"],
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
          fontSize: "8px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: ["WOUND DRESS", "CONSULTING", "ANTI NATAL", "OUTREACH"],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "10px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
        rotate: 0,
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
    <Card className="w-[400px] h-[300px] rounded-md shadow-sm ">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex  gap-4 rounded-none md:flex-row md:items-center text-sm "
      >
        <div className="p-2 flex justify-center items-center gap-2">
          <div className="w-2 h-2 bg-[#004F9E] rounded-full"></div>
          <h3 className="text-[10px] font-semibold">
            Outpatients Patients visit statistics
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
