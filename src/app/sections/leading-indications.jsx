import HeadingComponent from "../components/HeadingComponent";
import NestedSection from "../components/NestedSection";

export default function LeadingSection() {
    return (
        <NestedSection>
            <HeadingComponent text="Leading indications" />
            <ul className="flex">
                <li className="p-2 text-lg">Breast Cancer</li>
                <li className="p-2 text-lg">Colorectal Cancer</li>
                <li className="p-2 text-lg">Lung Cancer</li>
                <li className="p-2 text-lg">Lymphomas</li>
                <li className="p-2 text-lg">Prostate Cancer</li>
            </ul>
        </NestedSection>
    )
}