/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "../components/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import Slide from "@mui/material/Slide";
import Form from "./Form";
import { useForm } from "react-hook-form";
import { useCreateTest } from "../hooks/useCreateTest";
import { GrTest } from "react-icons/gr";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, reset } = useForm();
  const { createTest } = useCreateTest();



  const onSubmit = (data) => {
    console.log(data);
    if (data.name === "" || data.time === 0 || data.description === "") return;

    createTest(data, {
      onSettled: () => {
        reset();
      },
    });
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} icon={<GrTest />}>
        New lab tests
      </Button>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ width: "500px", padding: "10px" }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              action="POST"
              className="flex flex-col gap-3 w-full justify-center items-center"
            >
              <Form title="Test name">
                <input
                  type="text"
                  {...register("name")}
                  placeholder="Enter test name"
                  className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                />
              </Form>
              <Form title="Time">
                <input
                  type="number"
                  {...register("time")}
                  placeholder="Enter test duration"
                  className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                />
              </Form>
              <Form title="Description">
                <input
                  type="text"
                  {...register("description")}
                  placeholder="Enter a description"
                  className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                />
              </Form>

              <Button>Add Test</Button>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
