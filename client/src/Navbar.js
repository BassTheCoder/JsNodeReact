export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light  py-3 ">
            <div class="container px-4 px-lg-5 ">
                <a className="navbar-brand text-white" href="/">food.io</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link text-white" href="/about">About</a></li>
                        <li class="nav-item"><a class="nav-link text-white" href="/ratings">Ratings</a></li>
                        <li class="nav-item"><a class="nav-link text-white" href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}