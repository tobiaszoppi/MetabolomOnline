import './formulario.css';

const Etapa1 = ( { datosEtapa1, manejarCambioEtapa1, manejarSiguienteEtapa } ) =>
    {
        const camposEtapa1 = [
            {
                name: 'firstName',
                label: 'Nombre del paciente',
                placeholder: 'Ingrese su nombre',
                type: 'text'
            },
            {
                name: 'lastName',
                label: 'Apellido del paciente',
                placeholder: 'Ingrese su apellido',
                type: 'text'
            },
            {
                name: 'gender',
                label: 'Género',
                type: 'select',
                options: ['Hombre', 'Mujer']
            },
            {
                name: 'dateOfBirth',
                label: 'Fecha de nacimiento',
                placeholder: 'Ingrese su fecha de nacimiento',
                type: 'date'
            },
            {
                name: 'email',
                label: 'Email',
                placeholder: 'Ingrese su mail',
                type: 'email'
            },
            {
                name: 'mobileNumber',
                label: 'Número de teléfono móvil',
                placeholder: 'Ingrese su número de teléfono móvil',
                type: 'text'
            },
            {
                name: 'birthPlace',
                label: 'Lugar de nacimiento',
                placeholder: 'Ingrese su lugar de nacimiento',
                type: 'text'
            },
            {
                name: 'idType',
                label: 'Tipo de identificación (DNI, PASAPORTE, ETC)',
                placeholder: 'Ingrese el tipo de identificación',
                type: 'text'
            },
            {
                name: 'idNumber',
                label: 'Número de identificación',
                placeholder: 'Ingrese el número de identificación',
                type: 'text'
            },
        ];

        const handleChange = ( event ) =>
            {
                const { name, value } = event.target;
                manejarCambioEtapa1(name, value);
            };

        return (
            <div className="formulario">
                <div className="carta">
                    <div>
                        <h2>Formulario de Consulta</h2>
                        <h3>Datos Personales</h3>
                    </div>
                    <div className="contenido">
                        { camposEtapa1.map(( campo ) =>
                        {
                            if (campo.type === 'select') {
                                return (
                                    <div key={ campo.name }>
                                        <label htmlFor={ campo.name }>{ campo.label }</label>
                                        <select
                                            name={ campo.name }
                                            value={ datosEtapa1[ campo.name ] }
                                            onChange={ handleChange }
                                        >
                                            { campo.options.map(( option ) => (
                                                <option key={ option } value={ option }>
                                                    { option }
                                                </option>
                                            )) }
                                        </select>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={ campo.name }>
                                        <label className="user-label" htmlFor={ campo.name }>{ campo.label }</label>
                                        { campo.type === 'date' ? (
                                            <input className="input"
                                                   type="date"
                                                   name={ campo.name }
                                                   value={ datosEtapa1[ campo.name ] }
                                                   onChange={ handleChange }
                                            />
                                        ) : (
                                            <input className="input"
                                                   type={ campo.type }
                                                   name={ campo.name }
                                                   value={ datosEtapa1[ campo.name ] }
                                                   onChange={ handleChange }
                                                   placeholder={ campo.placeholder }
                                            />
                                        ) }
                                    </div>
                                );
                            }
                        }) }
                    </div>
                    <button onClick={ manejarSiguienteEtapa }>Siguiente</button>
                </div>
            </div>
        );
    };

export default Etapa1;
