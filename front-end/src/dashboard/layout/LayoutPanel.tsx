import "./layoutPanel.scss";

//* Importing images
import iconBack from "../../images/back.png";

//* Importing types
import { typeLayoutPanel } from "../../types/types";

export const LayoutPanel = ({ children, title, isOpenMessage = false }: typeLayoutPanel) => {
  return (
    <div className="layoutPanel">

        <div className="layoutPanel__container">

            <div className="layoutPanel__container__buttonTitle">

                {isOpenMessage && (
                    <>
                        <button>
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
