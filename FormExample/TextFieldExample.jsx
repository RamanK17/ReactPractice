import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/SelectField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import axios from 'axios';

const pageAlignmnet={
	textAlign:'center'
}
const toggleStyle1 ={
	block: {
		maxWidth: 150,
		float :'left',
		marginTop: 25,
		marginLeft :45,
	},
	toggle: {
		marginTop:10,
		marginBottom: 16,

	}
};
const toggleStyle2 ={
	block: {
		maxWidth: 150,
		float :'right',
		marginTop : 25,
		marginRight: 185,
	},
	toggle: {
		marginTop:10, 
		marginBottom: 16,
	}
};
const divStyle ={
	width: '100%'
};
const style = {
	height: 200,
	width: 900,
	margin: 6,
	textAlign: 'left',
	display: 'inline-block',
};
const headStyle={
	marginLeft: 220,
	textAlign: 'left'

}
const style1={
	margin :15,
	width: '100%',
	height:'100%'
};
const hospitalityDivStyle={
	width: '100%',
}
const styleDropdown={
	marginLeft: 80,
    width: 400  
}
const styleFloatLabel={
	float:'left',
	width:400
}
const styleFloatLabelLeft={
	float:'left',
	// marginLeft:28,
	width:400
}
const styleFloatLabelRight={
	float:'right',
	marginRight:28,
    width:400
}
class PaperExampleSimple extends React.Component {
 	constructor(props) {
    super(props);
    injectTapEventPlugin();

    this.state = {userDetailArr:[], countryDetails:[] };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.getUserDetailsBySubset();
    this.getCountryDetails();
  }

  handleChange(event) {
  	handleChange = (event, index, value) => this.setState({countryDetails:event.target.value});
 /* this.setState({value1: event.target.value1});
    this.setState({value2 :event.target.value2});
    this.setState({value3 :event.target.value3});
    this.setState({value4 :event.target.value4});
    this.setState({value5 :event.target.value5});
    this.setState({value6 :event.target.value6});
    this.setState({value7 :event.target.value7});
    this.setState({value8 :event.target.value8});
    this.setState({value9 :event.target.value9});
    this.setState({value10 :event.target.value10});
    this.setState({value11 :event.target.value11});*/

  }
    getCountryDetails(){
    	  axios({
                method: 'post',
                url: 'https://c4tneplantest.azure-api.net/platform/platform/countries',
                data: {
                    "key": "9d8d5b316dbae6a3c9faf18531ca34ce"
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Ocp-Apim-Subscription-Key': 'a2fe1cf9de1348a2bb328fbebe01a4fa',
                    'Ocp-Apim-Trace': 'false'

                }
            })
            .then((response) => {
                this.setState({countryDetails :response.data.data });
            })
    }

