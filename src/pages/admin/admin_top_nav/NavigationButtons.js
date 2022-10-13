//components
import { PublishedIcon, NewIcon } from "components/icons/Icons";

//utils
import { HOME, ADMIN, PUBLISHED, NEW, SETTINGS, UPDATE } from "utils/constants";

export const NavigationButtons = [
  {
    icon: <NewIcon />,
    text: NEW,
    to: `${ADMIN}${HOME}${NEW}`,
  },
  {
    icon: <PublishedIcon />,
    text: PUBLISHED,
    to: `${ADMIN}${HOME}${PUBLISHED}`,
  },
  {
    icon: <PublishedIcon />,
    text: UPDATE,
    to: `${ADMIN}${HOME}${UPDATE}`,
  },
  {
    icon: <PublishedIcon />,
    text: SETTINGS,
    to: `${ADMIN}${HOME}${SETTINGS}`,
  },
];
