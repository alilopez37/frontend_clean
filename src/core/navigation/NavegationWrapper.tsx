import { createBrowserRouter } from "react-router";
import NoteView from "../../features/users/presentation/pages/NoteView";
import Dashboard from "../../features/dashboard/presentation/pages/Dashboard";
import { NoteViewModel } from "../../features/users/presentation/viewmodels/NoteViewModel";

const noteViewModel = new NoteViewModel()

export const navigationWrapper = createBrowserRouter([
    {
        path: "/",
        element: <NoteView viewModel={noteViewModel} />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    }
]);