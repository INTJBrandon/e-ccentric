import {Link} from 'react-router-dom'

export default function NavBar(props) {
    return (
        <>
            <Link to="/Home">Home</Link>
            <Link to="/Charge">Start Charging</Link>
            <Link to="/transactions">Transactions</Link>
        </>
    )
}