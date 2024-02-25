import "./_header.scss";

//* Importing images
import photoPerfil from "../../../images/Perfil.jpg";

//* Importing custom hook
import { useHeader } from "./useHeader";

export const Header = () => {

  const { onClickButtonLogout } = useHeader();

  return (
    <div className="header">

      <button onClick={ onClickButtonLogout }>
        Log Out
      </button>

        <div className="header__photoUser">

            <h2>Mateo Olaya</h2>

            <div className="header__photoUser__image">
                <img src={ photoPerfil } alt="" />
            </div>

        </div>

    </div>
  );

}
