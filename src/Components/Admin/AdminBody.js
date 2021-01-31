import React from 'react';

const AdminBody = () => {
    
    return (           
            <div className="content">
                                <div className="row">
                                    <div className="col-xl-3 col-sm-6">
                                        <div className="card card-mini mb-4">
                                            <div className="card-body">
                                                <h2 className="mb-1">503</h2>
                                                <p>Registros en línea</p>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6">
                                        <div className="card card-mini  mb-4">
                                            <div className="card-body">
                                                <h2 className="mb-1">53</h2>
                                                <p>Visitantes del día</p>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6">
                                        <div className="card card-mini mb-4">
                                            <div className="card-body">
                                                <h2 className="mb-1">153</h2>
                                                <p>Total de pedidos</p>
                                            
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-sm-6">
                                        <div className="card card-mini mb-4">
                                            <div className="card-body">
                                                <h2 className="mb-1">9,503</h2>
                                                <p>Ingreso total</p>
                                                                </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-xl-8 col-md-12">
                                        <div className="card card-default" data-scroll-height="675">
                                            <div className="card-header">
                                                <h2>Ventas del año</h2>
                                            </div>
                                            <div className="card-body">
                                                <canvas id="linechart" className="chartjs"></canvas>
                                            </div>
                                            <div className="card-footer d-flex flex-wrap bg-white p-0">
                                                <div className="col-6 px-0">
                                                    <div className="text-center p-4">
                                                        <h4>$608</h4>
                                                        <p className="mt-2">Pedidos totales de este año</p>
                                                    </div>
                                                </div>
                                                <div className="col-6 px-0">
                                                    <div className="text-center p-4 border-left">
                                                        <h4>$7,506</h4>
                                                        <p className="mt-2">Ingresos totales de este año</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-md-12">
                                        <div className="card card-default" data-scroll-height="675">
                                            <div className="card-header justify-content-center">
                                                <h2>Resumen de pedidos</h2>
                                            </div>
                                            <div className="card-body mb-3">
                                                <canvas id="doChart"></canvas>
                                            </div>
                                            <div className="card-footer d-flex flex-wrap bg-white p-0">
                                                <div className="col-6">
                                                    <div className="py-4 px-3">
                                                        <ul className="d-flex flex-column justify-content-between">
                                                            <li className="mb-3"><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{color: "#4c84ff"}}></i>Pedidos completados</li>
                                                            <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{color: "#80e1c1"}}></i>Pedidos por pagar</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-6 border-left">
                                                    <div className="py-4 px-3 ">
                                                        <ul className="d-flex flex-column justify-content-between">
                                                            <li className="mb-3"><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{color: "#8061ef"}}></i>Pedidos pendientes</li>
                                                            <li><i className="mdi mdi-checkbox-blank-circle-outline mr-2" style={{color: "#ffa128"}}></i>Pedidos cancelados
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-xl-4 col-lg-12 col-12">
                                        <div className="card card-table-border-none" data-scroll-height="550">
                                            <div className="card-header justify-content-between">
                                                <h2>Ventas por unidades</h2>
                                                <div>
                                                    <button className="text-black-50 mr-2 font-size-20"><i className="mdi mdi-cached"></i></button>
                                                    <div className="dropdown show d-inline-block widget-dropdown">
                                                        <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-units" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-units">
                                                            <li className="dropdown-item"><a href="#">Action</a></li>
                                                            <li className="dropdown-item"><a href="#">Another action</a></li>
                                                            <li className="dropdown-item"><a href="#">Something else here</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body slim-scroll py-0">
                                                <table className="table ">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-dark">Cocinas</td>
                                                            <td className="text-center">9</td>
                                                            <td className="text-right">33% <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i> </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-dark">Refrigeradoras</td>
                                                            <td className="text-center">6</td>
                                                            <td className="text-right">150% <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i> </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-dark">Mascarillas</td>
                                                            <td className="text-center">3</td>
                                                            <td className="text-right">50% <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i> </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-dark">Licuadoras</td>
                                                            <td className="text-center">7</td>
                                                            <td className="text-right">150% <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i> </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-dark">Ventiladores</td>
                                                            <td className="text-center">10</td>
                                                            <td className="text-right">300% <i className="mdi mdi-arrow-down-bold text-danger pl-1 font-size-12"></i>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-dark">Televisores</td>
                                                            <td className="text-center">5</td>
                                                            <td className="text-right">100% <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i> </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-dark">Tostadoras</td>
                                                            <td className="text-center">6</td>
                                                            <td className="text-right">150% <i className="mdi mdi-arrow-up-bold text-success pl-1 font-size-12"></i> </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-xl-8">
                                    <div className="card card-default" data-scroll-height="580">
                                            <div className="card-header justify-content-between mb-4">
                                                <h2>Top Products</h2>
                                                <div>
                                                    <button className="text-black-50 mr-2 font-size-20"><i className="mdi mdi-cached"></i></button>
                                                    <div className="dropdown show d-inline-block widget-dropdown">
                                                        <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-product" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                                        </a>
                                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-product">
                                                            <li className="dropdown-item"><a href="#">Update Data</a></li>
                                                            <li className="dropdown-item"><a href="#">Detailed Log</a></li>
                                                            <li className="dropdown-item"><a href="#">Statistics</a></li>
                                                            <li className="dropdown-item"><a href="#">Clear Data</a></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="card-body py-0 mb-2">
                                                <div className="media d-flex mb-4">
                                                    <div className="media-image align-self-center mr-3 rounded">
                                                        <a href="#"><img src="/scripts/sleek-dashboard/dist/assets/img/products/p1.jpg" alt="customer image"/></a>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <a href="#">
                                                            <h6 className="mb-2 text-dark font-weight-medium"> Ventilador</h6>
                                                        </a>
                                                        <p className="float-md-right"><span className="text-dark mr-2">20</span>Ventas</p>
                                                        <p className="d-none d-md-block">Descripción breve del producto a la venta, marca, descrpcion física, entre otros.
                                                        </p>
                                                        <p className="mb-0">
                                                            <del>$30</del>
                                                            <span className="text-dark ml-3">$25</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="media d-flex mb-4">
                                                    <div className="media-image align-self-center mr-3 rounded">
                                                        <a href="#"><img src="/scripts/sleek-dashboard/dist/assets/img/products/p2.jpg" alt="customer image"/></a>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <a href="#">
                                                            <h6 className="mb-2 text-dark font-weight-medium"> Refrigedora</h6>
                                                        </a>
                                                        <p className="float-md-right"><span className="text-dark mr-2">20</span>Ventas</p>
                                                        <p className="d-none d-md-block">Descripción breve del producto a la venta, marca, descrpcion física, entre otros.
                                                        </p>
                                                        <p className="mb-0">
                                                            <del>$300</del>
                                                            <span className="text-dark ml-3">$250</span>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="media d-flex mb-4">
                                                    <div className="media-image align-self-center mr-3 rounded">
                                                        <a href="#"><img src="/scripts/sleek-dashboard/dist/assets/img/products/p3.jpg" alt="customer image"/></a>
                                                    </div>
                                                    <div className="media-body align-self-center">
                                                        <a href="#">
                                                            <h6 className="mb-2 text-dark font-weight-medium">Cocina</h6>
                                                        </a>
                                                        <p className="float-md-right"><span className="text-dark mr-2">10</span>Ventas</p>
                                                        <p className="d-none d-md-block">Descripción breve del producto a la venta, marca, descrpcion física, entre otros.                                </p>
                                                        <p className="mb-0">
                                                            <del>$300</del>
                                                            <span className="text-dark ml-3">$250</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card card-table-border-none" id="recent-orders">
                                            <div className="card-header justify-content-between">
                                                <h2>Pedidos recientes</h2>
                                                <div className="date-range-report ">
                                                    <span></span>
                                                </div>
                                            </div>
                                            <div className="card-body pt-0 pb-5">
                                                <table className="table card-table table-responsive table-responsive-large" style={{width:"100%"}}>
                                                    <thead>
                                                        <tr>
                                                            <th>ID pedido</th>
                                                            <th>Nombre del producto</th>
                                                            <th className="d-none d-md-table-cell">Unidades</th>
                                                            <th className="d-none d-md-table-cell">Fecha del pedido</th>
                                                            <th className="d-none d-md-table-cell">Valor del pedido</th>
                                                            <th>Estado</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    
                                                    
                                                        <tr>
                                                            <td>24541</td>
                                                            <td>
                                                                <a className="text-dark" href=""> Refrigedora</a>
                                                            </td>
                                                            <td className="d-none d-md-table-cell">1 Unidad</td>
                                                            <td className="d-none d-md-table-cell">Nov 18, 2018</td>
                                                            <td className="d-none d-md-table-cell">$325</td>
                                                            <td>
                                                                <span className="badge badge-warning">En espera</span>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="dropdown show d-inline-block widget-dropdown">
                                                                    <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-recent-order3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order3">
                                                                        <li className="dropdown-item">
                                                                            <a href="#">View</a>
                                                                        </li>
                                                                        <li className="dropdown-item">
                                                                            <a href="#">Remove</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>24541</td>
                                                            <td>
                                                                <a className="text-dark" href=""> Ventiladores</a>
                                                            </td>
                                                            <td className="d-none d-md-table-cell">5 Unidades</td>
                                                            <td className="d-none d-md-table-cell">Dec 13, 2018</td>
                                                            <td className="d-none d-md-table-cell">$200</td>
                                                            <td>
                                                                <span className="badge badge-success">Completa</span>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="dropdown show d-inline-block widget-dropdown">
                                                                    <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-recent-order4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order4">
                                                                        <li className="dropdown-item">
                                                                            <a href="#">View</a>
                                                                        </li>
                                                                        <li className="dropdown-item">
                                                                            <a href="#">Remove</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>24541</td>
                                                            <td>
                                                                <a className="text-dark" href=""> Licuadoras</a>
                                                            </td>
                                                            <td className="d-none d-md-table-cell">1 Unidad</td>
                                                            <td className="d-none d-md-table-cell">Dec 23, 2018</td>
                                                            <td className="d-none d-md-table-cell">$40</td>
                                                            <td>
                                                                <span className="badge badge-danger">Cancelada</span>
                                                            </td>
                                                            <td className="text-right">
                                                                <div className="dropdown show d-inline-block widget-dropdown">
                                                                    <a className="dropdown-toggle icon-burger-mini" href="#" role="button" id="dropdown-recent-order5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static"></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-recent-order5">
                                                                        <li className="dropdown-item">
                                                                            <a href="#">View</a>
                                                                        </li>
                                                                        <li className="dropdown-item">
                                                                            <a href="#">Remove</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                 
                    
    );
}

export default AdminBody;
