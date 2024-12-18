import styled from "styled-components";


export const WrapperSignInPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgba(0,0,0,0.53);
`

export const WrapperContainer = styled.div`
    display: flex;
    width: 800px;
    height: 445px;
    background: white;
    border-radius: 10px;
`

export const WrapperContainerLeft = styled.div`
    flex: 1;
    padding: 40px 45px 24px;
    display: flex;
    flex-direction: column;
`

export const WrapperContainerRight = styled.div`
    width: 350px;
    background: linear-gradient(136deg, rgb(240,248,255) -1%, rgb(219,238,255) 85%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    border-radius: 10px;
`

export const WrapperTextLight = styled.span`
    font-size: 15px;
    color: #1C978F;
    cursor: pointer;
`