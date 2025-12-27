import LightPillar from '../../components/ui/light-pillar';

const HeroSection = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* LightPillar sebagai background */}
            <div className="absolute inset-0">
                <LightPillar
                    topColor="#0f766e"
                    bottomColor="#14b8a6"
                    intensity={1.0}
                    rotationSpeed={0.8}
                    glowAmount={0.005}
                    pillarWidth={2.0}
                    pillarHeight={0.4}
                    noiseIntensity={0.5}
                    pillarRotation={270}
                    interactive={false}
                    mixBlendMode="screen"
                />
            </div>

            {/* Konten hero di atas background */}
            <div className="relative z-10 text-center text-foreground">
                <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-xl mb-8">I'm Andreas Bagasgoro, a passionate developer.</p>
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors">
                    View My Work
                </button>
            </div>
        </div>
    )
}

export default HeroSection;
