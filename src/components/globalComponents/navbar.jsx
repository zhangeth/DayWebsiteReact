function Navbar() {
	//const ani = animationConstants;
    // TODO: add back art link
	return (
    <nav class="py-0 bg-light border-bottom">
        <div class="container d-flex justify-content-center">
            <ul class="nav">
                <li class="nav-item"><a href="/" class="nav-link link-dark px-2">Home</a></li>
                <li class="nav-item"><a href="/about" class="nav-link link-dark px-2">About</a></li>
            </ul>
        </div>
    </nav>
    );
}
export default Navbar;