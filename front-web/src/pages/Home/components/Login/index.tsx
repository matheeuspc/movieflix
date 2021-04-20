import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthCard from '../Card';
import './styles.scss';
import { useState } from 'react';
import ButtonIcon from 'core/components/ButtonIcon';
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/auth';

type FormState = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormState>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();
    const location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: "/movies" } };

    const onSubmit = (data: FormState) => {
        console.log(data);
        makeLogin(data)
            .then(response => {
                setHasError(false);
                saveSessionData(response.data);
                history.replace(from);
            })
            .catch(() => {
                setHasError(true);
            })
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