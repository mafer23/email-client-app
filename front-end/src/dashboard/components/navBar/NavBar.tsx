import "./_navBar.scss";

//* Importing images
import iconAdd from "../../../images/add.png";

//* Importing custom hook
import { useNavBar } from "./useNavBar";

export const NavBar = () => {

    const { dataButtonOptions, onHandleOpenMessageModal } = useNavBar();

    return (
        <div className="navBar">

            <button onClick={ onHandleOpenMessageModal }>
                <img src={ iconAdd } alt="" />
                New Message
            </button>

            <div className="navBar__options">

                {
                    dataButtonOptions.map(data => 
                    
                        <button key={ data.id } onClick={ data.functionClick }>

                            <div className="titleIcon">
                                <div>
                                    <img src={ data.icon } alt="" />
                                </div>
                                <h1>{ data.name }</h1>
                            </div>

                            <div className="amountOption">
                                { data.amount }
                            </div>

                        </button>
                    
                    )
                }

            </div>

        </div>
    );

}
