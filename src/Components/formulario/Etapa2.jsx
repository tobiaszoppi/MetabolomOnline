import './formulario.css';

const Etapa2 = ( { datosEtapa2, manejarCambioEtapa2, volverEtapa1, manejarEnviarFormulario } ) =>
    {
        const camposEtapa2 = [
            {
                name: 'addressType',
                label: 'Tipo de dirección',
                placeholder: 'Ingrese el tipo de dirección',
                type: 'text'
            },
            {
                name: 'nationality',
                label: 'Nacionalidad',
                placeholder: 'Ingrese su nacionalidad',
                type: 'text'
            },
            {
                name: 'state',
                label: 'Estado',
                placeholder: 'Ingrese el estado',
                type: 'text'
            },
            {
                name: 'locality',
                label: 'Localidad',
                placeholder: 'Ingrese la localidad',
                type: 'text'
            },
            {
                name: 'fatherName',
                label: 'Nombre del padre',
                placeholder: 'Ingrese el nombre del padre',
                type: 'text'
            },
            {
                name: 'motherName',
                label: 'Nombre de la madre',
                placeholder: 'Ingrese el nombre de la madre',
                type: 'text'
            },
            {
                name: 'grandfather',
                label: 'Nombre del abuelo',
                placeholder: 'Ingrese el nombre del abuelo',
                type: 'text'
            },
            {
                name: 'password',
                label: 'Contraseña',
                placeholder: 'Ingrese su contraseña',
                type: 'password'
            },
            {
                name: 'confirmPassword',
                label: 'Confirmar Contraseña',
                placeholder: 'Confirme su contraseña',
                type: 'password'
            },
        ];

        const handleChange = ( event ) =>
            {
                const { name, value } = event.target;
                manejarCambioEtapa2(name, value);
            };

        return (
            <div className="formulario">
                <div className="carta">
                    <div>
                        <h2>Etapa 2</h2>
                    </div>
                    <div className="contenido">
                        { camposEtapa2.map(( campo ) => (
                            <div key={ campo.name }>
                                <label htmlFor={ campo.name }>{ campo.label }</label>
                                <input
                                    type={ campo.type }
                                    name={ campo.name }
                                    value={ datosEtapa2[ campo.name ] }
                                    onChange={ handleChange }
                                    placeholder={ campo.placeholder }
                                />
                            </div>
                        )) }
                    </div>
                    <button onClick={ volverEtapa1 }>Volver a la Etapa 1</button>
                    <button onClick={ manejarEnviarFormulario }>Enviar Formulario</button>
                </div>
            </div>
        );
    };

export default Etapa2;
