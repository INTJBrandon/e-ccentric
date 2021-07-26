export default function Footer(props) {
    return (
        <footer className="bg-dark text-center text-white footer">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/brandon-tyus-0b7134152/" target="_blank" rel="noreferrer" role="button"
                    ><i className="fab fa-linkedin-in"></i
                ></a>
                <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/INTJBrandon" target="_blank" rel="noreferrer" role="button"
                    ><i className="fab fa-github"></i
                ></a>
                </section>
            </div>
            <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2020 Brandon Tyus |  
                <a className="text-white" href="/home" style={{textDecoration: "none"}}>  E-ccentric</a>
            </div>
        </footer>
    )
}