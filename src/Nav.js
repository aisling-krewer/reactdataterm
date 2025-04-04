import './App.css';
import './cyberpunk.css';
function Nav() {
  
  return (
        <nav class="navbar navbar-expand-lg">

          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      
              <span class="navbar-toggler-icon"></span>
      
            </button>
      
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
      
              <ul class="navbar-nav">
      
                <li class="nav-item">
      
                  <a class="cyberpunk blue" href="/" aria-current="page">GREETINGS</a>
      
                </li>
      
                <li class="nav-item">
      
                  <a class="cyberpunk blue">Connected to: NC CITINET</a>
      
                </li>
      
                <li class="nav-item">
      
                  <a class="cyberpunk blue" href="/login">Free Trial</a>
      
                </li>
      
              </ul>
      
            </div>
            <a class="navbar-brand"><img class='zig-logo' src="/img/ZigguratLogo.png" /></a>
          </div>
      
        </nav>
  );
}

export default Nav;
