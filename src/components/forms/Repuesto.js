import React, { useState, useEffect } from 'react'
import Select from '../common/Select.js'
import Input from '../common/Field.js'
import LinkSugar from '../../../utils/link-sugar';
import { useRouter } from "next/router";
import { posventa_versiones, anios } from "../../../utils/constant";
import { sendRepuestosInfo } from "../../../pages/api/repuestos";
import { getRepuestos } from "../../../pages/api/PosVenta";
import { StorageInconcertContext } from "../../context/StorageFormInconcert";

function Repuesto(props) {
	const { cotRepuesto, saveCotizacionRepuesto, resetCotizacionRepuesto } = React.useContext(StorageInconcertContext);

	const router = useRouter();
	const inputRefs = React.useRef([
		React.createRef(),
		React.createRef(),
		React.createRef(),
		React.createRef(),
		React.createRef(),
		React.createRef(),
		React.createRef(),
		React.createRef(),
	]);
	const [data, setData] = React.useState();
	const [clean, setClean] = React.useState(false);
	const [repuestos, setRepuestos] = useState([]);
	useEffect(() => {
    (async () => {
      const response = await getRepuestos();
      setRepuestos(response);
    })();
  }, []);
	//function to handle change on every input component
	const handleChange = (value, name) => {
		//use the old state   ...prev create a new copy, [name]: value set on key name the value  []
		console.log(value);
		setData(prev => ({ ...prev, [name]: value }));
	}

	const sendToSugar = () => {
		// Se establece la data a enviar
		const sugarData = {
			cot_repuesto: data.repuesto,
			cot_repuesto_modelo: data.modelo,
			cot_repuesto_anio: data.anio,
			cot_repuesto_datosCliente_nombres: data.nombres,
			cot_repuesto_datosCliente_apellidos: data.apellidos,
			cot_repuesto_datosCliente_cedula: data.cedula,
			cot_repuesto_datosCliente_correo: data.correo,
			cot_repuesto_datosCliente_telefono: data.telefono

		};

		const LS = new LinkSugar(
			3, 
			sugarData.cot_repuesto_datosCliente_cedula,
			sugarData.cot_repuesto_datosCliente_nombres,
			sugarData.cot_repuesto_datosCliente_apellidos,
			sugarData.cot_repuesto_datosCliente_correo,
			sugarData.cot_repuesto_datosCliente_telefono,
			`${location?.host}${router.asPath}`
		);
		return LS.send(sugarData);
	};

	const updateFormInconcert = (id, value) => {
		let nuevoValor = {};
		switch (id) {
			case "ctr": {
				nuevoValor.ctr = value.trim();
				break;
			}
			case "ctrm": {
				nuevoValor.ctrm = value.trim();
				break;
			}
			case "ctra": {
				nuevoValor.ctra = value.trim();
				break;
			}
			case "ctrn": {
				nuevoValor.ctrn = value.trim();
				break;
			}
			case "ctrl": {
				nuevoValor.ctrl = value.trim();
				break;
			}
			case "ctrc": {
				nuevoValor.ctrc = value.trim();
				break;
			}
			case "ctre": {
				nuevoValor.ctre = value.trim();
				break;
			}
			case "ctrt": {
				nuevoValor.ctrt = value.trim();
				break;
			}
		}

		saveCotizacionRepuesto({
			...cotRepuesto,
			...nuevoValor,
		});

	};

	const submitForm = async (e) => {
		e.preventDefault();
		let isValid = true;
		for (let i = 0; i < inputRefs.current.length; i++) {
			const valid = inputRefs.current[i].current.validate();
			if (!valid) isValid = valid;
		}
		if (!isValid) return;
		else {
			props.showLoader(true);
			
			let data_prev = data;
			data_prev["Id_CRM"] = "NA";

			//const result = await sendToSugar();
			/*if (!result.success) {

				props.handleClose(); //Close Modal SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENT

				props.setTextModal("Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos.");
				
				props.showLoader(false);

				props.showModal(true);
				return;
			} else {
				props.setTextModal(`La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`);
				if (result.data.ticket_id) data_prev["Id_CRM"] = result.data.ticket_id;
			}*/

			/*Send data to API Repuestos*/
			const response = await sendRepuestosInfo(JSON.stringify(data_prev));
			
			if (response.hasOwnProperty("id")) {

				props.handleClose(); //Close Modal SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENT

				props.setTextModal(`La información ha sido enviada correctamente. <br/>¡Gracias por escribirnos!`);
				
				props.showLoader(false);

				props.showModal(true);
				//Clean the form information
				setClean(true);
				resetCotizacionRepuesto();

			} else {

				props.handleClose(); //Close Modal SE INCLUYE DENTRO DEL IF POR ERROR EN UNMOUNTCOMPONENT

				props.setTextModal("Estamos presentando inconvenientes, por favor vuelva a intentarlo en unos minutos.");
				
				props.showLoader(false);

				props.showModal(true);
			};
		}
	}

	return (
		<div className="warranty global ">
			<form onSubmit={submitForm}>
				<div className="form-row align-items-center">
					<div className="col-12 mb-2">
						<Select
							border="true"
							title="Respuesto"
							id="repuesto"
							field="titulo"
							validation="required"
							clean={clean}
							ref={inputRefs.current[0]}
							onChange={(value, name) => { handleChange(value, name); updateFormInconcert("ctr", value) }}
							items={repuestos}
						/>
					</div>
					<div className="col-12 mb-2">
						<Select
							border="true"
							title="Modelo"
							id="modelo"
							field="modelo"
							clean={clean}
							ref={inputRefs.current[1]}
							onChange={(value, name) => { handleChange(value, name); updateFormInconcert("ctrm", value) }}
							items={posventa_versiones}
						/>
					</div>
					<div className="col-12 mb-2">
						<Select border="true"
							title="Año"
							id="anio"
							field="anio"
							clean={clean}
							items={anios}
							ref={inputRefs.current[2]}
							onChange={(value, name) => { handleChange(value, name); updateFormInconcert("ctra", value) }}
						/>
					</div>
					<div className="col-12 text-blue">
						<p>Datos del solicitante</p>
					</div>
					<div className="col-12 mb-2">
						<Input
							type="text"
							border="true"
							id="nombres"
							label="Nombres"
							clean={clean}
							value=""
							onChange={(name, value) => { handleChange(value, name); updateFormInconcert("ctrn", value) }}
							ref={inputRefs.current[3]}
							validation="required|min:1|max:120"
							disabled={true}
							keyPress={(valueNuevo, valueAnterior) => {
								const re = /[\!\*\'\(\)\;\:\&\=\+\$\,\/\?\#\[\]]/;
								if (!re.test(valueNuevo)) {
									return valueNuevo;
								}
								else {
									return valueAnterior;
								}
							}}
						/>
					</div>
					<div className="col-12 mb-2">
						<Input
							type="text"
							border="true"
							id="apellidos"
							label="Apellidos"
							clean={clean}
							value=""
							onChange={(name, value) => { handleChange(value, name); updateFormInconcert("ctrl", value) }}
							ref={inputRefs.current[4]}
							validation="required|min:1|max:120"
							disabled={true}
							keyPress={(valueNuevo, valueAnterior) => {
								const re = /[\!\*\'\(\)\;\:\&\=\+\$\,\/\?\#\[\]]/;
								if (!re.test(valueNuevo)) {
									return valueNuevo;
								}
								else {
									return valueAnterior;
								}
							}}
						/>
					</div>
					<div className="col-12 mb-2" >
						<Input
							type="text"
							border="true"
							id="cedula"
							label="Cédula"
							clean={clean}
							value=""
							onChange={(name, value) => { handleChange(value, name); updateFormInconcert("ctrc", value) }}
							ref={inputRefs.current[5]}
							validation="required|ci|min:10|max:10"
							disabled={true}
							keyPress={(valueNuevo, valueAnterior) => {
								const re = /^[0-9]{0,10}$/;
								if (re.test(valueNuevo)) {
									return valueNuevo;
								}
								else {
									return valueAnterior;
								}
							}}
						/>
					</div>
					<div className="col-12 mb-2">
						<Input
							type="text"
							border="true"
							id="correo"
							label="Correo"
							clean={clean}
							value=""
							onChange={(name, value) => { handleChange(value, name); updateFormInconcert("ctre", value) }}
							ref={inputRefs.current[6]}
							validation="required|email"
							disabled={true}
							keyPress={(valueNuevo, valueAnterior) => {
								const re = /[\!\*\'\(\)\;\:\&\=\+\$\,\/\?\#\[\]\s]/;
								if (!re.test(valueNuevo)) {
									return valueNuevo;
								}
								else {
									return valueAnterior;
								}
							}}
						/>
					</div>
					<div className="col-12 mb-2">
						<Input
							type="text"
							border="true"
							id="telefono"
							label="Teléfono"
							clean={clean}
							value=""
							onChange={(name, value) => { handleChange(value, name); updateFormInconcert("ctrt", value) }}
							ref={inputRefs.current[7]}
							validation="required|phone|min:10|max:10"
							disabled={true}
							keyPress={(valueNuevo, valueAnterior) => {
								const re = /^[0-9]{0,10}$/;
								if (re.test(valueNuevo)) {
									return valueNuevo;
								}
								else {
									return valueAnterior;
								}
							}}
						/>
					</div>
					<div className="col-12 text-right">
						<label className="subtitle3 red float-right">* Datos requeridos</label>
					</div>
					<div className="col-12 px-3">
						<button type="submit" className="btn btn-item blue-bg mb-2 w-100">
							Enviar
						</button>
					</div>
				</div>
			</form>
		</div>

	);
}

export default Repuesto;