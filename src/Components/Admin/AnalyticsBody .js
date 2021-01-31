import React from 'react';

const AnalyticsBody = () => {
    
    return (
        <div className="content">
            <div className="row">
                <div className="col-md-12">
    
                    <div className="card card-default" id="user-activity">
                        <div className="row no-gutters">
                            <div className="col-xl-8">
                                <div className="border-right">
                                    <div className="card-header justify-content-between py-5">
                                        <h2>Actividad del usuario</h2>
                                        <div className="date-range-report ">
                                            <span></span>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs nav-style-border justify-content-between justify-content-xl-start border-bottom" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active pb-md-0" data-toggle="tab" href="#user" role="tab" aria-controls="" aria-selected="true">
                                                <span className="type-name">Usuarios</span>
                                                <h4 className="d-inline-block mr-2 mb-3">5248</h4>
                                                <span className="text-success ">5%
                            <i className="mdi mdi-arrow-up-bold"></i>
                          </span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link pb-md-0" data-toggle="tab" href="#session" role="tab" aria-controls="" aria-selected="false">
                                                <span className="type-name">Sesiones</span>
                                                <h4 className="d-inline-block mr-2 mb-3">638</h4>
                                                <span className="text-success ">20%
                            <i className="mdi mdi-arrow-up-bold"></i>
                          </span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link pb-md-0" data-toggle="tab" href="#bounce" role="tab" aria-controls="" aria-selected="false">
                                                <span className="type-name">% de rebote</span>
                                                <h4 className="d-inline-block mr-2 mb-3">36.9%</h4>
                                                <span className="text-danger ">7%
                            <i className="mdi mdi-arrow-down-bold"></i>
                          </span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link pb-md-0" data-toggle="tab" href="#session-duration" role="tab" aria-controls="" aria-selected="false">
                                                <span className="type-name">Duración-sesiones</span>
                                                <h4 className="d-inline-block mr-2 mb-3">4m 49s</h4>
                                                <span className="text-success ">15%
                            <i className="mdi mdi-arrow-up-bold"></i>
                          </span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="card-body">
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="user" role="tabpanel" aria-labelledby="home-tab">
                                                <canvas id="activity" className="chartjs"></canvas>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="card card-default" id="analytics-device" data-scroll-height="580">
                                    <div className="card-header justify-content-between">
                                        <h2>Sesiones por dipositivo</h2>
                                    </div>
                                    <div className="card-body">
                                        <div className="pb-5">
                                            <canvas id="deviceChart"></canvas>
                                        </div>
                                        <div className="row no-gutters justify-content-center">
                                            <div className="col-4 col-lg-3">
                                                <div className="card card-icon-info text-center border-0">
                                                    <i className="mdi mdi-desktop-mac"></i>
                                                    <p className="pt-3 pb-1">Escritorio</p>
                                                    <h4 className="text-dark pb-1">60.0%</h4>
                                                    <span className="text-danger">1.5% <i className="mdi mdi-arrow-down-bold"></i></span>
                                                </div>
                                            </div>
                                            <div className="col-4 col-lg-3">
                                                <div className="card card-icon-info text-center border-0">
                                                    <i className="mdi mdi-tablet-ipad"></i>
                                                    <p className="pt-3 pb-1">Tablet</p>
                                                    <h4 className="text-dark pb-1">15.0%</h4>
                                                    <span className="text-success">1.5% <i className="mdi mdi-arrow-up-bold"></i></span>
                                                </div>
                                            </div>
                                            <div className="col-4 col-lg-3">
                                                <div className="card card-icon-info text-center border-0">
                                                    <i className="mdi mdi-cellphone-android fa-3x"></i>
                                                    <p className="pt-3 pb-1">Móvil</p>
                                                    <h4 className="text-dark pb-1">25.0%</h4>
                                                    <span className="text-success">1.5% <i className="mdi mdi-arrow-up-bold"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="row">
                <div className="col-xl-12 col-12">
    
                    <div className="card card-default" id="user-acquisition">
                        <div className="card-header justify-content-between pb-5">
                            <h2>Adquisición de usuarios</h2>
                        </div>
    
                        <ul className="nav nav-tabs nav-style-border justify-content-between justify-content-lg-start border-bottom" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#traffic-channel" role="tab" aria-controls="" aria-selected="true">Tráfico</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#source-medium" role="tab" aria-controls="" aria-selected="false">Fuente /Medios </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#referrals" role="tab" aria-controls="" aria-selected="false">Referencias</a>
                            </li>
                        </ul>
                        <div className="tab-content p-3 p-lg-5" id="myTabContent">
                            <div className="tab-pane fade show active pb-4" id="source-medium" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="mb-5" style={{ height:"32vh"}}>
                                    <canvas id="acquisition" className="chartjs2"></canvas>
                                    <div id="acqLegend" className="customLegend mb-2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer d-flex flex-wrap bg-white">
                            <a href="#" className="text-uppercase py-3">Descripción general</a>
                        </div>
                    </div>
    
                </div>
            </div>
                <div className="row">

                    <div className="col-12 ">
                        <div className="card card-default" data-scroll-height="580">
                            <div className="card-header justify-content-between">
                                <h2>últimas notificaciones</h2>
                                <div>
                                    <button className="text-black-50 mr-2 font-size-20"><i className="mdi mdi-cached"></i></button>
                                    <div className="dropdown show d-inline-block widget-dropdown">
                                        <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-notification">
                                            <li className="dropdown-item"><a href="#">Action</a></li>
                                            <li className="dropdown-item"><a href="#">Another action</a></li>
                                            <li className="dropdown-item"><a href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </div>
    
                            </div>
                            <div className="card-body slim-scroll py-4">
                                <div className="media pb-4 align-items-center justify-content-between">
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                                        <i className="mdi mdi-cart-outline font-size-20"></i>
                                    </div>
                                    <div className="media-body pr-3 ">
                                        <a className="mt-0 mb-1 font-size-15 text-dark" href="#">Nueva orden</a>
                                        <p>Selena  ha realizado una nueva orden</p>
                                    </div>
                                    <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> 10 AM</span>
                                </div>
    
                                <div className="media py-3 align-items-center justify-content-between">
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-success text-white">
                                        <i className="mdi mdi-email-outline font-size-20"></i>
                                    </div>
                                    <div className="media-body pr-3">
                                        <a className="mt-0 mb-1 font-size-15 text-dark" href="#">Nuva consulta</a>
                                        <p>Phileine ha realizado una nueva orden</p>
                                    </div>
                                    <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> 9 AM</span>
                                </div>
    
    
                                <div className="media py-3 align-items-center justify-content-between">
                                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                                        <i className="mdi mdi-stack-exchange font-size-20"></i>
                                    </div>
                                    <div className="media-body pr-3">
                                        <a className="mt-0 mb-1 font-size-15 text-dark" href="#">Ticket</a>
                                        <p>Emma ha realizado una nueva orden</p>
                                    </div>
                                    <span className=" font-size-12 d-inline-block"><i className="mdi mdi-clock-outline"></i> 10 AM</span>
                                </div>
    
                            </div>
                            <div className="mt-3"></div>
                        </div>
                    </div>
    
                </div>
        </div>                     
    );
}

export default AnalyticsBody;
