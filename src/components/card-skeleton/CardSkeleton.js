import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

// styles
import skeletonStyles from "./cardSkeleton.module.scss";

const CardSkeleton = () => {
    return (
        <>
            <div className={skeletonStyles.tableWrapper}>
            <table cellSpacing="0">
                <colgroup>
                <Skeleton count={2} style={{"background-color":"#ffff"}} />
                </colgroup>
                <thead>
                <tr>
                    <Skeleton count={7} />
                </tr>
                </thead>
                <tbody>
                    <Skeleton count={4} />
                </tbody>
            </table>
            </div>

        </>
      );
}
 
export default CardSkeleton;