import "./style.css";

import { WSwitch } from "@cedro/ui/switch.ui";
import { WContainer, WSpacer } from "@cedro/ui/container.ui";
import { createWidget } from "@cedro/ui/widget.builder";

export default createWidget(
    <WContainer orientation="vertical">
        <WSpacer />
        <WContainer orientation="horizontal" fixedSize={45} padding={5}>
            <WSpacer />
            <WSwitch text="Switch One" checked />
            <WSwitch text="Switch Two" />
            <WSwitch text="Switch Three" />
            <WSpacer />
        </WContainer>
        <WSpacer />
    </WContainer>
);
