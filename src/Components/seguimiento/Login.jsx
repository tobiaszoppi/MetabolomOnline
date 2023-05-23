import React, {useState} from 'react';
import axios from 'axios';

const Login = () =>
    {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleLogin = async ( e ) =>
            {
                e.preventDefault();

                try {
                    const response = await axios.post(
                        'http://localhost:8080/api/auth/signin',
                        {
                            username: username,
                            password: password,
                        },
                        /*{
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Credentials': 'true',
                                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                            },
                            withCredentials:true
                        },*/
                    );
                    console.log(response.headers[ 'Set-Cookie' ]);
                    // Obtener las cookies de la respuesta
                    const cookies = response.headers[ 'Set-Cookie' ];
                    // Parsear las cookies para extraer solo el valor del token
                    const token = cookies[ 0 ].split(';')[ 0 ].split('=')[ 1 ];


                    localStorage.setItem('token', token);


                } catch (error) {
                    console.error('Error de inicio de sesión:', error);
                }
            };

        return (
            <div>
                <h2>Iniciar sesión</h2>
                <form onSubmit={ handleLogin }>
                    <div>
                        <label>Nombre de usuario:</label>
                        <input
                            type="text"
                            value={ username }
                            onChange={ ( e ) => setUsername(e.target.value) }
                        />
                    </div>
                    <div>
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            value={ password }
                            onChange={ ( e ) => setPassword(e.target.value) }
                        />
                    </div>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        );
    };

export default Login;
