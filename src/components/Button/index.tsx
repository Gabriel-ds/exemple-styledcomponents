import { Container } from './styles'

interface ButtonProps {
    backgroundColor: string
    hoverColor: string
    children: string
}

const Button = ({
    backgroundColor,
    hoverColor,
    children,
}: ButtonProps) => <Container backgroundColor={backgroundColor} hoverColor={hoverColor}>
    {children}
</Container>

export default Button