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
import { useCreateLab } from "../hooks/useCreateLab";
import { useGetPatientByFile } from "../hooks/useGetPatientByFile";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ icon, title }) {
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit, reset } = useForm();
    const { conductLabTest } = useCreateLab();
    const [fileNumber, setFileNumber] = React.useState("");

    // Get patient by file
    const handleFileSearch = () => {
        console.log("handleFileSearch");
        const { patient } = useGetPatientByFile(fileNumber);
        console.log("<----response---->", patient.fileNumber, patient);
    };

    const onSubmit = (data) => {
        console.log(data);
        if (data.testName === "other" || data.fileNumber === 0) return;

        conductLabTest(data, {
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
            <Button variant="contained" onClick={handleClickOpen}>
                <h3 className="flex gap-2 items-center justify-center">
                    {icon} {title}
                </h3>
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
                            <Form title="File Number">
                                <input
                                    onBlur={handleFileSearch}
                                    onChange={(e) => setFileNumber(e.target.value)}
                                    type="text"
                                    {...register("fileNumber")}
                                    placeholder="Enter file Number"
                                    className="placeholder:text-gray-500 placeholder:font-light placeholder:px-5 w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none"
                                />
                            </Form>

                            <div className="flex flex-col gap-2 w-full  pl-5  justify-center items-start">
                                <h3 className="text-md font-light text-gray-500">
                                    Select a lab test
                                </h3>
                                <label
                                    htmlFor=""
                                    className="w-full flex border border-slate-400 shadow-sm rounded-md bg-white mb-5 p-3 focus:border focus:border-slate-700 "
                                >
                                    <select
                                        {...register("testName")}
                                        className="text-gray-500 w-full focus:outline-none font-light"
                                    >
                                        <option value="other">Select lab test type</option>
                                        <option value="sugar analysis">Sugar analysis</option>
                                        <option value="fpc">FPC</option>
                                        <option value="vitemsin D">Vitamins D</option>
                                        <option value="Complete blood count">FPC</option>
                                    </select>
                                </label>
                            </div>
                            <Button>Save</Button>
                        </form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
