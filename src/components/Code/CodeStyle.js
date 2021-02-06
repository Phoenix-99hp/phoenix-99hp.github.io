import styled, { css, keyframes } from "styled-components"

const revealTwo = keyframes`
  0% {
   left: 0;
  }
  
  100% {
    left: 100%;
  }`

const flashCursor = keyframes`
  0% {
   opacity: 1;
  }
  
  100% {
    opacity: 0;
  }`

const spin = keyframes`
  0% {
   transform: rotate(0deg);
  }


  100% {
  transform: rotate(360deg);
  }`

const slideDown = keyframes`
  0% {
   top: 0;
  }


  100% {
  top: 100vh;
  }`

const slideUp = keyframes`
  0% {
   top: 0;
  }


  100% {
  top: -100vh;
  }`

export const BackgroundContainer = styled.code`
  padding-top: 20px;
  // padding-bottom: 20px;
  // max-height: calc(100vh - 114px);
  height: 100%;
  width: 80%;
  position: absolute;
  top: 0;
  right: initial;
  max-width: 1350px;
  background-color: #070707;
  word-break: break-all;
  font-size: 20px;
  color: #5ad632;
  overflow: hidden;
  opacity: 1;
  transition: opacity 10s, height 10s, width 10s, top 10s;

  // @media screen and (max-width: 600px) {
  //   max-height: calc(100vh - 242px);
  // }

  ${({ shouldRotate }) =>
    shouldRotate &&
    css`
      animation: ${slideDown} 10s;
      opacity: 0;
      // height: 0;
      top: -100vh;
    `};
`
export const AnimatedCursor = styled.div`
  position: absolute;
  z-index: 10;
  background-color: #f834bb;
  top: 0;
  left: 0;
  width: 10px;
  height: 100%;
  animation-play-state: paused;
  display: none;

  ${({ shouldFlash }) =>
    shouldFlash &&
    css`
      display: inherit;
      animation: ${flashCursor} linear 0.5s infinite;
    `}
`

export const GridContainer = styled.div`
  display: grid;
  color: #5ad632;
  // overflow: hidden;
  height: 100%;
  grid-template-columns: auto;
  position: absolute;
  top: 0;
  width: 80%;
  max-width: 1350px;

  ${({ rows }) =>
    rows &&
    css`
      grid-template-rows: repeat(${rows}, 20px);
    `};
`

export const GridItem = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  left: 0;
  color: #5ad632;
  position: relative;
`
export const AbsoluteDiv = styled.div`
  z-index: 9;
  background-color: #070707;
  top: 0;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ isWriting }) =>
    isWriting &&
    css`
      animation: ${revealTwo} 0.5s linear;
    `};

  ${({ first }) =>
    first &&
    css`
      animation-delay: 2s;
    `};

  ${({ doneWriting }) =>
    doneWriting &&
    css`
      background: none;
    `};

  @media screen and (max-width: 600px) {
    animation-duration: 0.4s;
  }
`