import './Chattershark.css';
// import autocomplete from './autocomplete'
// import countries from './countries';
import mascot from './img/Mascot.png'

function Chattershark() {
    return(
        <div className="chattershark">
            <img src={mascot} alt="mascot" className="mascot d-block" />
            <form autoComplete="off" action="">
                <div className="autocomplete" style={{width:"300px"}}>
                    <input id="myInput" type="text" name="myCountry" placeholder="Country" className="form-control" />
                </div>
                <input type="submit" className="btn btn-primary" />
            </form>
        </div>
    );
}
// autocomplete(document.getElementById("myInput"), countries);
export default Chattershark;