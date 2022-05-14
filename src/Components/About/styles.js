import styled from "styled-components"

export const Close = styled.button `
    background: none;
    border: 0;
    cursor: pointer;
    height: 24px;
    width: 24px;
    padding: 0;
    position: relative;
    
    &::before,
    &::after {
        background-color: #000;
        width: 2px;
        content: '';
        height: 24px;
        position: absolute;
        top: 0;
        left: 9px;
    }

    &::before{
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
`
export const Pill = styled.div `
    /* background-color: #DEE767;
    background-color: #EDEDED; */
    border: 2px solid #000;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    padding: 8px;
    display: flex;
    overflow: hidden;
`


export const CloseWrapper = styled(Pill) `
    display: ${({$state}) => ($state === 'entered' ? 'flex' : 'none')};

    overflow: hidden;
    cursor: pointer;
    top: 200px;
    right: 40px;
    position: fixed;
    z-index: 4;

    @media (max-width: 800px) {
        top: unset;
        bottom: 20px;
        right: 20px;
    }
`

export const Panel = styled.article `
    background-color: #fdf5e3;
    border-left: 2px solid #DEE767;

    height: calc(100vh - 85px);
    width: 660px;

    position: fixed;
    z-index: 2;
    right: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-660px' )};
    bottom: 0;
    box-sizing: border-box;
    padding: 60px 120px 60px 40px;
    overflow: scroll;
    transition: 300ms;

    @media (max-width: 800px) {
        border-left: none;
        padding: 40px 86px 20px 20px;
        width: 100vw;
        height: calc(100vh - 75px);
        bottom: 0;
        bottom: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 0 : '-100vh' )};
        right: unset;
        z-index: 3;
    }
`

export const BG = styled.div `
    background-color: rgba(0,0,0,0.5);
    cursor: pointer;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 1;
    opacity: ${({$state}) => ($state === 'entering' || $state === 'entered' ? 1 : 0 )};
    pointer-events: ${({$state}) => ($state === 'exited' ? 'none' : 'auto' )} ;
    transition: 300ms;
`

// .header-about {
//     font-weight: 700;  
//     margin: 0;
//     cursor: pointer;
//   }
  
  
//   .hover-about {
//     visibility: hidden;
//     /* width: 100vw; */
//     height: 100vh;
//     z-index: 2000;
//     background-color: #f393b9 ;
//     color: #fff;
//     font-size: 2em;
//     padding: 3em;
//     position: fixed;
//     top: 0;
//     left: 0;
  
//   }
  
//   .header:hover .hover-about {
//     visibility:visible;
//   }
  
//   .hover-about .serif{
//     font-family: orpheuspro, serif;
//     font-weight: 600;
//     font-style: italic;
  
//   }
  
//   .hover-about p {
//     color: #fff;
//     font-weight: 700;
//     display: inline-flex;
//     align-items: baseline;
//   }