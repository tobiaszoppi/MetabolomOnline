import React, {useState} from 'react';
import Etapa1 from './Etapa1';
import Etapa2 from './Etapa2';
import './formulario.css';

const Formulario = () =>
    {
        const [etapaActual, setEtapaActual] = useState(1);
        const [datosEtapa1, setDatosEtapa1] = useState({
            fullName: '',
            dateOfBirth: '',
            email: '',
            mobileNumber: '',
            gender: '',
            birthPlace: '',
            placeResidence: '',
            idType: '',
            idNumber: '',
            issuedAuthority: ''
        });
        const [datosEtapa2, setDatosEtapa2] = useState({
            addressType: '',
            nationality: '',
            state: '',
            locality: '',
            fatherName: '',
            motherName: '',
            grandfather: '',
            password: '',
            confirmPassword: ''
        });

        const manejarCambioEtapa1 = ( nombreCampo, valorCampo ) =>
            {
                setDatosEtapa1({
                    ...datosEtapa1,
                    [ nombreCampo ]: valorCampo
                });
            };

        const manejarCambioEtapa2 = ( nombreCampo, valorCampo ) =>
            {
                setDatosEtapa2({
                    ...datosEtapa2,
                    [ nombreCampo ]: valorCampo
                });
            };

        const manejarSiguienteEtapa = () =>
            {
                setEtapaActual(etapaActual + 1);
            };

        const volverEtapa1 = () =>
            {
                setEtapaActual(1);
            };

        const manejarEnviarFormulario = () =>
            {
                // Aquí puedes realizar la lógica para enviar los datos del formulario a través de una API
                // Utiliza los datos de datosEtapa1 y datosEtapa2 para enviarlos a la API
                // Puedes utilizar la función fetch u otra librería para realizar la llamada a la API
                // Por ejemplo:
                // fetch('https://ejemplo-api.com/formulario', {
                //   method: 'POST',
                //   body: JSON.stringify({
                //     datosEtapa1,
                //     datosEtapa2
                //   }),
                //   headers: {
                //     'Content-Type': 'application/json'
                //   }
                // })
                // .then((response) => response.json())
                // .then((data) => {
                //   // Manejar la respuesta de la API
                //   console.log(data);
                // })
                // .catch((error) => {
                //   // Manejar errores de la llamada a la API
                //   console.error(error);
                // });
                // Nota: Recuerda ajustar la URL y los datos a tu propia API

                // Una vez que se envíe el formulario, puedes realizar cualquier acción adicional necesaria,
                // como mostrar un mensaje de éxito o redireccionar al usuario a otra página.
                // Por ahora, simplemente imprimiremos los datos del formulario en la consola:
                console.log('Datos del formulario:', { ...datosEtapa1, ...datosEtapa2 });
            };

        return (
            <div className="formulario">
                { etapaActual === 1 && (
                    <Etapa1
                        datosEtapa1={ datosEtapa1 }
                        manejarCambioEtapa1={ manejarCambioEtapa1 }
                        manejarSiguienteEtapa={ manejarSiguienteEtapa }
                    />
                ) }
                { etapaActual === 2 && (
                    <Etapa2
                        datosEtapa2={ datosEtapa2 }
                        manejarCambioEtapa2={ manejarCambioEtapa2 }
                        volverEtapa1={ volverEtapa1 }
                        manejarEnviarFormulario={ manejarEnviarFormulario }
                    />
                ) }
            </div>
        );
    };

/*
* En este componente principal, `Form`, se utiliza el estado para controlar la etapa
* actual del formulario (`etapaActual`) y los datos ingresados en cada etapa (`datosEtapa1` y `datosEtapa2`).

Se definen los métodos `manejarCambioEtapa1` y `manejarCambioEtapa2` para actualizar los datos
* de cada etapa en el estado correspondiente.

Los métodos `manejarSiguienteEtapa` y `volverEtapa1` se utilizan para cambiar la etapa actual del formulario.

El método `manejarEnviarFormulario` contiene la lógica para enviar los datos del formulario a través
* de una API. En el ejemplo actual, se imprime simplemente los datos del formulario en la consola.

Dentro del componente, se renderiza la `Etapa1` si `etapaActual` es igual a 1 y la `Etapa2` si `etapaActual`
* es igual a 2. Dependiendo de la etapa actual, se pasan los datos correspondientes y los métodos adecuados a
* cada componente de etapa.

Este componente `Form` se encargará de gestionar las etapas del formulario y los datos ingresados.
* Puedes agregarlo a tu aplicación y utilizarlo como el componente principal para mostrar y
* manejar el formulario completo.

Recuerda ajustar la lógica de envío del formulario a tu propia API y realizar las acciones necesarias según
*  tus requisitos específicos.

Espero que esto te ayude a implementar tu formulario y manejar los datos a través de una API. */
export default Formulario;
