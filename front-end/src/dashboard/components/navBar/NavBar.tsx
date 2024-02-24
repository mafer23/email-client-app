import "./_navBar.scss";

//* Importing images
import iconAdd from "../../../images/add.png";

//* Importing custom hook
import { useNavBar } from "./useNavBar";

export const NavBar = () => {

    const { dataButtonOptions } = useNavBar();

    return (
        <div className="navBar">

            <button>
                <img src={ iconAdd } alt="" />
                New Message
            </button>

            <div className="navBar__options">

                {
                    dataButtonOptions.map(({ icon, id, name, amount }) => 
                    
                        <button key={ id }>

                            <div className="titleIcon">
                                <div>
                                    <img src={ icon } alt="" />
                                </div>
                                <h1>{ name }</h1>
                            </div>

                            <div className="amountOption">
                                { amount }
                            </div>

                        </button>
                    
                    )
                }

            </div>

        </div>
    );

}
