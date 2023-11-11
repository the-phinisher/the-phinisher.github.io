import "./Home.css";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
	return (
		<div className="home">
			<h1 id="hellow"> Hello World!</h1>
			<h1>
				I'm{" "}
				<TypeAnimation
					sequence={[
						"Gandhar",
						10000,
						"an engineer",
						2000,
						"a coder",
						2000,
						"an IITian",
						2000,
						"a web developer",
						2000,
					]}
					repeat={Infinity}
					speed={25}
					deletionSpeed={25}
					cursor={false}
					preRenderFirstString
				/>
				.
			</h1>
		</div>
	);
};

export default Home;
