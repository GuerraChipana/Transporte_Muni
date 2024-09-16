// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === 'TRANSPORTE_MUNI' && password === 'SISTEMAS2024') {
            alert('Inicio de sesión exitoso!');
        } else {
            setError('Credenciales incorrectas.');
        }
    };

    return (
        <div className="login-container">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='container m-1'>
                    <button type="submit" className="submit-button">Iniciar sesión</button>
                    <button type="submit" className="submit-button">Registrarte</button>
                </div>

                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
