import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";


export const WrapperButtonMore = styled(ButtonComponent)`
    
    &:hover {
        color: #fff;
        background-color: rgb(13,92,182);
        span {
            color: white;
        }
    }
    width: 100%;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
`

export const WrapperProducts = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 20px;
`