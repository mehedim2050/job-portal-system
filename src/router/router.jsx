// import {
//   createBrowserRouter,
// } from "react-router"; 
// import RootLayout from "../layouts/RootLayout";
// import Home from "../pages/Home/Home";
// import Register from "../pages/Register/Register";
// import SignIn from "../pages/SignIn";
// import JobDetails from "../pages/JobDetails/JobDetails";
// import PrivateRoutes from "../routes/PrivateRoutes";
// import JobApply from "../pages/JobApply/JobApply";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: RootLayout,
//     children: [
//       {
//         index: true,
//         Component: Home
//       },
//       {
//         path: "job/:id",
//         Component: JobDetails,
//         loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`)
//       },
//       {
//         path: "jobApply/:id",
//         Component: PrivateRoutes,
//         children: [
//           {
//             index: true,
//             Component: JobApply
//           }
//         ]
//       },
//       {
//         path: "/register",
//         Component: Register
//       },
//       {
//         path: "/signIn",
//         Component: SignIn
//       }
//     ]
//   },
// ]);

// export default router;
import {
  createBrowserRouter,
} from 'react-router';

import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "job/:id",
        element: <JobDetails />,
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`)
      },
     {
  path: "jobApply/:id",
  element: (
    <PrivateRoutes>
      <JobApply />
    </PrivateRoutes>
  )
},

      {
        path: "register",
        element: <Register />
      },
      {
        path: "signIn",
        element: <SignIn />
      }
    ]
  },
]);

export default router;
