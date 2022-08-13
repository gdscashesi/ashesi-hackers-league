//libraries

//styles
import SideNavStyles from "./admin-side-nav.module.scss";

//Components
import Button from "components/button/Button";
import { NavigationButtons } from "./NavigationButtons";

const AdminSideNav = () => {
  return (
    <nav className={SideNavStyles.wrapper}>
      {NavigationButtons?.map((button) => {
        return (
          <Button
            key={button.text}
            icon={button.icon}
            text={button.text}
            to={button.to}
          />
        );
      })}
    </nav>
  );
};

export default AdminSideNav;
