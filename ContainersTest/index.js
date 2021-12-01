import React from 'react';


export const ContainerTest = {

    loginField: 'Container-loginField',
    passwordField: 'Container-passwordField',
}

export const Container = ({setFieldValue}) => {
    return (
        <form>

            <input
                onChange={(event) => {
                    setFieldValue('login', event.target.value)
                }}
                data-testid={ContainerTest.loginField}
                name="login"
                type="text"
            />
            <br/>
            <input

                onChange={(event) => {
                    setFieldValue('password', event.target.value)
                    console.log(event);
                }}
                data-testid={ContainerTest.passwordField}
                name="password"
                type="text"
            />

        </form>
    );
};