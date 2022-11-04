import preloader from '../../../assets/img/preloader.gif'
import {FC} from "react";

const Preloader: FC = () => {
    return (
        <div>
            <img src={preloader} alt=""/>
        </div>
    )
}

export default Preloader