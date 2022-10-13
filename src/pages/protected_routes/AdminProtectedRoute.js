//libraries
import { Navigate, Outlet } from "react-router-dom";
import AdminSideNav from "pages/admin/admin_top_nav/AdminSideNav";

import {
  bannerStyle,
  outletWrapperStyle,
  adminWrapperStyle,
  bannerOutletWrapperStyle,
} from "./InlineStyles";
<<<<<<< HEAD

// contexts
import AdminContextProvider from "contexts/AdminContext";
=======
>>>>>>> 9b9096a768ffff0b50fb550ddbcf840b78413406

const AdminProtectedRoute = () => {
  //getting admin from state management, but null for now
  const admin = true;

  return (
    <>
      {admin ? (
<<<<<<< HEAD
        <AdminContextProvider>
          <div style={{ ...adminWrapperStyle }}>
            <AdminSideNav />
            <div style={{ ...bannerOutletWrapperStyle }}>
              <div style={{ ...bannerStyle }}>Ashesi Hackers League</div>
              <div
                style={{
                  ...outletWrapperStyle,
                }}
              >
                <Outlet />{" "}
              </div>
            </div>
          </div>
        </AdminContextProvider>
=======
        <div style={{ ...adminWrapperStyle }}>
          <AdminSideNav />
          <div style={{ ...bannerOutletWrapperStyle }}>
            <div style={{ ...bannerStyle }}>Ashesi Hackers League</div>
            <div
              style={{
                ...outletWrapperStyle,
              }}
            >
              <Outlet />{" "}
            </div>
          </div>
        </div>
>>>>>>> 9b9096a768ffff0b50fb550ddbcf840b78413406
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default AdminProtectedRoute;
