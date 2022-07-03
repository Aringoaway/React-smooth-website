import React from 'react';
import {Button} from "../ButtonElement";
import {
	InfoContainer, InfoWrapper, InfoRow,
	Column1, TextWrapper, TopLine,
	Heading, SubTitle, BtnWrap,
	Column2, ImgWrap, Img
} from "./InfoElements"

const InfoSection = () => {
	return (
		<>
			<InfoContainer>
				<InfoWrapper>
					<InfoRow>
						<Column1>
							<TextWrapper>
								<TopLine>TopLine</TopLine>
								<Heading>Heading</Heading>
								<SubTitle>Subtitle</SubTitle>
								<BtnWrap>
									<Button to="home"/>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img/>
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
};

export default InfoSection;
