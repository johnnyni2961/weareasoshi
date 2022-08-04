
const paywall = () => {
	return (
		<div>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css" />
		<link rel="stylesheet" href="pay-design.css" />
		<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap" rel="stylesheet" />
		<div className="container">
			<div className="front side">
			<div className="content">
				<h1>ASOSHI First Plan</h1>
				<p>Stuff
				</p>
			</div>
			</div>
			<div className="back side">
			<div className="content">
				<h1>Contact Me</h1>
				<button type="button" className="fill">Fill</button>
			</div>
			</div>
		</div>
		</div>
	);
};

export default paywall;
