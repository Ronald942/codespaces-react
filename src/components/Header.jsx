import styles from './Header.module.css';

export function Header() {
    return (
        <header style={{ padding: '1rem', background: '#282c34', color: '#fff' }}>
            <h1>Meu Site</h1>
            <nav>
                <a href="/" style={{ color: '#61dafb', marginRight: '1rem' }}>Início</a>
                <a href="/sobre" style={{ color: '#61dafb', marginRight: '1rem' }}>Sobre</a>
                <a href="/contato" style={{ color: '#61dafb' }}>Contato</a>
            </nav>
        </header>
    );
};