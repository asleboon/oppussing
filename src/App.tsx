import "./index.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Chip, ChipContainer } from "./components/Chip";
import Kitchen from "./routes/Kitchen";

const StyledApp = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	padding: 16px;
	background: linear-gradient(
		145deg,
		rgba(131, 58, 180, 1) 0%,
		rgba(253, 29, 29, 1) 50%,
		rgba(252, 176, 69, 1) 100%
	);
`;

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	background: white;
	width: 1200px;
	height: 600px;
	border-radius: 8px;
	padding: 24px;
	box-shadow: 0px 0px 15px -2px rgba(0, 0, 0, 0.93);
`;


// Create CSS variables.
// this needs states

// TODO: Fix focus states in card and chip. use focus within?
// TODO: active should be passed to chipContainer
// TODO: Continue with CSS variables
// TODO: Create Article page and components;
// TODO: Set up Sanity
// TODO: Create Sanity Schema.
// TODO: Create Sanity Queries.

const App = () => {
	return (
		<Router>
			<StyledApp>
				<StyledContent>
					<ChipContainer>
						<Chip active to="/kitchen" label="Kjøkken" />
						<Chip active={false} to="/office" label="Kontor" />
					</ChipContainer>
					<Switch>
						<Route path="/kitchen">
							<Kitchen />
						</Route>
					</Switch>
				</StyledContent>
			</StyledApp>
		</Router>
	);
};

export default App;
