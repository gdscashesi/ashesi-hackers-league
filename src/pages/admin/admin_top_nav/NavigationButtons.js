//components
import { 
    InsightsIcon, 
    PublishedIcon, 
    ReportsIcon,
    NewIcon
} from 'components/icons/Icons'

//utils
import { 
    HOME,
    ADMIN,
    INSIGHTS,
    PUBLISHED,
    REPORTS,
    NEW,
    EXTRA
} from "utils/constants"


export const NavigationButtons = [
    {
        icon:<NewIcon />,
        text:NEW,
        to:`${ADMIN}${HOME}${NEW}`
    },
    {
        icon:<InsightsIcon />,
        text:INSIGHTS,
        to:`${ADMIN}${HOME}${INSIGHTS}`
    },
    {
        icon:<ReportsIcon />,
        text:REPORTS,
        to:`${ADMIN}${HOME}${REPORTS}`
    },
    {
        icon:<PublishedIcon />,
        text:PUBLISHED,
        to:`${ADMIN}${HOME}${PUBLISHED}`
    },
    {
        icon:<PublishedIcon />,
        text:EXTRA,
        to:`${ADMIN}${HOME}${EXTRA}`
    },
]

