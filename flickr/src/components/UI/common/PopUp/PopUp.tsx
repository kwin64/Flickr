import React, {useState} from 'react';

export function App() {
    let [timeoutId, setTimeoutId] = useState<any>([]);
    const [text, setText] = useState("Move mouse to see a content");

    return (
        <div
            className="App"
            onClick={() => {
            }}
            onMouseMove={() => {
                if (timeoutId.length > 0) {
                    timeoutId.forEach((val:number) => {
                        window.clearTimeout(val)
                    });
                    setTimeoutId([]);
                    setText("some content");
                }
                setTimeoutId([
                    ...timeoutId,
                    setTimeout(() => {
                        setText("Move mouse to see a content")
                    }, 1000)
                ]);
            }}
        >
            <h1>Hello CodeSandbox</h1>
            <h2>{text}</h2>
        </div>
    );
}