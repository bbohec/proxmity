//var Jumbotron = ReactBootstrap.Jumbotron;
//var Alert = ReactBootstrap.Alert;
//var ProgressBar = ReactBootstrap.ProgressBar;
//	<div><ProgressBar bsStyle="success" now={40} /></div>

import {MainNavbar}		from './modules/Navbar.jsx'
import {JumboContent}	from './modules/JumboContent.jsx'
import {Menu}	from './modules/Menu.jsx'

$(function () {
 	$('[data-toggle="popover"]').popover()
})
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

class Main extends React.Component {  
  render() {
    return (
		<div>
			<MainNavbar />
			<div className="row">
				<div className="col-md-8 offset-md-2 col-lg-4 offset-lg-4">
					<div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
						<button type="button" className="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
						<strong>Beta Version</strong> Need feedbacks! :)
					</div>
				</div>
			</div>
			<Menu />
		</div>
	);	
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('main')
); 