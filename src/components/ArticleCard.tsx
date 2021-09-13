import styled, { keyframes } from "styled-components";

export const ArticleCardContainer = styled.div`
	display: grid;
	grid-gap: 16px;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: fit-content;
	border: 1px solid transparent;
	min-width: 250px;
	padding: 16px 24px;
	border-radius: 8px;
	box-shadow: var(--card-shadow);
	animation: ${fadeIn} 200ms ease-in;

	&:hover {
		cursor: pointer;
		background: hsla(212, 100%, 30%, 0.1);
	}

	&:focus,
	&:active {
		outline: none;
		border-color: hsl(212, 100%, 30%);
		background: hsla(212, 100%, 30%, 0.1);
	}
`;

const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;

	h2 {
		font-size: 1rem;
		margin: 0;
	}

	p {
		margin: 0;
		color: var(--font-color-description);
	}
`;

const IconContainer = styled.div`
	background: hsla(212, 100%, 30%, 0.25);
	border-radius: 100%;
	margin-right: 16px;
	padding: 8px;
	color: hsl(212, 100%, 30%);
	width: fit-content;
	height: fit-content;
`;

type ArticleBoxProps = {
	icon: JSX.Element;
	label: string;
	description: string;
};

export const ArticleCard: React.FC<ArticleBoxProps> = ({
	icon,
	label,
	description,
}) => {
	return (
		<StyledContainer tabIndex={0}>
			<IconContainer>{icon}</IconContainer>
			<StyledTextContainer>
				<h2>{label}</h2>
				<p>{description}</p>
			</StyledTextContainer>
		</StyledContainer>
	);
};
