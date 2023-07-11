import React, {useState} from 'react';

const Login = () =>
    {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleLogin = async ( e ) =>
            {
                e.preventDefault();

                try {
                    console.log("Credenciales: ", username, password);
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
