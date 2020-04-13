import { withFormik } from "formik";
import * as Yup from "yup";

import { LoginForm as BaseLoginForm } from "components";
import { usersActions } from "actions";
import store from "store";

const validationSchema = Yup.object({
    email: Yup.string().email("Неверный E-mail!").required("Обязательное поле"),
    password: Yup.string()
        .min(8, "Пароль слишком маленький")
        .max(15, "Пароль слишком большой")
        .required("Обязательное поле")
});

const LoginForm = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: "",
        password: ""
    }),
    validationSchema,
    handleSubmit: (values, { setSubmitting, props }) => {
        store
            .dispatch(usersActions.fetchUserSignIn(values))
            .then(({ status }) => {
                if (status === "success") {
                    setSubmitting(true);
                    props.history.push("/");
                }
            })
            .catch(() => {
                setSubmitting(false);
            });
    }
})(BaseLoginForm);

export default LoginForm;
