//libraries
import { Navigate, Outlet } from "react-router-dom";
import AdminTopNav from "pages/admin/admin_top_nav/AdminTopNav";

const AdminProtectedRoute = () => {
  //getting admin from state management, but null for now
  const admin = true;

  return (
    <>
      {admin ? (
        <div>
          <AdminTopNav />
          <Outlet />{" "}
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default AdminProtectedRoute;
