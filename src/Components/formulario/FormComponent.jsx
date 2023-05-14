import React, {useState} from 'react';
import './style.css'
import StyledUploadFile from "../uploadFile";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        dateOfBirth: '',
        email: '',
        mobileNumber: '',
        gender: '',
        birthPlace: '',
        placeResidence: '',
        idType: '',
        idNumber: '',
        issuedAuthority: '',
        addressType: '',
        nationality: '',
        state: '',
        locality: '',
        fatherName: '',
        motherName: '',
        grandfather: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleNext = () => {
        const inputs = Object.entries(formData).map(([name, value]) => ({ name, value }));
        let isAnyInputEmpty = false;
        let shouldContinue = true; // Bandera para controlar la iteración

        inputs.forEach((input) => {
            if (shouldContinue) { // Verificar si se debe continuar con la iteración
                if (input.name === 'addressType') {
                    shouldContinue = false; // Establecer la bandera en falso al encontrar "addressType"
                }

                if (input.value === '') {
                    isAnyInputEmpty = true;
                }
            }
        });

        if (!isAnyInputEmpty) {
            const form = document.querySelector('form');
            form.classList.add('secActive');
        }
    };

    const handleBack = () => {
        const form = document.querySelector('form');
        form.classList.remove('secActive');
    };

    const handleFileChange = (file) => {
        // handle file change logic
        console.log(file);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar cualquier acción que necesites con los datos del formulario
        console.log(formData);
    };


    return (
        <div>
            <div className="container">
                <header>
                    Formulario
                </header>
                <form action="#" onSubmit={handleSubmit}>
                    <div className="form first">
                        <div className="details personal">
                            <span className="title">Detalles Personales</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>Nombre Completo</label>
                                    <input
                                        type="text"
                                        placeholder="Ingresar Nombre Completo"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Fecha de Nacimiento</label>
                                    <input
                                        type="date"
                                        placeholder="Ingresar Fecha de Nacimiento"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Lugar de Nacimiento</label>
                                    <input
                                        type="text"
                                        placeholder="Ingresar Lugar de Nacimiento"
                                        name="birthPlace"
                                        value={formData.birthPlace}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Lugar de Residencia</label>
                                    <input
                                        type="text"
                                        placeholder="Ingresar Lugar de Residencia"
                                        name="placeResidence"
                                        value={formData.placeResidence}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        placeholder="Ingresar Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Numero de Telefono</label>
                                    <input
                                        type="number"
                                        placeholder="Ingresar Numero de Telefono"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Genero</label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option disabled value="">
                                            Seleccionar Genero
                                        </option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <StyledUploadFile onChange={handleFileChange}/>
                            </div>
                        </div>
                        <div className="details ID">
                            <span className="title">Detalles de Identidad</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>Tipo de ID</label>
                                    <input
                                        type="text"
                                        placeholder="DNI, PASAPORTE, ETC."
                                        name="idType"
                                        value={formData.idType}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Numero de ID</label>
                                    <input
                                        type="number"
                                        placeholder="Ingresar Numero de ID"
                                        name="idNumber"
                                        value={formData.idNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Autoridad emitida</label>
                                    <input
                                        type="text"
                                        placeholder="Argentina, Chile, Etc."
                                        name="issuedAuthority"
                                        value={formData.issuedAuthority}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <button type={"button"} onClick={handleNext} className="nextBtn"><span className="btnText">Siguiente</span></button>
                        </div>
                    </div>
                    <div className="form second">
                        <div className="details address">
                            <span className="title">Detalles de Direccion</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>Direccion de residencia</label>
                                    <input
                                        type="text"
                                        placeholder="Permanente o Temporal"
                                        name="addressType"
                                        value={formData.addressType}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Nacionalidad</label>
                                    <input
                                        type="text"
                                        placeholder="Ingresar nacionalidad"
                                        name="nationality"
                                        value={formData.nationality}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Provincia/Estado</label>
                                    <input
                                        type="text"
                                        placeholder="Ingresar provincia/estado"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Localidad</label>
                                    <input
                                        type="text"
                                        placeholder="Ingresar su localidad"
                                        name="locality"
                                        value={formData.locality}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="details family">
                            <span className="title">Family Details</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>Father Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter father name"
                                        name="fatherName"
                                        value={formData.fatherName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Mother Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter mother name"
                                        name="motherName"
                                        value={formData.motherName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="input-field">
                                    <label>Grandfather</label>
                                    <input
                                        type="text"
                                        placeholder="Enter grandfather name"
                                        name="grandfather"
                                        value={formData.grandfather}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="buttons">
                                <div className="backBtn" onClick={handleBack}>
                                    <span className="btnText">Atras</span>
                                </div>
                                <button type="submit" className="sumbit"><span className="btnText">Enviar</span></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormComponent;