import react from "react";

const Hero = ({handleLogout}) => {
    return(
        <section classNmae="hero">
            <nav>
                <h2>Welcome!!</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero;