import "./style.css";
import { WLabel } from "@cedro/ui/label.ui";
import { WContainer, WSpacer } from "@cedro/ui/container.ui";
import { createWidget } from "@cedro/ui/widget.builder";

export default createWidget(
    <WContainer orientation="horizontal" padding={10}>
        <WContainer variant="contained" fixedSize={250}>
            <WLabel text="Sidebar" centerX centerY />
        </WContainer>
        <WContainer orientation="vertical">
            <WContainer variant="contained">
                <WLabel text="Top Panel" centerX centerY />
            </WContainer>
            <WSpacer fixedSize={10} />
            <WContainer variant="contained">
                <WLabel text="Bottom Panel" centerX centerY />
            </WContainer>
        </WContainer>
    </WContainer>
);
