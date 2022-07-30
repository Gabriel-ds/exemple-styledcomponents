import styled from 'styled-components'

interface ContainerProps {
    backgroundColor: string
    hoverColor: string
}

export const Container = styled.button<ContainerProps>`
    width: 200px;
    height: 50px;
    border-style: none;
    border-width: 0px;
    border-radius: 5px;
    color: #ffff;
    font-weight: bold;

    background-color: ${(props) => props.backgroundColor};

    :hover {
        background-color: ${(props) => props.hoverColor};
    }
`;