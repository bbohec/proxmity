import {SvgMagnifierGPS} from './SvgMagnifierGPS.jsx'
import {SvgGear} from './SvgGear.jsx'

/*
<div className="row text-center">
				<div className="col-lg-3 offset-lg-3 align-self-center">
					<button type="button" className="btn btn-primary btn-lg btn-block">
						
					</button>
				</div>
				<div className="col-lg-3 align-self-center">
					<button type="button" className="btn btn-primary btn-lg btn-block">
						
					</button>
				</div>
			</div>
*/

export class Menu extends React.Component {
	render() {
		var lang= navigator.language;
		const midlestyle={"display":"inline-block","vertical-align":"middle"};
		return (
			<div class="list-group">
			  <button type="button" className="list-group-item list-group-item-action active"><h2><span className="align-middle"><SvgMagnifierGPS/> Search Parameters</span></h2></button>
			  <button type="button" className="list-group-item list-group-item-action"><h2><span className="align-middle"><SvgGear/> Settings</span></h2></button>
			  <button type="button" className="list-group-item list-group-item-action"><h2><span className="align-middle"><SvgGear/> Hola</span></h2></button>
			  <button type="button" className="list-group-item list-group-item-action" disabled><h2><span className="align-middle"><SvgGear/> Quit</span></h2></button>
			  <button type="button" className="list-group-item list-group-item-action" disabled><h2><span className="align-middle">{lang}</span></h2></button>
			</div>
			
		)
	}
}