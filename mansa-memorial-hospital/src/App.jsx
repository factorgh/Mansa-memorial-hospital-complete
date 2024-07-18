import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Employees from "./pages/Employees";
import BaseTemplate from "./pages/BaseTemplate";
import Settings from "./pages/Settings";
import HelpAndSupport from "./pages/HelpAndSupport";
import LabTests from "./pages/LabTests";
import Account from "./pages/Account";
import Details from "./pages/Details";
import EditPagePatient from "./pages/EditPagePatient";
import EditPageUser from "./pages/EditPageUser";
import EditPageTest from "./pages/EditPageTest";
import NewPatient from "./pages/NewPatient";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DisplayPage from "./pages/DisplayPage";
import DisplayPatients from "./pages/DisplayPatients";

import { TimerProvider } from "./context/timerContext";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5000,
        },
    },
});
function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <TimerProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/*" element={<LoginPage />} />
                            <Route path="/display" element={<DisplayPage />} />
                            <Route path="/patient-display" element={<DisplayPatients />} />
                            <Route element={<BaseTemplate />}>
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/patients" element={<Patients />} />
                                <Route path="/employees" element={<Employees />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="/support" element={<HelpAndSupport />} />
                                <Route path="/lab-tests" element={<LabTests />} />
                                <Route path="/account" element={<Account />} />
                                <Route path="/details" element={<Details />} />
                                <Route exact path="/edit/:id" element={<EditPagePatient />} />
                                <Route path="/edit/user/:id" element={<EditPageUser />} />
                                <Route path="/edit/test/:id" element={<EditPageTest />} />
                                <Route path="/new" element={<NewPatient />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </TimerProvider>

                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    containerStyle={{ marginTop: "20px" }}
                    toastOptions={{
                        success: {
                            duration: 500,
                        },
                        style: {
                            fontSize: "16px",
                            maxWidth: "500px",
                            padding: "16px 24px",
                            backgroundColor: "#FFF",
                            color: "#475833",
                        },
                    }}
                />
            </QueryClientProvider>
        </>
    );
}

export default App;
