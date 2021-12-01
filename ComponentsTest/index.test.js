import React from 'react'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react';
import {ComponentExample, ComponentExampleTextIDs} from "./index";

describe('ComponentExample', () => {
     it('корректный заголовок', () => {
        const component = render(<ComponentExample size={5}/>)

        expect(component.queryByTestId(ComponentExampleTextIDs.title))
            .toHaveTextContent('Render Component Example ')
    })




})