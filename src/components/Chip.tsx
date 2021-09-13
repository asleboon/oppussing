import { Link } from "react-router-dom";
import styled from "styled-components";

type ChipContainerProps = {
	active: boolean;
};

export const ChipContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	padding-bottom: 32px;
`;

const StyledContainer = styled(Link)<ChipContainerProps>`
	display: flex;
	margin-right: 16px;
	text-decoration: none;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	padding: 4px 16px;
	border: ${({ active }) =>
		active ? "var(--primary-color)" : "1px solid transparent"};
	background-color: var(--bg-chip);
	width: fit-content;
	height: fit-content;

	&:hover {
		background-color: hsla(212, 100%, 30%, 0.25);
		cursor: pointer;
	}

	&:active,
	&:focus {
		outline: none;
		border: 1px solid hsl(212, 100%, 20%);
	}

	p {
		color: hsl(212, 100%, 20%);
		font-size: 1rem;
		font-weight: bold;
		margin: 0;
	}
`;

type ChipProps = {
	to: string;
	label: string;
	active: boolean;
};

export const Chip: React.FC<ChipProps> = ({ label, active, to }) => (
	<StyledContainer to={to} active={active}>
		<p>{label}</p>
	</StyledContainer>
);
