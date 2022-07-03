import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from "react-icons/md";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #0c0c0c;
  height: 800px;
  position: relative;
  z-index: 1;
  
  :before {
	content: "";
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
    z-index: 2;
	background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
  }
`

export const HeroBg = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 24px;
  position: absolute;
  max-width: 1200px;
  z-index: 3;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`

export const HeroP = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: center;
  margin-top: 24px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const HeroBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`