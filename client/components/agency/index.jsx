import React, { Component } from 'react';
import _ from 'lodash';
import Footer from '../footer/index.jsx';

export default class AgencyApp extends Component {
	render() {
		return (
		<div>
			<h1 className='agency-page-heading'>You make the decision<br/>We help you with the rest</h1>
			<div className="agency-container">				
				<div className='agency-image'>
				</div>
				<div className='agency-text-container'>
					<div className='agency-text'>
						<h1>WE ARE HERE TO HELP YOU</h1>
						<p>So you have decided to pursue a creative career - way to go! Our goal is to connect the right student<br/>
							to the right creative school. Choosing what to study and where to study is one of the most<br/>
							important decisions you will make in your life journey... it is also not an easy decision,<br/>
							it can be daunting, confusing, and scary.<br/>
							Mozaik can help you join the dots between choosing the right courses all the way up until finding that dream job.<br/>
							Our personalized advice and honest counselling services is free of charge to students.<br/>
							We are funded by reputable creative schools from around the globe.</p>
						<p>Our Mozaik team are here to help you step by step throughout the application process. The team can assist you with selecting the right course, filling out the application form,<br/>
							submitting visa and insurance documentations, book travel arrangements, help you find accommodation and make your first day less daunting<br/>
							by providing an arrival welcome pack.
						</p>
					</div>
					<div className='start-text'>
						<p>YOUR STUDY JOURNEY STARTS HERE</p>
					</div>	
				</div>
				<div className='box-container'>
					<div className='timeline-container'>
						<div className='timeline-img'>
							<img src='/images/elements/timeline.png' />
						</div>
						
					</div>
					<div className='card-container-black'>
						<div className='card1'>
							<div className='card-body'>
								<div className="panel-group" id="accordion">
			    					<div className="panel panel-default" id="panel1">
			       						<div className="panel-heading">
			             					<h4 className="pane-title-white panel-title">
			        							<a data-toggle="collapse" data-target="#collapseOne" href="#collapseOne">
			          								<p className="panel-title-text-white">1. Discover</p>
			          								<img className='small-line-agency' src="/images/elements/Small-pink-line-agency-page.png" />
			       								</a>
			      							</h4>
										</div>
			        					<div id="collapseOne" className="panel-collapse collapse in">
			            					<div className="panel-body-white panel-body">
			            						<p>Explore amazing creative student work from our showcase gallery or
							 						watch one of our MasterClass videos and see what it means to be a
							 						creative professional in the creative industry.<br/>
							 						<a href="#">Discover here.</a>
							 					</p>
			            					</div>
			        					</div>
			    					</div>
								</div>
							</div>
						</div>
						<div className='card2'>
							<div className='card-body'>
								<div className="panel-group" id="accordion">
			    					<div className="panel panel-default" id="panel2">
			       						<div className="panel-heading">
			             					<h4 className="pane-title-white panel-title">
			        							<a data-toggle="collapse" data-target="#collapseTwo" href="#collapseTwo">
			          								<p className="panel-title-text-white">2. SELECTION OF COURSE AND SCHOOL</p>
			          								<img className='small-line-agency' src="/images/elements/Small-pink-line-agency-page.png" />
			       								</a>
			      							</h4>
										</div>
			        					<div id="collapseTwo" className="panel-collapse collapse in">
			            					<div className="panel-body-white panel-body">
							 					<p>Personalised Study Plan<br/>We understand that many factors influence your course selection: school reputation, fees, graduate outcomes, etc. Our team can assist you with this selection-the aim at this stage is to develop a personalized study plan.</p>
			            					</div>
			        					</div>
			    					</div>
								</div>
							</div>
						</div>
					</div>
					<div className='card-container-white'>
						<div className='card3 card'>
							<div className='card-body'>
								<div className="panel-group" id="accordion">
			    					<div className="panel panel-default" id="panel3">
			       						<div className="panel-heading">
			             					<h4 className="pane-title-black panel-title">
			        							<a data-toggle="collapse" data-target="#collapseThree" href="#collapseThree">
			          								<p className="panel-title-text-black">3. APPLICATION</p>
			          								<img className='small-line-agency' src="/images/elements/Small-pink-line-agency-page.png" />
			       								</a>
			      							</h4>
										</div>
			        					<div id="collapseThree" className="panel-collapse collapse in">
			            					<div className="panel-body-black panel-body">
			            						<p>Do you require flight or any other travel arrangements?
						 						No problem, through our network of partnerships we can offer the most
						 						reliable and cost effective travel options for you.</p>	
			            					</div>
			        					</div>
			    					</div>
								</div>
							</div>
						</div>
						<div className='card4 card'>
							<div className='card-body'>
								<div className="panel-group" id="accordion">
			    					<div className="panel panel-default" id="panel4">
			       						<div className="panel-heading">
			             					<h4 className="pane-title-black panel-title">
			        							<a data-toggle="collapse" data-target="#collapseFour" href="#collapseFour">
			          								<p className="panel-title-text-black">4. CREATIVE PORTFOLIO PREPARATION</p>
			          								<img className='small-line-agency' src="/images/elements/Small-pink-line-agency-page.png" />
			       								</a>
			      							</h4>
										</div>
			        					<div id="collapseFour" className="panel-collapse collapse in">
			            					<div className="panel-body-black panel-body">
						 						<p>Imagine if you were able to showcase your creative work on self-promo site. We can assist you with setting up this site and/or prepare a creative portfolio that you can the use as part of your application.</p>
			            					</div>
			            				</div>
			    					</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					{/*<div className='rectangle3'>*/}
					{/*	 <div className='visa-medical'>
						 	<div className='visa-title'>
						 		<p>5.&nbsp;&nbsp;&nbsp;VISA SUBMISSION AND MEDICAL INSURANCE</p>
						 		<img className='visa-triangle-right' src="/images/elements/TRIANGLE.png" />
						 	</div>
						 	<img className='visa-small-line-agency' src="/images/elements/Small-pink-line-agency-page.png" />
						 	<div className='visa-box'>
						 		<img className='visa-triangle-down' src="/images/elements/TRIANGLE-DOWN.png" />
						 		<p>Each destination country(where you will study)has a different set of visa rules. We provide full Visa documentation support, including assisting with any certification, and translations service required. We also assist with medical insurance application process. We also have partnered with Migration Agencies for those seeking to explore post study migration options.</p>
						 	</div>
						 </div>
						 <div className='travel-arrangements'>
						 	<div className='travel-title'>
						 		<p>6.&nbsp;&nbsp;&nbsp;TRAVEL ARRANGEMENTS</p>
						 		<img className='travel-triangle-right' src="/images/elements/TRIANGLE.png" />
						 	</div>
						 	<img className='travel-small-line-agency' src="/images/elements/Small-pink-line-agency-page.png" />
						 	<div className='travel-box'>
						 		<img className='travel-triangle-down' src="/images/elements/TRIANGLE-DOWN.png" />
						 		<p>Do you require flight or any other travel arrangements?<br/>
						 		No problem, through our network of partnerships we can offer the most<br/>
						 		reliable and cost effective travel options for you.</p>
						 	</div>
						 </div>
					</div>*/}
					{/*<div className='rectangle4'>
						 <div className='accommodation'>
						 	<div className='accommodation-title'>
						 		<p>7.&nbsp;&nbsp;&nbsp;ACCOMODATION ARRANGEMENTS</p>
						 		<img className='accommodation-triangle-right' src="/images/elements/TRIANGLE.png" />
						 	</div>
						 	<img className='accommodation-small-line-agency' src="/images/elements/Small-pink-line-agency-page.png" />
						 	<div className='accommodation-box'>
						 		<img className='accommodation-triangle-down' src="/images/elements/TRIANGLE-DOWN.png" />
						 		<p>Would you like to live on campus, or share a private accomodation<br/>
						 		with other students? Maybe you prefer homestay where you ca live<br/>
						 		with a local family for the first few months of your stay.</p>
						 	</div>
						 </div>
						 <div className='pre-post-departure'>
						 	<div className='pre-post-departure-title'>
						 		<p>8.&nbsp;&nbsp;&nbsp;PRE AND POST DEPARTURE SUPPORT</p>
						 		<img className='pre-post-departure-triangle-right' src="/images/elements/TRIANGLE.png" />
						 	</div>
						 	<img className='pre-post-departure-small-line-agency' src="/images/elements/Small-pink-line-agency-page.png" />
						 	<div className='pre-post-departure-box'>
						 		<img className='pre-post-departure-triangle-down' src="/images/elements/TRIANGLE-DOWN.png" />
						 		<p>We have a developed a pre-departure pack that includes important information and tips on culture and social norms, emergency contacts, key events, locations of interest, etc. We also arrange to have somebosy welcome you when you arrive
						 		at the airport(optional)</p>
						 	</div>
						 </div>
					</div>*/}
					{/*<div className='rectangle5'>
						 <div className='support-study'>
						 	<div className='support-study-title'>
						 		<p>9.&nbsp;&nbsp;&nbsp;SUPPORT THROUGOUT YOUR STUDY PERIOD</p>
						 		<img className='support-study-triangle-right' src="/images/elements/TRIANGLE.png" />
						 	</div>
						 	<img className='support-study-small-line-agency' src="/images/elements/Small-pink-line-agency-page.png" />
						 	</div>
						 <div className='internships'>
						 	<div className='internships-title'>
						 		<p>10.&nbsp;&nbsp;&nbsp;INTERNSHIPS AND JOB PLACEMENT</p>
						 		<img className='internships-triangle-right' src="/images/elements/TRIANGLE.png" />
						 	</div>
						 	<img className='internships-small-line-agency' src="/images/elements/Small-pink-line-agency-page.png" />
						 </div>
					</div>*/}
				{/*</div>*/}
				<div className='get-started'>
				 <a href="/search"> <img src="/images/buttons/Get-started.png" /> </a>
				</div>
				
			</div>	
			<div className='agency-footer'>
					<Footer/>
				</div>			
		</div>
	
        	      
		);
	}
}