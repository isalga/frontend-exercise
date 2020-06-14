import React from 'react';

const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const validate = () => {
        //refactor
        return email.length > 0 && password.length > 0;
    };

    const onSubmit = (e) => {
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='email'
                value={email} onChange={e => setEmail(e.target.value)}
                required/>
            <input
                type='password'
                placeholder='password'
                value={password}  onChange={e => setPassword(e.target.value)}
                required/>
            <input
                type='submit'
                value='Login'
                disabled={!validate()}/>
        </form>
    )
}

export default LoginForm;