//libraries

//styles
import TopNavStyles from './admin-top-nav.module.scss'

//Components
import Button from 'components/button/Button'
import { InsightsIcon, NewIcon, PublishedIcon, ReportsIcon, ToggleIcon } from 'components/icons/Icons'

//utils
import { 
    HOME,
    ADMIN,
    INSIGHTS,
    PUBLISHED,
    REPORTS,
    NEW
} from "utils/constants"


const AdminTopNav = () => {
  return (
    <nav className={TopNavStyles.wrapper}>
        <span className={TopNavStyles.newBtn}>
            <Button 
                icon = {<NewIcon />}
                text = "New"
                to = {ADMIN + HOME + NEW}
            />
        </span>
        <button className={TopNavStyles.toggleBtn}>
            <ToggleIcon />
        </button>
        <div className={TopNavStyles.navItems}>
            <ul>
                <li>
                    <Button 
                        icon = {<InsightsIcon />}
                        text="insights" 
                        to={ADMIN + HOME + INSIGHTS}
                    />
                </li>
                <li>
                    <Button 
                        icon = {<ReportsIcon />}
                        text="reports" 
                        to={ADMIN + HOME + REPORTS}
                    />
                </li>
                <li>
                    <Button 
                        icon = {<PublishedIcon />}
                        text="published" 
                        to={ADMIN + HOME + PUBLISHED}
                    />               
                </li>
                <li>
                    <Button 
                        icon = {<PublishedIcon />}
                        text="extra" 
                        to={ADMIN + HOME + PUBLISHED}
                    />
                    
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default AdminTopNav