import './Chattershark.css';
// import autocomplete from './autocomplete'
// import countries from './countries';
import mascot from './img/Mascot.png'


function Chattershark() {
    return(
        <div className="chattershark">
            <img src={mascot} alt="mascot" className="mascot d-block" />
            <div className="form-group" style={{width:"300px"}}>
                <input id="search" type="text" name="myCountry" placeholder="Company" className="form-control form-control-lg" />
            </div>
            <div id="match-list" className="overflow-auto" style={{maxHeight:"300px"}}></div>
        </div>
    );
}


export default Chattershark;