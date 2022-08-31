//libraries
import { Navigate, Outlet } from "react-router-dom";
import AdminSideNav from "pages/admin/admin_top_nav/AdminSideNav";

import {
  bannerStyle,
  outletWrapperStyle,
  adminWrapperStyle,
  bannerOutletWrapperStyle,
} from "./InlineStyles";

const AdminProtectedRoute = () => {
  //getting admin from state management, but null for now
  const admin = true;

  return (
    <>
      {admin ? (
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
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default AdminProtectedRoute;
