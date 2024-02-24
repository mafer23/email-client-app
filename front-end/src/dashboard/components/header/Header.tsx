import "./_header.scss";

//* Importing images
import photoPerfil from "../../../images/Perfil.jpg";

export const Header = () => {
  return (
    <div className="header">

        <div className="header__photoUser">

            <h2>Mateo Olaya</h2>

            <div className="header__photoUser__image">
                <img src={ photoPerfil } alt="" />
            </div>

        </div>

    </div>
  );
}
