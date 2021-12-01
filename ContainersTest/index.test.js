import React from 'react'

import {render, fireEvent, act} from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import {Container, ContainerTest} from "./index";


describe('Container', () => {





    it('ввод данных в поле Login', () => {
        const loginValue = 'auth';
        const setFieldValue = jest.fn();
        const component = render(<Container setFieldValue={setFieldValue}/>)

        const loginField = component.queryByTestId(ContainerTest.loginField);

        act(() => {
            fireEvent.change(loginField, {
                target: {
                    value: loginValue,
                }
            })
        })

        expect(setFieldValue).toHaveBeenCalledWith('login', loginValue);


    })

    it('ввод данных в поле Password', () => {
        const passwordValue = 'auth';
        const setFieldValue = jest.fn();
        const component = render(<Container setFieldValue={setFieldValue}/>)

        const passwordField = component.queryByTestId(ContainerTest.passwordField);

        act(() => {
            fireEvent.change(passwordField, {
                target: {
                    value: passwordValue,
                }
            })
        })

        expect(setFieldValue).toHaveBeenCalledWith('password', passwordValue);


    })

})