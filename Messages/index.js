// import React, {useEffect, useState} from 'react';
// import {Redirect, useParams} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
// import {MessageInput} from "../../components/MessageInput";
// import {MessageList} from "../../components/MessageList";
// import {getChatMessagesById} from "../../store/messages/selectors";
// import {createMessage} from "../../store/messages/action";
// import {hasChatById} from "../../store/chats/selectors";
// import useBotAnswerTimeDelay from "../../Hooks/useBotAnswerTimeDelay";
//
// export const hW10={
//     title: "Home_Work_10_title",
//     row:"Home_Work_10_row",
//     button: "Home_Work_10_button"
//
// }
//
// export const Messages= () => {
//     const {chatId}=useParams();
//     const dispatch=useDispatch();
//     const messageList=useSelector(getChatMessagesById(chatId));
//     const hasChat = useSelector(hasChatById(chatId));
//
//
//
//     // const [messageList,setMessageList]=useState([])
//     const sendMessage=(text,author)=>{
//         const newMessage={
//             text,
//             author,
//         };
//         // const newMessageList=[...messageList, newMessage];
//         // setMessageList(newMessageList);
//         dispatch(createMessage(newMessage,chatId))
//     };
//
//     const onSendMessage=(value)=>{
//         sendMessage(value,'user');
//     };
//
//
//
//
//     const BotText="Hello!!!"
//
//     useBotAnswerTimeDelay(messageList,sendMessage, [BotText])
//
//
//
//     // if(!CHATS.find(({id})=>id===chatId)){
//     if(!hasChat){
//         return<Redirect to="/chats"/>;
//     }
//
//     return (
//         <div>
//             <h1 h1={BotText} data-testid={hW10.title} >Home Work 10</h1>
//             <MessageList messageList={messageList}/>
//             <MessageInput onSend={onSendMessage}/>
//
//         </div>
//     );
// };
//

import React, {useCallback, useRef, memo} from 'react';


const generateValue = () => {
    return Math.round(100 + Math.random() * 900);
}

const initialState = (size) => {
    return {
        list: Array.from({length: size || 4000}, (_el, index) => ({
            label: `label ${index + 1}`,
            value: generateValue()
        }))
    };
};

export const PureComponentExampleTextIDs = {
    title: 'PureComponentExample_title',
    row: 'PureComponentExample_row',
    rowButton: 'PureComponentExample_rowButton',
    rowRenderCount: 'PureComponentExample_rowRenderCount',
}

export class PureComponentExample extends React.Component {
    state = initialState(this.props.size);

    handleUpdate = (index) => {
        const list = [...this.state.list];

        list[index] = {
            ...list[index],
            value: generateValue()
        };
        this.setState({list});
    };

    render() {

        return <div>
            <h1 data-testid={PureComponentExampleTextIDs.title}>
                Pure Component Example hrtjer
            </h1>
            <div>
                {this.state.list.map((el, index) => (
                    <Row2
                        key={el.label}
                        data={el}
                        index={index}
                        onUpdate={this.handleUpdate}
                    />
                ))}
            </div>
        </div>
    }
}

export class Row extends React.PureComponent {
    renderCount = 0;

    constructor(props) {
        super(props);

        this.renderCount = 0;
    }

    incrementRenderCount = () => {
        this.renderCount += 1;
    }

    handleUpdate = () => {
        this.props.onUpdate(this.props.index);
    };

    render() {
        const {
            data: {label, value}
        } = this.props;

        this.incrementRenderCount()

        return (
            <div data-testid={PureComponentExampleTextIDs.row}>
                <span className="label">{label}:</span>
                <span>{value}</span>
                <span data-testid={PureComponentExampleTextIDs.rowRenderCount}>
        ({this.renderCount})
      </span>{" "}
                <button
                    data-testid={PureComponentExampleTextIDs.rowButton}
                    className="button" onClick={this.handleUpdate}
                >
                    Update
                </button>
            </div>
        );
    }
}


const Row2Render = (props) => {
    const {
        data: {label, value},
        onUpdate,
        index
    } = props;

    const handleUpdate = useCallback(() => {
        onUpdate(index);
    }, [index, onUpdate]);

    const renderCount = useRef(0);

    renderCount.current = renderCount.current + 1;

    return (
        <div data-testid={PureComponentExampleTextIDs.row}>
            <span className="label">{label}:</span>
            <span>{value}</span> <span
            data-testid={PureComponentExampleTextIDs.rowRenderCount}>
      ({renderCount.current})
    </span>{" "}
            <button data-testid={PureComponentExampleTextIDs.rowButton} className="button" onClick={handleUpdate}>
                Update
            </button>
        </div>
    );
};

// export const Row2 = Row2Render
export const Row2 = memo(Row2Render)