import "./App.css";
import quoteBookIcon from "./abstract.png";
import butterfly from "./butterfly.gif"
import requiredIcon from "./quotebook.png"
import dior from "./dior.png"
import React, { useState, useEffect } from 'react';
import { DisplayQuotes } from "./components/DisplayQuotes";
import { DisplayName } from "./components/DisplayName";
import { DisplayDate } from "./components/DisplayDate";

function App() {

	const [data, setData] = useState()

	function getDBQuotes(time) {

		fetch(`/api/quotes?time=${time}`)

			.then(res => res.json())
			.then(data => {
				setData(data)
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

			<div className='container'>
				<div className='picture'>
					<img src={quoteBookIcon} alt="Quote Book Icon" className="imageee" />
				</div>

				<div className='headers'>
					<h3 className='sub-title'> TECH-DELIVERABLE </h3>
					<h4 className='sub-title'> BY ELISE JI</h4>

					<div className="container-quote">

						<h2 className='submit-quote'>SUBMIT A QUOTE</h2>
						{/* TODO: implement custom form submission logic to not refresh the page */}
						<form action="/api/quote" method="post" className="sub-box">
							<div>
								<label className='submit' htmlFor="input-name">NAME</label>
								<input className='enter-smt1' type="text" name="name" id="input-name" required />
							</div>

							<div>
								<label className='submit' htmlFor="input-message">QUOTE</label>
								<input className='enter-smt2' type="text" name="message" id="input-message" required />
							</div>

							<button className='submit-but' type="submit">Submit</button>
						</form>

					</div>
				</div>
			</div>


			<div className="bottom">

				<div className='divider-line'></div>
				<div className='req-image2'>
					<img src={requiredIcon} alt="iconic" className="iconiccc" />
				</div>

			</div>


			<div className='second-half'>

				<div className='flyyy'>
					<img src={butterfly} alt="lite" className="butterfly" />
				</div>

				<h2 className='prev-quote'>PREVIOUS QUOTES:</h2>
				<h2 className='prev-para'> SELECT ONE OF THE FOLLOWING TO SEE QUOTES THAT OUR USERS HAVE SUBMITTED </h2>
				<button onClick={() => getDBQuotes('week')} className='options'>7 DAYS</button>
				<button onClick={() => getDBQuotes('month')} className='options'>30 DAYS</button>
				<button onClick={() => getDBQuotes('all')} className='options'>ALL</button>

				{/* TODO: Display the actual quotes from the database */}
				<div className="messages">

					<div className="cards">
						{data && <div className="card"> <DisplayQuotes quotes={data} /></div>}
					</div>
					
					{/* <div className="cards">
						{data && <div className="card"> <DisplayQuotes quotes={data} /></div>}
					</div>
					
					<div className='cards'>
						{data && <div className="card"> <DisplayName quotes={data} /></div>}
					</div>

					<div className="cards">
						{data && <div className="card"> <DisplayDate quotes={data} /></div>}
					</div> */}

				</div>
			</div>
		</div>
	);
}

export default App;
