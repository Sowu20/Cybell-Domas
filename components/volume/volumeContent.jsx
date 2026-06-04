import VolumeHero from "./volumeHero";
import VolumesList from "./volumeList";
import VolumeMethod from "./volumeMethod";

export default function VolumeContent() {
  return (
    <main className="grow">
      <VolumeHero />
      <VolumesList />
      <VolumeMethod />
    </main>
  );
}