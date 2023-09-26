import '../../css/globalComponents.css'

function Navbar() {
	return (
    <nav class="navbar-div">
        <div class="navbar-links">
            <ul class="nav">
                <li class="nav-item"><a href="/" class="nav-link link-dark px-2">Home</a></li>
                <li class="nav-item"><a href="/about" class="nav-link link-dark px-2">About</a></li>
            </ul>
        </div>
    </nav>
    );
}
export default Navbar;