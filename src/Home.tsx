import "./Home.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
	return (
		<div className="home">
			<h1 id="hellow"> Hello World!</h1>
			<h1>
				I'm <span>Gandhar</span>
			</h1>
			<h3>
				I'm a
				<TypeAnimation
					sequence={[
						"n engineer",
						2000,
						" coder",
						2000,
						"n IITian",
						2000,
						" web developer",
						2000,
					]}
					repeat={Infinity}
					speed={25}
					deletionSpeed={25}
				/>
			</h3>
		</div>
	);
};

export default Home;
