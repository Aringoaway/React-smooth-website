import React from 'react';
import {
	FooterContainer, FooterWrap, FooterLinksContainer,
	FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
	FooterLink, SocialMedia, SocialMediaWrap, SocialLogo,
	WebsiteRights, SocialIcons, SocialIconLink
} from "./FooterElements"
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/all";

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About Us</FooterLinkTitle>
							<FooterLink to="/signin">How it works</FooterLink>
							<FooterLink to="/signin">Testimonials</FooterLink>
							<FooterLink to="/signin">Careers</FooterLink>
							<FooterLink to="/signin">Investors</FooterLink>
							<FooterLink to="/signin">Terms of Service</FooterLink>
						</FooterLinkItems>

						<FooterLinkItems>
							<FooterLinkTitle>Contact us</FooterLinkTitle>
							<FooterLink to="/">Contacts</FooterLink>
							<FooterLink to="/">Support</FooterLink>
							<FooterLink to="/">Destinations</FooterLink>
							<FooterLink to="/">Sponsorships</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>

					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Videos</FooterLinkTitle>
							<FooterLink to="/">Submit video</FooterLink>
							<FooterLink to="/">Ambassadors</FooterLink>
							<FooterLink to="/">Agency</FooterLink>
							<FooterLink to="/">Influencer</FooterLink>
						</FooterLinkItems>

						<FooterLinkItems>
							<FooterLinkTitle>Social media</FooterLinkTitle>
							<FooterLink to="/">Instagram</FooterLink>
							<FooterLink to="/">Facebook</FooterLink>
							<FooterLink to="/">You Tube</FooterLink>
							<FooterLink to="/">Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">
							smooth
						</SocialLogo>
						<WebsiteRights>smooth © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook/>
							</SocialIconLink>

							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram/>
							</SocialIconLink>

							<SocialIconLink href="/" target="_blank" aria-label="You Tube">
								<FaYoutube/>
							</SocialIconLink>

							<SocialIconLink href="/" target="_blank" aria-label="Twitter">
								<FaTwitter/>
							</SocialIconLink>

							<SocialIconLink href="/" target="_blank" aria-label="Linkedin">
								<FaLinkedin/>
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;
