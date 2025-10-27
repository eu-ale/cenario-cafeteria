import CafeLogo from '../assets/img/cafe-slogan.jpg'

export default function Cabecalho() {
    return (
        <header>
            <h1>Coffee Dreams: Cafeteria</h1>
            <img src={CafeLogo} alt="Coffer Dreams"/>
            <p>Onde cada grão conta uma história</p>
        </header>
    )
}