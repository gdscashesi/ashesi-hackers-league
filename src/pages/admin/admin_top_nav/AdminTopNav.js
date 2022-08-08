//libraries

//styles
import TopNavStyles from './admin-top-nav.module.scss'

//Components
import Button from 'components/button/Button'
import { NavigationButtons } from "./NavigationButtons"


const AdminTopNav = () => {
    
  return (
    <nav className={TopNavStyles.wrapper}>
        <div className={TopNavStyles.navItems }>
           {
            NavigationButtons?.map((button) =>{
                return(
                 <Button key={button.text} 
                    icon={button.icon} text={button.text} to={button.to}
                 />
                )}
             )
           }
        </div>
    </nav>
  )
}

export default AdminTopNav