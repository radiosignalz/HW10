// import React from 'react';
//
// export const ComponentsTest = () => {
//     return (
//         <div>
//             <h1>
//                 Components Test
//             </h1>
//         </div>
//     );
// };

import React, {useCallback, useRef, memo} from 'react';


export const ComponentExampleTextIDs = {
    title: 'ComponentExample_title',

}

export class ComponentExample extends React.Component {



    render() {

        return <div>
            <h1 data-testid={ComponentExampleTextIDs.title}>
               Component Example

            </h1>

        </div>
    }
}