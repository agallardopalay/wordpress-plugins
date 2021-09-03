import React from 'react';
import Util from "../Utils";

const DMPResult = ({lan, debt, tableResults, debtManagementResults, translations, ctaID, ctaOpenModal, phoneNumber }) => {

    const difMonths = tableResults.length ? parseInt(tableResults[tableResults.length-1].month) - debtManagementResults.numberOfMonths : 0;
    let difPayment = 0;
    const DMPpayments = debtManagementResults ? parseFloat(debtManagementResults.totalAmountPaid) : 0;
    const noDMPpayments = tableResults.length ? parseFloat(tableResults[tableResults.length-1].totalInterest) + parseFloat(debt) : 0;
    difPayment = Util.roundTo(noDMPpayments - DMPpayments, 2);

    return (
            <div id="debtResultWrap" className={debtManagementResults !==null ? 'active' : '' }>
                <div className="dmp-bg dmp-nobg">
                    <div className="row">
                        <div className="col text-center">
                            <div className="dmp-cred-logos">
                                <div className="logos-parent cred-uw-parent">
                                    <span className="sprite cred-uw" aria-label={translations.credUWText} title={translations.credUWText}></span>
                                    <span className="sr-only">{translations.credUWText}</span>
                                </div>
                                <div className="logos-parent cred-bbb-parent">
                                    <span className="sprite cred-bbb" aria-label={translations.credBBBText} title={translations.credBBBText}></span>
                                    <span className="sr-only">{translations.credBBBText}</span>
                                </div>
                            </div>

                            <div className="savings-head">{translations.youCanSaveText}</div>

                            <p>{translations.withThisDebtText}</p>
                            <div className="savings-per-month">${debtManagementResults !== null ? Util.formatMoney(debtManagementResults.monthlyPayment) : 0} {translations.perMonth}</div>

                            <p><strong>{translations.dmpComparisonText}</strong></p>

                            {/* API Results */}
                            <div className="row justify-content-center no-gutters debt-analyzer-results text-center">
                                <div className="order-1 order-md-2 col-md-5 p-1" id="dmp_block">
                                    <div className="card mb-4 shadow">
                                        <div className="card-header bg-color-blue">
                                            <h4>{translations.withDMPText}*</h4>
                                        </div>
                                        <div className="card-subheader bg-color-lightblue">
                                            <h5><span>${ debtManagementResults !== null ? Util.formatMoney(debtManagementResults.monthlyPayment) : 0 }</span> / {translations.monthtext}</h5>
                                        </div>
                                        <div className="card-intro">
                                            <small>{translations.timePayFullText}</small>
                                            <div className="card-results">{debtManagementResults !== null ? Util.getDateFromNumberOfMonths(debtManagementResults.numberOfMonths, lan) : 0}</div>
                                        </div>
                                        <div className="card-body">
                                            <small>{translations.totalCostandIntrestText}:</small>
                                            <div className="card-results">${debtManagementResults !== null ? Util.formatMoney(debtManagementResults.totalAmountPaid) : 0}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="order-2 order-md-1 col-md-3 p-1" id="not_dmp_block">
                                    <div className="card mt-md-4 mb-4">
                                        <div className="card-header bg-color-gray narrow-padding">
                                            <h4 className="font-small">{translations.onlyMinimumPaymentsText}</h4>
                                        </div>
                                        <div className="card-subheader bg-color-lightgray">
                                            <h5>
                                                <span>
                                                    ${ tableResults.length ? Util.formatMoney(tableResults[0].minimumPayment) : 0 }
                                                    {tableResults.length && Util.countDecimalPlaces(tableResults[0].minimumPayment) === 1 && '0'}
                                                    {tableResults.length && Util.countDecimalPlaces(tableResults[0].minimumPayment) === 0 ? '.00': ''}
                                                </span> / {translations.monthtext}
                                            </h5>
                                        </div>
                                        <div className="card-intro p10">
                                            <small>{translations.timePayFullText}</small>
                                            <div className="card-results font-small">{tableResults.length ? Util.getDateFromNumberOfMonths(tableResults[tableResults.length-1].month, lan) : 0}</div>
                                        </div>
                                        <div className="card-body p10">
                                            <small>{translations.totalCostandIntrestText}:</small>
                                            <div className="card-results font-small">${ tableResults.length ? Util.formatMoney( Util.roundTo(parseFloat(tableResults[tableResults.length-1].totalInterest) + parseFloat(debt), 2) ) : 0 }</div>
                                        </div>
                                    </div>
                                </div>

                                { debtManagementResults !== null && difMonths > 0 && difPayment > 0 ? (<div className="order-3 col-md-4 p-1" id="savings_block">
                                    <div className="card mb-4">
                                        <div className="card-header bg-color-blue">
                                            <h4>{translations.youSaveText}*</h4>
                                        </div>
                                        <div className="card-subheader bg-color-lightblue pb-1">&nbsp;</div>
                                        <div className="card-intro" id="savings_Time_block">
                                            <small>{translations.timeSavedText}:</small>
                                            <div id="savings_Time" className="card-results">{Util.getDateFromNumberOfMonths(difMonths, lan)}</div>
                                        </div>
                                        <div className="card-body">
                                            <small>{translations.totalAmountSaved}:</small>
                                            <div id="savings_fees" className="card-results">${Util.formatMoney(difPayment)}</div>
                                        </div>
                                    </div>
                                </div>) : ''}

                            </div>
                            {/* End of Results */}

                        </div>

                        <div className="col-12">
                            <div id="debtSavings" className="text-center">
                                <div className="dmp-lead-button ml-0 p-0">
                                    { ctaOpenModal ? (<a id="dmpFormStart" href={ctaID} data-toggle="modal" className="btn btn-primary">{translations.ctaLabel} <i className="far fa-arrow-circle-right" /></a>) : (<a href={ctaID} className="btn btn-primary">{translations.ctaLabel} <i className="far fa-arrow-circle-right" /></a>) }
                                </div>

                                {/* <span className="phoneNumber pl-0 ml-0">
                                    <a href={`tel:+1${phoneNumber}`} className="tracking-phone-click no-animation ml-0 ml-md-2">
                                        <span className="tracking-phone">{phoneNumber}</span>
                                    </a>
                                </span> */}

                                <div className="text-center mt-2">
                                    {translations.dontwait1}
                                    <br/><strong className="bigstrong">{translations.callText} <a href={`tel:+1${phoneNumber}`}>{phoneNumber}</a> {translations.nowText}!</strong><br/>
                                    {translations.dontwait2}
                                </div>

                            </div>
                            <div className="disclaimer">
                                {translations.disclaimer}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    )

};

export default DMPResult;
