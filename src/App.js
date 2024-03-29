import React, {Component} from 'react';
import './css/Grid.css';
import './App.css';

import SearchBar from './Components/SearchBar/SearchBar';
import Modal from './Components/Modal/Modal';
import Cards from './Components/Cards/Cards';
import Container from "@material-ui/core/Container";
import Loader from './Components/Loader/Loader';


import axios from 'axios';



const hardCodedData = [
    {
        "description": "Dehradun, Uttarakhand, India",
        "id": "0f39a7fbca70fc0f30c70bbf7c65aedcd25191c9",
        "matched_substrings": [
            {
                "length": 3,
                "offset": 0
            }
        ],
        "place_id": "ChIJr4jIVsMpCTkRmYdRMsBiNUw",
        "reference": "ChIJr4jIVsMpCTkRmYdRMsBiNUw",
        "structured_formatting": {
            "main_text": "Dehradun",
            "main_text_matched_substrings": [
                {
                    "length": 3,
                    "offset": 0
                }
            ],
            "secondary_text": "Uttarakhand, India"
        },
        "terms": [
            {
                "offset": 0,
                "value": "Dehradun"
            },
            {
                "offset": 10,
                "value": "Uttarakhand"
            },
            {
                "offset": 23,
                "value": "India"
            }
        ],
        "types": [
            "locality",
            "political",
            "geocode"
        ]
    },
    {
        "description": "Dehiwala Zoological Garden, Quarry Road, Dehiwala-Mount Lavinia, Sri Lanka",
        "id": "74886157ef962af003b9928513e1dc6ea51e82c9",
        "matched_substrings": [
            {
                "length": 3,
                "offset": 0
            }
        ],
        "place_id": "ChIJJQMFzqpb4joRn_WT_b_1kP0",
        "reference": "ChIJJQMFzqpb4joRn_WT_b_1kP0",
        "structured_formatting": {
            "main_text": "Dehiwala Zoological Garden",
            "main_text_matched_substrings": [
                {
                    "length": 3,
                    "offset": 0
                }
            ],
            "secondary_text": "Quarry Road, Dehiwala-Mount Lavinia, Sri Lanka"
        },
        "terms": [
            {
                "offset": 0,
                "value": "Dehiwala Zoological Garden"
            },
            {
                "offset": 28,
                "value": "Quarry Road"
            },
            {
                "offset": 41,
                "value": "Dehiwala-Mount Lavinia"
            },
            {
                "offset": 65,
                "value": "Sri Lanka"
            }
        ],
        "types": [
            "zoo",
            "point_of_interest",
            "establishment"
        ]
    },
    {
        "description": "Dehradun Airport, Dehradun, Dehradun, Uttarakhand, India",
        "id": "f779562758b44130947a2b918168a48f8caa2c7a",
        "matched_substrings": [
            {
                "length": 3,
                "offset": 0
            }
        ],
        "place_id": "ChIJzZKoP7gkCTkR6MlWHxp5In0",
        "reference": "ChIJzZKoP7gkCTkR6MlWHxp5In0",
        "structured_formatting": {
            "main_text": "Dehradun Airport, Dehradun",
            "main_text_matched_substrings": [
                {
                    "length": 3,
                    "offset": 0
                }
            ],
            "secondary_text": "Dehradun, Uttarakhand, India"
        },
        "terms": [
            {
                "offset": 0,
                "value": "Dehradun Airport, Dehradun"
            },
            {
                "offset": 28,
                "value": "Dehradun"
            },
            {
                "offset": 38,
                "value": "Uttarakhand"
            },
            {
                "offset": 51,
                "value": "India"
            }
        ],
        "types": [
            "airport",
            "point_of_interest",
            "establishment"
        ]
    },
    {
        "description": "Dehri-on-sone, Bihar, India",
        "id": "7ab7ce18916fd2c31e412c2185b1aca9ed9637c1",
        "matched_substrings": [
            {
                "length": 3,
                "offset": 0
            }
        ],
        "place_id": "ChIJYeyEy6aujTkRgqpcqHxsVts",
        "reference": "ChIJYeyEy6aujTkRgqpcqHxsVts",
        "structured_formatting": {
            "main_text": "Dehri-on-sone",
            "main_text_matched_substrings": [
                {
                    "length": 3,
                    "offset": 0
                }
            ],
            "secondary_text": "Bihar, India"
        },
        "terms": [
            {
                "offset": 0,
                "value": "Dehri-on-sone"
            },
            {
                "offset": 15,
                "value": "Bihar"
            },
            {
                "offset": 22,
                "value": "India"
            }
        ],
        "types": [
            "locality",
            "political",
            "geocode"
        ]
    },
    {
        "description": "Dehu Road, Maharashtra, India",
        "id": "39f9d174603f84b51174d784133a626078fae355",
        "matched_substrings": [
            {
                "length": 3,
                "offset": 0
            }
        ],
        "place_id": "ChIJIf-DBcuwwjsR9c570NWHaKY",
        "reference": "ChIJIf-DBcuwwjsR9c570NWHaKY",
        "structured_formatting": {
            "main_text": "Dehu Road",
            "main_text_matched_substrings": [
                {
                    "length": 3,
                    "offset": 0
                }
            ],
            "secondary_text": "Maharashtra, India"
        },
        "terms": [
            {
                "offset": 0,
                "value": "Dehu Road"
            },
            {
                "offset": 11,
                "value": "Maharashtra"
            },
            {
                "offset": 24,
                "value": "India"
            }
        ],
        "types": [
            "locality",
            "political",
            "geocode"
        ]
    }
]
  
