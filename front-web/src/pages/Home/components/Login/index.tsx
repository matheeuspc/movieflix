import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthCard from '../Card';
import './styles.scss';
import { useState } from 'react';
import ButtonIcon from 'core/components/ButtonIcon';

type FormState = {
    username: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormState>();

    const onSubmit = (data: FormState) => {
        console.log(data);
        //chamar api de autenticação
    }

    return (
        <AuthCard title="login">
            <form
                className="login-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    {...register("username", {
                        required: "Campo obrigatório",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email inválido"
                        }
                      }) }
                    type="email"
                    className="form-control input-base margin-bottom-30"
                    placeholder="Email"
                />
                <input
                    {...register("password")}
                    type="password"
                    className="form-control input-base margin-bottom-150"
                    placeholder="Senha"
                />
                <div className="login-submit">
                    <ButtonIcon text="logar" />
                </div>
            </form>
        </AuthCard>
    );
};

export default Login;