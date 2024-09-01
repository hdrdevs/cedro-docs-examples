import "./style.css";

import { WRadioButton } from "@cedro/ui/radiobutton.ui";
import { WContainer, WSpacer } from "@cedro/ui/container.ui";
import { createWidget } from "@cedro/ui/widget.builder";

export default (() => {
    const handleRadio = (args: any) => {
        console.log(args);
    };

    return createWidget(
        <WContainer orientation="vertical">
            <WSpacer />
            <WContainer orientation="horizontal" fixedSize={45} padding={5}>
                <WSpacer />
                <WRadioButton id="r1" text="Switch One" checked onClick={handleRadio} />
                <WRadioButton id="r2" text="Switch Two" onClick={handleRadio} />
                <WRadioButton id="r3" text="Switch Three" onClick={handleRadio} />
                <WSpacer />
            </WContainer>
            <WSpacer />
        </WContainer>
    );
})();
