import { Container, Profile } from './styles';

export function Header() {
    return (
        <Container>
            <Profile>
                <img
                    src="https://github.com/LucasAvenger.png"
                    alt="meu perfil"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Lucas Simões</strong>
                </div>

            </Profile>

        </Container>
    );
}