import Button from "components/button/Button";
import { InsightsIcon, PublishedIcon } from "components/icons/Icons";

const Simon = () => {
  return (
    <div>
      <Button text="hello" />
      <Button text="hello" icon={<InsightsIcon />} />
      <Button text="hello" icon={<PublishedIcon />} to="/" />
    </div>
  );
};

export default Simon;
