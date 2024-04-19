import "./App.css";
import quoteBookIcon from "./abstract.png";
import butterfly from "./butterfly.gif"
import requiredIcon from "./quotebook.png"
import dior from "./dior.png"
import React, { useState, useEffect } from 'react';
import { DisplayQuotes } from "./components/DisplayQuotes";

function App() {

	const [data, setData] = useState()
	console.log(data, 'ffffffff')


	function getDBQuotes(time) {

		fetch(`/api/quotes?time=${time}`)

			.then(res => res.json())
			.then(data => {
				setData(data)
				console.log('eeeeee', data)
			}
			)
	}

	return (
		<div className="App">
			{/* TODO: include an icon for the quote book */}

			<div className="top">
				<div className='req-image'>
					<img src={requiredIcon} alt="iconic" className="iconiccc" />
				</div>
				{/* <div class = 'divider-line1'></div> */}
			</div>



			<h1 className='title'>HACK AT UCI</h1>

			<div class='container'>
				<div class='picture'>
					<img src={quoteBookIcon} alt="Quote Book Icon" className="imageee" />
				</div>

				<div class='headers'>
					<h3 class='sub-title'> TECH-DELIVERABLE </h3>
					<h4 class='sub-title'> BY ELISE JI</h4>

					<div className="container-quote">

						<h2 class='submit-quote'>SUBMIT A QUOTE</h2>
						{/* TODO: implement custom form submission logic to not refresh the page */}
						<form action="/api/quote" method="post" className="sub-box">
							<div>
								<label class='submit' htmlFor="input-name">NAME</label>
								<input class='enter-smt1' type="text" name="name" id="input-name" required />
							</div>

							<div>
								<label class='submit' htmlFor="input-message">QUOTE</label>
								<input class='enter-smt2' type="text" name="message" id="input-message" required />
							</div>

							<button class='submit-but' type="submit">Submit</button>
						</form>

					</div>
				</div>
			</div>


			<div className="bottom">

				<div class='divider-line'></div>
				<div className='req-image2'>
					<img src={requiredIcon} alt="iconic" className="iconiccc" />
				</div>

			</div>


			<div class='second-half'>

				<div class='flyyy'>
					<img src={butterfly} alt="lite" className="butterfly" />
				</div>

				{/* <div class='lighttt'>
					<img src={lighting} alt="lite" className="liteee"/>
				</div> */}

				<h2 class='prev-quote'>PREVIOUS QUOTES:</h2>
				<h2 class='prev-para'> SELECT ONE OF THE FOLLOWING TO SEE QUOTES THAT OUR USERS HAVE SUBMITTED </h2>
				<button onClick={() => getDBQuotes('week')} class='options'>7 DAYS</button>
				<button onClick={() => getDBQuotes('month')} class='options'>30 DAYS</button>
				<button onClick={() => getDBQuotes('all')} class='options'>ALL</button>

				{/* TODO: Display the actual quotes from the database */}
				<div className="messages">
					{/* <p>Peter Anteater</p>
					<p>Zot Zot Zot!</p>
					<p>Every day</p> */}
					{/* {JSON.stringify(data)} */}

					{data && <DisplayQuotes quotes={data} />}

				</div>
			</div>
		</div>
	);
}

export default App;
