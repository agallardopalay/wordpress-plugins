import React, { Component, lazy, Suspense } from 'react';
import axios from 'axios';
import Util from "./Utils";
import getTranslations from './language';
// import InputGroup from './components/inputGourp';
import './App.css';

const InputGroupField = lazy(() => import('./components/inputGourp'));
const DMPResult = lazy(() => import('./components/DMPResult'));

class App extends Component {
  constructor(props){
    super(props);

    this.translations = getTranslations(this.props.lan);
    this.state = {
      debt: "-",
      phoneNumber: props.phoneNumber,
      loading: false,
      tableResults: [],
      debtManagementResults: null,
      apiError: false,
    }
  }

  handlerDebtChange = e => {
    const debt = Util.removeMoneyTrash(e.target.value);

    if( Util.valueIsInteger(debt) && debt < 1000000 ){
        this.setState({debt, tableResults: [], debtManagementResults: null});
    }
  }

  handleSubmit = e =>{
    e.preventDefault();
    const {debt} = this.state;
    const perc = (this.props.lan === 'ca' || this.props.lan === 'fr') ? '2.5' : '3';

    if(!debt){ return; }

    const apiUrl = 'https://calculator-api-bk.debt.com/api/v1';
    const checkInfinityPaymentUrl = apiUrl + '/validatePayments/' + debt + '/18/'+ perc +'/25';
    const noDebtManagementURL = apiUrl + '/getPayments/' + debt + '/18/'+ perc +'/25';
    const debtManagementURL = apiUrl + '/debtmanagement/'+ debt + '/8/1';

    this.setState({loading : true, tableResults: [], debtManagementResults: null}, ()=>{
        axios.get(checkInfinityPaymentUrl)
          .then(({data}) => {

            if(!data.payments){
              this.setState({ tableResults: [], debtManagementResults: null, apiError: true, loading : false });
            }else{

                axios.all([
                  axios.get(noDebtManagementURL),
                  axios.get(debtManagementURL)
                ])
                .then(axios.spread((paymentSchedule, debtManagement) => {
                  // Working with both responses
                  let phones_found = this.state.phoneNumber;
                  if(document.getElementsByClassName('tracking-phone').length){
                    phones_found = document.getElementsByClassName('tracking-phone')[0].innerText;
                  }else{
                    if(document.getElementsByClassName('ShowPhoneNumber').length){
                      phones_found = document.getElementsByClassName('ShowPhoneNumber')[0].innerText;
                    }
                  }

                  if(document.getElementsByClassName('notracking-phone').length){
                    phones_found = document.getElementsByClassName('notracking-phone')[0].innerText;
                  }

                  this.setState({ tableResults: paymentSchedule.data, debtManagementResults: debtManagement.data, phoneNumber: phones_found, apiError: false, loading : false });
                }))
                .catch((e) => {
                    //In case of Ex.: "Non Reachable Server"
                    console.log(e);
                    this.setState({ tableResults: [], debtManagementResults: null, loading : false });
                });

            }

          })
          .catch((error) => {
            console.log(error);
            this.setState({ tableResults: [], debtManagementResults: null, loading : false });
            return { success: false };
          });

    });

  }

  renderSpiner = () => {
    return (
        <div className="loader-spiner-dmp" style={{display: this.state.loading ? 'block': 'none'}}>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            <p>{this.translations.loadingText}</p>
        </div>
    );
  }

  render() {
    const {debt, tableResults, debtManagementResults} = this.state;

    return (
        <div className="container">
            <div className="dmp-calc-heading">
                <h2 className="fancy-title color-white mb-4">
                    <span className="color-white">{this.translations.sectionTitletext}</span>
                </h2>

                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <h3>{this.translations.sectionSubtitletext}</h3>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <form name="formDebt" id="dmpcomparison" noValidate="novalidate" onSubmit={this.handleSubmit.bind(this)} >

                        <Suspense fallback={this.renderSpiner()}>
                          <InputGroupField
                              id="dmpInputID"
                              label={this.translations.inputDebtLabel}
                              value={this.state.debt !== '-' ? Util.formatMoney(this.state.debt) : '' }
                              placeholder={this.translations.inputDebtPlaceholder}
                              errorOccur={(Number(this.state.debt) < 1 || Number(this.state.debt) > 999999 || this.state.debt === '') ? 1 : 0}
                              errorMsg={this.translations.debtInputError}
                              onChange={this.handlerDebtChange}
                          />
                        </Suspense>

                        <div className="text-center">
                            <button id="dmpSubmitDebt" type="submit" className="btn btn-primary pl-4 pr-4" aria-label={this.translations.btnAriaLabel} disabled={(Number(this.state.debt) < 1 || Number(this.state.debt) > 999999 || this.state.debt === '' || this.state.debt === '-') ? 1 : 0}>
                                {this.translations.btnTitle}
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <Suspense fallback={this.renderSpiner()}>
                <DMPResult
                    lan={this.props.lan}
                    debt={debt}
                    tableResults={tableResults}
                    translations={this.translations}
                    debtManagementResults={debtManagementResults}
                    ctaID={this.props.ctaID}
                    ctaOpenModal={this.props.ctaOpenModal}
                    phoneNumber={this.state.phoneNumber}
                />
            </Suspense>
        </div>

    );
  }
}

export default App;
