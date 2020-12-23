import {SvgMenu}			from './SvgMenu.jsx'
import {SvgMagnifierPlace}	from './SvgMagnifierPlace.jsx'

export class MainNavbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-faded">
				<div className="row">
					<div className="col-md-8 offset-md-2 col-lg-4 offset-lg-4">
						<div className="input-group">
							<span className="input-group-addon" id="basic-addon1" data-toggle="tooltip" data-placement="bottom" title="Menu">
								<SvgMenu />
							</span>
							<input type="text" className="form-control" placeholder="What do you search ?" aria-describedby="basic-addon1">
							</input>
							<span className="input-group-addon" id="basic-addon1" data-toggle="tooltip" data-placement="bottom" title="Search Parameters">
								<SvgMagnifierPlace />
							</span>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}