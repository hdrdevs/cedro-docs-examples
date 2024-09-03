import "./style.css";
import { WLabel } from "@cedro/ui/label.ui";
import { WVPanel } from "@cedro/ui/vpanel.ui";
import { WContainer } from "@cedro/ui/container.ui";
import { createWidget } from "@cedro/ui/widget.builder";

export default createWidget(
    <WVPanel padding={5}>
        <WContainer variant="contained" fixedSize={250}>
            <WLabel text="Left Widget" centerX centerY />
        </WContainer>
        <WContainer variant="contained">
            <WLabel text="Right Widget" centerX centerY />
        </WContainer>
    </WVPanel>
);
