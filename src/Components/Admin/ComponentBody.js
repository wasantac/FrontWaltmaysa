import React from 'react';

const ComponentBody = () => {
    
    return (
        <div>
            <div className="card card-default" id="user-activity">
                <div className="row no-gutters">
                    <div className="col-12">
                        <div className="border-right">
                            <div className="card-header justify-content-between py-5">
                                <form id="regForm" action="">

                                    <h2>Ingreso de productos</h2>

                                    <div className="tab mt-2 bt-3">Datos principales:

                                        <p><input placeholder="Código" oninput="this.className = ''"/></p>
                                        <p><input placeholder="Nombre producto..." oninput="this.className = ''"/></p>
                                        
                                        <p>

                                            <select name="Tipo_producto" id="tipo_prod">
                                            <option disabled selected>Selecciona un tipo de producto</option>

                                            <option value="Elec">Electrodomestico</option>
                                            <option value="Hogar">Hogar</option>
                                            <option value="Otros">Otros</option>
                                            </select>
                                        </p>
                                    </div>

                                    <div className="tab">Descripción producto:
                                        <p><input placeholder="Titulo producto" oninput="this.className = ''"/></p>
                                        <p><textarea placeholder="Descripción corta" className="form-control" rows="2" oninput="this.className = ''"></textarea></p>
                                        <p><textarea placeholder="Especificaciones" className="form-control" rows="6" required></textarea></p>
                                    </div>

                                    <div className="tab">Detalles:  
                                        <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input placeholder="precio unitario" oninput="this.className = ''" type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text">.00</span>
                                        </div>
                                        </div>
                                        <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">$</span>
                                        </div>
                                        <input placeholder="precio a la venta" oninput="this.className = ''" type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                                        <div className="input-group-append">
                                        <span className="input-group-text">.00</span>
                                    </div>
                                    </div>

                                    <p><input placeholder="unidades" oninput="this.className = ''"/></p>
                                    <div className="input-group">
                                        <div className="custom-file">
                                            <label className="custom-file-label" for="inputGroupFile04">Choose file</label>
                                        </div>
                                    </div>
                                    
                                    </div>

                                    <div style={{overflow:"auto"}}>
                                    <div style={{float:"right"}}>
                                        <button type="button" className="btn btn-primary" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
                                        <button type="button" className="btn btn-success" id="nextBtn" onclick="nextPrev(1)">Next</button>
                                    </div>
                                    </div>

                                    <div style={{textAlign:"center", marginTop:"10px"}}>
                                        <span className="step"></span>
                                        <span className="step"></span>
                                        <span className="step"></span>
                                     </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
                        
    );
}

export default ComponentBody;
