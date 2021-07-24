

export default function Footer(props) {
    return (
        <footer class="bg-dark text-center text-white footer">
            <div class="container p-4 pb-0">
                <section class="mb-4">
                <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/brandon-tyus-0b7134152/" target="_blank" role="button"
                    ><i class="fab fa-linkedin-in"></i
                ></a>
                <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/INTJBrandon" target="_blank" role="button"
                    ><i class="fab fa-github"></i
                ></a>
                </section>
            </div>
            <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2020 Brandon Tyus |  
                <a class="text-white" href="/home" style={{textDecoration: "none"}}>  E-ccentric</a>
            </div>
        </footer>
    )
}