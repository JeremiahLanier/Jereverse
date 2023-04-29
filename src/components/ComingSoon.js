import React, {useEffect, useState} from "react";

const ComingSoon = () => {
    const [text, setText] = useState("Coming Soon ");

    useEffect(() => {
        const circle = document.querySelector(".coming-soon-circle");
        circle.innerHTML = "";
        circle.style.setProperty("--numchs", text.length);
        for (let i = 0; i < text.length; i++) {
            circle.innerHTML += `<div class="char" style="--char-index: ${i}">${text.charAt(i)}</div>`;
        }
    }, [text]);

    return (
        <div>
            <div class="coming-soon-circle" data-splitting>
                {text}
            </div>
            <img class="coming-soon-globe" src="https://purepng.com/public/uploads/large/purepng.com-earthearthplanetglobethird-planet-from-the-sun-1411526987961jvz5u.png" />
        </div>
    );
};

export default ComingSoon;
