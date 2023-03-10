import Link from "next/link";

const Navbar = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
            <Link className="navbar-brand" href="/">RPA</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link href="/about"  className="nav-link" >About</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <Link href="/" className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link href="/"  className="dropdown-item">Action</Link></li>
                                <li><Link href="/" className="dropdown-item" >Another action</Link></li>
                                {/* <li><a className="dropdown-divider" to="/"</li> */}
                                <li><Link href="/"  className="dropdown-item">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar; 