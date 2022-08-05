//components
import Button from "./Button"
import {ReportsSvg, PublishedSvg, InsightSvg} from "./ButtonIcons"

//styles
import buttonStyle from "./button.module.scss";

const Test = () => {
  return (
    <div className={buttonStyle.wrapper}>
        <Button svg={<InsightSvg />} text="insight" to="/insight" />
        <Button svg={<ReportsSvg />} text="reports" to="/report" />
        <Button svg={<PublishedSvg />} text="published" to="/published" />

    </div>
  )
}

export default Test