  getUserDetailsBySubset(){
    axios({
    	method:'post',
    	url:'https://c4tneplantest.azure-api.net/org/org/getUserDetailsBySubset',
    	data :{
    		"key":'9d8d5b316dbae6a3c9faf18531ca34ce',
    		"Subset":'getUserDetails'
    	},
    	headers:{
    		'Content-Type':'application/json',
            'Ocp-Apim-Subscription-Key':'a2fe1cf9de1348a2bb328fbebe01a4fa',
            'Ocp-Apim-Trace':'false'

    	}
    }).then((response)=>{
        console.log("response",response);
        // this.setState({value1:response.data.data[0].country});
        // // console.log("value 1" ,this.state.value1);
        // this.setState({value2:response.data.data[0].timezone});
        // this.setState({value3:response.data.data[0].language});
        // this.setState({value4:response.data.data[0].airlineSeatPref});
        // this.setState({value5:response.data.data[0].mealPref});
        // this.setState({value6:response.data.data[0].frequentFlierNo[0].number});
        // this.setState({value7:response.data.data[0].emergencyContName});
        // this.setState({value8:response.data.data[0].emergencyContPhNo});
        // this.setState({value9:response.data.data[0].specialAssistance});
        // this.setState({value10:response.data.data[0].otherSpclAsst});
        // this.setState({value11:response.data.data[0].emergencyContRltnshp});
        // this.setState({value12:response.data.data[0].frequentFlierNo[0].carrierName});
        this.setState({userDetailArr :response.data.data });
        // console.log('userDetailArr',this.state.userDetailArr);
        // console.log('smoking',this.state.userDetailArr[0].smoking);
        // console.log('email notf',this.state.userDetailArr[0].emailNotfAllwd);
        // console.log('sms notf',this.state.userDetailArr[0].notfSMS);

    });
  }
    render() {
     return (
	<div style={pageAlignmnet}>
	    <div style={headStyle} >
	        <i className="material-icons">book</i>
	        Preferences
	    </div>
	    <Paper style={style} zDepth={1} >
	        <div style={style1}>
	            <i className="material-icons">account_circle</i>
	            Product
	            {this.state.userDetailArr.map((numbers)=>
                    <div key={numbers.bloodGroup} >
                        <div>
	            	        <SelectField floatingLabelText="Country" style={styleFloatLabel} value={numbers.country} onChange={this.handleChange}>
                                
                                {this.state.countryDetails.map((city,index)=>
                                <div key={index} >
                                    <MenuItem value={city.country} primaryText={city.country} />
                                </div>
                    )}
                            </SelectField> 
	                    </div>
                        <div>
	            	        <SelectField floatingLabelText="TimeZone" style={styleDropdown} value={numbers.timezone} onChange={this.handleChange}>
                                <MenuItem value={numbers.timezone} primaryText={numbers.timezone} />
                                
                            </SelectField> 
	                    </div>
                        <div >
	            	        <SelectField floatingLabelText="Language" style={styleFloatLabel} value={numbers.language} onChange={this.handleChange}>
                                <MenuItem value={numbers.language} primaryText={numbers.language} />
                                
                            </SelectField> 
	                    </div>
	                </div>
	            )}
	            {/*<div>
	            	<SelectField style={styleFloatLabel} value={this.state.value1} onChange={this.handleChange}>
                        <MenuItem value={this.state.value1} primaryText={this.state.value1} />
                        
                    </SelectField> 
	            </div>
	                <div>
	            	    <SelectField style={styleDropdown} value={this.state.value2} onChange={this.handleChange}>
                            <MenuItem value={this.state.value2} primaryText={this.state.value2} />
                            
                        </SelectField> 
	                </div>
	                <div >
	            	    <SelectField style={styleFloatLabel} value={this.state.value3} onChange={this.handleChange}>
                            <MenuItem value={this.state.value3} primaryText={this.state.value3} />
                            
                        </SelectField> 
	                </div>*/}
	        </div>
	    </Paper>
	    <Paper style={style} zDepth={2} >
	        <div style={style1}>
	            <i className="material-icons">airplanemode_active</i>
	            Travel
	            {this.state.userDetailArr.map((numbers)=>
                <div key={numbers.bloodGroup} >
	            	 <div>
	            	    <SelectField floatingLabelText="Airline Seat Preference" style={styleFloatLabel} value={numbers.airlineSeatPref} onChange={this.handleChange}>
                            <MenuItem value={numbers.airlineSeatPref} primaryText={numbers.airlineSeatPref} />  
                        </SelectField> 
	                </div>
	                <div>
	            	    <SelectField floatingLabelText="Meal" style={styleDropdown} value={numbers.mealPref} onChange={this.handleChange}>
                            <MenuItem value={numbers.mealPref} primaryText={numbers.mealPref} />
                        </SelectField> 
	                </div>
                    <div>
	                    <TextField style={styleFloatLabelLeft} floatingLabelText='Freqent Flier' value={numbers.frequentFlierNo[0].number}/>
	                </div>
	                <div>
	                    <TextField style={styleFloatLabelRight} floatingLabelText='Airline Code' value={numbers.frequentFlierNo[0].carrierName} />
	                </div>
	            </div>
	            )}
	            {/*<div>
	            	<SelectField style={styleFloatLabel} value={this.state.value4} onChange={this.handleChange}>
                        <MenuItem value={this.state.value4} primaryText={this.state.value4} />
                        
                    </SelectField> 
	            </div>
	            <div>
	            	<SelectField style={styleDropdown} value={this.state.value5} onChange={this.handleChange}>
                        <MenuItem value={this.state.value5} primaryText={this.state.value5} />
                        
                    </SelectField> 
	            </div>
                <div>
	                <TextField  style={styleFloatLabelLeft} floatingLabelText='Freqent Flier' value={this.state.value6}/>
	            </div>
	            <div>
	                <TextField style={styleFloatLabelRight} floatingLabelText='Airline Code' value={this.state.value12} />
	            </div>*/}
	        </div>
	    </Paper>
	    <Paper style={style} zDepth={3} >
	        <div style={style1}>
	            <i className="material-icons">airline_seat_individual_suite</i>
	            Hospitality
	            {this.state.userDetailArr.map((numbers)=>
                <div key={numbers.bloodGroup}>
                	<div>
	                    <TextField  style={styleFloatLabelLeft} floatingLabelText='Special Assistance' value={numbers.specialAssistance}/>
	                </div>
	                <div style={toggleStyle2.block}>
	                         Smoking Room
	                        <Toggle
	                        label="Yes"
	                        defaultToggled={numbers.smoking}
	                        style={toggleStyle2.toggle}
	                        />
	                </div>	                 
	                <div >
	                    <TextField style={styleFloatLabelLeft} floatingLabelText='Other Special Assistance' value={numbers.otherSpclAsst}/>
	                </div>
                </div>
                )}
	                {/*<div>
	                    <TextField  style={styleFloatLabelLeft} floatingLabelText='Special Assistance' value={this.state.value9}/>
	                </div>
	                <div style={toggleStyle2.block}>
	                         Smoking Room
	                        <Toggle
	                        label="Yes"
	                        defaultToggled={true}
	                        style={toggleStyle2.toggle}
	                        />
	                </div>	                 
	                <div >
	                    <TextField style={styleFloatLabelLeft} floatingLabelText='Other Special Assistance' value={this.state.value10}/>
	                </div>*/}
	        </div>
	    </Paper>
	    <Paper style={style} zDepth={4} >
	        <div style={style1}>
	            <i className="material-icons">notifications</i>
	            Notification
	            {this.state.userDetailArr.map((numbers)=>
	            <div key={numbers.bloodGroup}>
	                  <div style={divStyle}>
	                    <div style={toggleStyle1.block}>
	                        Email
	                        <Toggle
	                        label="Yes"
	                        defaultToggled={numbers.emailNotfAllwd}
	                        style={toggleStyle1.toggle}
	                        />
	                    </div>
	                    <div style={toggleStyle2.block}>
	                         SMS
	                        <Toggle
	                        label="Yes"
	                        defaultToggled={numbers.notfSMS}
	                        style={toggleStyle2.toggle}
	                        />
	                    </div>
	                </div>
	            </div>
	            )}
	                {/*<div style={divStyle}>
	                    <div style={toggleStyle1.block}>
	                        Email
	                        <Toggle
	                        label="Yes"
	                        defaultToggled={true}
	                        style={toggleStyle1.toggle}
	                        />
	                    </div>
	                    <div style={toggleStyle2.block}>
	                         SMS
	                        <Toggle
	                        label="Yes"
	                        defaultToggled={true}
	                        style={toggleStyle2.toggle}
	                        />
	                    </div>
	                </div>*/}
	        </div>
	    </Paper>
	    <Paper style={style} zDepth={5} >
	        <div style={style1}>
	            <i className="material-icons">perm_contact_calendar</i>
	            Emergency Contact
	            {this.state.userDetailArr.map((numbers)=>
	            <div key={numbers.bloodGroup}>
	                 <div>
	                    <TextField style={styleFloatLabelLeft} floatingLabelText='Name' value={numbers.emergencyContName}/>
	                </div>
	                <div>
	                    <TextField style={styleFloatLabelRight} floatingLabelText='Contact Number' value={numbers.emergencyContPhNo} />
	                </div>   
	                <div>
	            	    <SelectField floatingLabelText='Relationship' style={styleFloatLabel} value={numbers.emergencyContRltnshp} onChange={this.handleChange}>
                            <MenuItem value={numbers.emergencyContRltnshp} primaryText={numbers.emergencyContRltnshp} />
                            
                        </SelectField> 
	                </div>
	            </div>
	            )}
	           {/* <div>
	                <TextField style={styleFloatLabelLeft} floatingLabelText='Name' value={this.state.value7}/>
	            </div>
	            <div>
	                <TextField style={styleFloatLabelRight} floatingLabelText='Contact Number' value={this.state.value8} />
	            </div>   
	            <div>
	            	<SelectField style={styleFloatLabel} value={this.state.value11} onChange={this.handleChange}>
                        <MenuItem value={this.state.value11} primaryText={this.state.value11} />
                        
                    </SelectField> 
	            </div>*/}
	        </div>
	    </Paper>
	</div>
	)
  }
}

class App extends React.Component{
	render(){
		return(

			<div>
			    <MuiThemeProvider> 
			        <PaperExampleSimple />
			    </MuiThemeProvider>
			</div>

			);
	}
}
export default App;

// <MenuItem value={numbers.country} primaryText={numbers.country} />