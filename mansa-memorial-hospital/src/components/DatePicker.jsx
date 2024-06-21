import { DateRangePicker } from "react-date-range";

const DatePicker = () => {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  const handleSelect = () => {};
  return <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />;
};

export default DatePicker;
