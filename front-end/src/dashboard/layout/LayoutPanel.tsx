import "./layoutPanel.scss";

//* Importing images
import iconBack from "../../images/back.png";

//* Importing types
import { typeLayoutPanel } from "../../types/types";

//* Importing custom hook
import { useLayoutPanel } from "./useLayoutPanel";

export const LayoutPanel = ({ children, title, isOpenMessage = false }: typeLayoutPanel) => {

    const { onClickButtonBack } = useLayoutPanel();

    return (
        <div className="layoutPanel animate__animated animate__fadeIn">

            <div className="layoutPanel__container">

                <div className="layoutPanel__container__buttonTitle">

                    {isOpenMessage && (
                        <>
                            <button onClick={ onClickButtonBack }>
                                <img src={ iconBack } alt="" />
                            </button>

                            <div/>
                        </>
                    )}

                    <h1>{ title }</h1>

                </div>

                { isOpenMessage &&  
                    <div className="layoutPanel__container__date">
                        <h2>18/02/2024 3:12 p. m.</h2>
                    </div>
                }

            </div>

            <hr className="layoutPanel__divisor"/>

            { children }

        </div>
    );

}
