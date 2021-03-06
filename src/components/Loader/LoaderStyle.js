import styled, { css, keyframes } from "styled-components"

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const StyledLoader = styled.div`
  border-radius: 50%;
  border: 5px solid transparent;
  border-bottom: 5px solid #dff959;
  border-top: 5px solid #dff959;
  height: 50px;
  width: 50px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;
`

export const PageContainer = styled.div`
  opacity: ${({ opacity }) => opacity};
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  height: 100%;
  text-align: center;
  width: 100vw;
  align-items: center;
  justify-content: center;
  transition: opacity 1s ease-in;
`

// export const LoaderContainer = styled.div`
// 	animation ${fadeIn} 0.2s ease-in;
// 	height: 200px;
// 	display: flex;
// 	flex-wrap: wrap;
// 	align-content: center;
// 	align-items: center;
// 	justify-content: center;
// 	// min-height: 200px;
// 	width: 100%;
// 	// background-color: black;
// 	// max-width: 400px;
// 	opacity: 0.95;
// 	// border-radius: 3px;
// 	// border: 3px solid #12d0ee;
// 	position: relative;

export const FadeContainer = styled.div`
  opacity: 1;
  display: flex;
  background-color: #070707;
  //   flex-flow: column;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  //   justify-content: center;
  //   text-align: center;
  //   width: 100vw;
  //   align-items: center;
`

export const StyledLoaderSpan = styled.span`
  width: 100%;
  text-align: center;
  color: white;
  font-family: Montserrat;
  opacity: 0.7;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 94px;

  @media screen and (max-width: 850px) and (orientation: portrait) {
    margin-bottom: 202px;
  }

  @media screen and (max-width: 850px) and (orientation: landscape) {
    margin-bottom: 0;
  }
`
