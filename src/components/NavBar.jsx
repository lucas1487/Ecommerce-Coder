import icon from '../img/icon.png'
import './NavBar.css'
function NavBar(){
    return(

<nav class="navbar navbar-expand-lg navbar-light bg-light " id="navmm">
        <div class="container-fluid ">
          <a href="#" class="text-warning"  id="logo"><img src={icon} alt="Logo Lep" width="75" height="75"/> Tienda Ecommerce</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav ">
              <li class="nav-item  ">
                <a class="nav-link" aria-current="page" href="#">Inicio</a>
              </li>
              
              <li class="nav-item dropdown">
                <a class="dropdown-toggle nav-link" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Productos
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item nav-link   text-primary " href="#">Articulo1</a></li>
                  <li><a class="dropdown-item nav-link  text-primary" href="#">Articulo2</a></li>
                  
                  <li><a class="dropdown-item nav-link  text-primary" href="#">Articulo3</a></li>
                </ul>
              </li>
             
              <li class="nav-item">
                <a class="nav-link " href="#">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">Contacto</a>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>


)
}
export default NavBar