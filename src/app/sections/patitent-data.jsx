import HeadingComponent from "../components/HeadingComponent";
import NestedSection from "../components/NestedSection";

export function BorderText({ text }) {
    return (
        <li className="border-solid border-2 border-black-pearl-200 py-2 px-3">{text}</li>
    )
}

export default function PatientData() {
    return (
        <NestedSection>
            <div id="profiling"></div>
            <HeadingComponent text="What patient data is in our biobank?" />
            <ul className="flex flex-wrap gap-4">
                <BorderText text="Archival tumor tissue with consent for its further examination" />
                <BorderText text="Accurate cancer diagnosis and date of diagnosis" />
                <BorderText text="Cancer mutations profile" />
                <BorderText text="Comorbidities" />
                <BorderText text="Concomitant treatment" />
                <BorderText text="Demoraphic data" />
                <BorderText text="Previous lines of anti-cancer treatment" />
            </ul>
        </NestedSection>
    )
}