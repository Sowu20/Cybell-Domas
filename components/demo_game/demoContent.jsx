import DemoHero from "./demoHero";
import Play from "./play";
import DemoGame from "./demo";

export default function DemoContent() {
    return (
        <main>
            <DemoHero />
            <DemoGame />
            {/* <Play /> */}
        </main>
    );
}