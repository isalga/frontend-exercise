import './LoginForm.less';
import React from 'react';

const LoginForm = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const validate = () => {
        return email.length > 0 && password.length > 0;
    };

    const onSubmit = (e) => {
        e.preventDefault();
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