const apiKey = 'AIzaSyDO56xnP2e1JTtKAL68PoRUUOn9ZFpY0l0';
const sessionTokken= (Math.random()*10);
const authOptions = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "http://localhost:3000",
    }
  };

class App extends Component {
  
  state = {
      searchValue: "",
      isLoading: false, // handling loader on app
      autocomplete:[],
      result: null, // object that is selected
      displayModel: false,
      displayCards: false,
      showAutoComplete: true,
  }


  // for handling the input on searchBar
  searchValueHandler = (event) => {
    
    console.log(event.target.value)
    
    if(event.target.value.length > 0){
      // making call to fetch autocomplete data
      let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${event.target.value}&key=${apiKey}&sessiontoken=${sessionTokken}`;
      console.log(url);
     
    //   axios.post(url)
    //   .then(res => {
    //       console.log(res);
    //         if(res.data){
    //             this.setState({
    //                 autocomplete: res.data.predictions,
    //                 showAutoComplete: true,
    //                 displayCards: false
    //               })
    //         }else{
    //             this.setState({
    //                 showAutoComplete: true,
    //                 displayCards: false,
    //                 autocomplete: hardCodedData
    //               })
    //         }
              
    //   })
    //   .catch(err => console.log("ERROR"));

      this.setState({
        searchValue: event.target.value,
        autocomplete: hardCodedData,
        showAutoComplete: true,
        displayCards: false
      })
    }//if
    else{
        this.setState({
            searchValue: "",
            autocomplete: hardCodedData,
            showAutoComplete: false,
            displayCards: false
          })
    }
  }

  // on click autocomplete will send requst for final search value
  autocompleteSelect = (id) => {

    console.log("CLICKED LI ",id)

      let selected  = this.state.autocomplete.find(function(place){
          return place.place_id === id
      })

      console.log(selected.structured_formatting.main_text);

      this.setState({
        result: selected,
        searchValue: selected.structured_formatting.main_text,
        showAutoComplete: false,
        //autocomplete: []
      })
  }

  // for setting data to modal
  modalToggler = () => {

    let display = this.state.displayModel;
    this.setState({
      displayModel: !display
    })

  }

  //search button clicked Handler
  searchButtonClickHandler = () => {
    console.log("clicked");
    //when clicked we need to send request to query complete api google
    let url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.state.searchValue}&key=${apiKey}&sessiontoken=${sessionTokken}`;
      
     
    this.setState({
        isLoading: true,
        showAutoComplete: false
    })



      axios(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "http://localhost:3000"
        }
      })
      .then(res => {
          console.log("RESPONSE",res.data.predictions.length," ",res.data);
          if(res.data && res.data.predictions.length>0){
              console.log("LOGGING RES DATAT");
            this.setState({
                autocomplete: res.data.predictions,
                displayCards: true,
                showAutoComplete: false,
                searchValue: "",
                isLoading:false
              })
          } else{
              console.log("LOGGING HARDCODED")
            this.setState({
                autocomplete: hardCodedData,
                displayCards: true,
                showAutoComplete: false,
                searchValue: "",
                isLoading:false
              })
          }
      })
      .catch(err => {
            console.log("EROR",err)
            this.setState({
                autocomplete: hardCodedData,
                displayCards: true,
                showAutoComplete: false,
                searchValue: "",
                isLoading:false
              })
        });


     

    }



    showWeatherInfo = (cityName) => {
        this.setState({
            isLoading : true
        })

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=77531ae36740ffab832db5c0c158f4d0`
        axios.post(url)
        .then(res => {
          console.log(" Response from server ",res);
          if(res.data){
            this.setState({
                result: res.data,
                isLoading: false,
                displayModel:true
              })
          }else{
            this.setState({
                result: null,
                isLoading: false,
                displayModel:true
              })
          }
            
      })
      .catch(err => {
            console.log("ERROR")
            this.setState({
                result: null,
                isLoading: false,
                displayModel:true
              })
            }
            );


    }



  


  render() {

    let cards = null;
    let modal = null;

    if(this.state.displayCards){
        cards = (
            <Cards 
                autocomplete={this.state.autocomplete}
                onShowWeatherForLocation={this.showWeatherInfo}
            />
        )
    }

    if(this.state.isLoading){
        modal = (
            <Loader />
        )
    }


    if(this.state.displayModel && !this.state.isLoading){
        modal = (
            <Modal
                data = {this.state.result}
                closeModal = {this.modalToggler}
            />
        )
    }



    return (
            <Container 
                    maxWidth="md" 
                    style={{minHeight: '90vh', boxSizing: 'border-box', overflow: 'hidden'}}>
                <SearchBar
                    searchBarHandler={this.searchValueHandler}
                    areCardsDisplay={this.state.displayCards}   
                    autocompleteResult={this.state.autocomplete} 
                    autocompleteSelect={this.autocompleteSelect}
                    searchValue={this.state.searchValue} 
                    searchValueButtonClicked={this.searchButtonClickHandler} 
                    showAutoComplete={this.state.showAutoComplete}         
                />

                {cards}
                {modal}
            </Container>
    );
  }
  
}

export default App;