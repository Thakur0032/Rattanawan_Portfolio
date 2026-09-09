import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spinal Synergy & Energy Healing | Rattanawan James",
  description: "Experience Spinal Synergy. Gentle spinal alignment, posture improvement, and holistic spinal care to release blocked energy and restore mind body alignment.",
};

export default function SpinalSynergyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm mb-6 uppercase tracking-widest">
            Body & Energy
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            <span className="text-transparent bg-clip-text text-gradient">Spinal Synergy</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Holistic spinal care and gentle bodywork to restore whole body balance, improve mobility, and release deep-seated physical and emotional tension.
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[32px] border-slate-100 shadow-2xl mb-16">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Mind Body Alignment</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <strong>Spinal Synergy</strong> is a unique approach to <strong>spinal alignment</strong> and <strong>gentle spinal alignment</strong>. It focuses on <strong>postural alignment</strong>, <strong>posture improvement</strong>, and <strong>natural posture support</strong>. This is not just physical adjustment; it is <strong>body alignment</strong> for complete <strong>whole body balance</strong> and <strong>physical balance</strong>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Through <strong>gentle bodywork</strong> and <strong>gentle hands-on therapy</strong>, we provide <strong>back tension relief</strong>, <strong>neck tension relief</strong>, <strong>shoulder tension relief</strong>, and profound <strong>muscle tension relief</strong>. This <strong>wellness therapy</strong> offers <strong>mobility support</strong>, <strong>flexibility support</strong>, and <strong>movement support</strong>, helping you <strong>restore balance</strong> and <strong>ease muscle tightness</strong>.
          </p>
          <div className="flex flex-wrap gap-2 mt-8">
            {["Spinal Wellness", "Healthy Posture", "Back Wellness", "Neck Wellness", "Body Tension Relief", "Body Awareness", "Body Comfort", "Healthy Movement", "Natural Healing Support", "Whole Person Wellness", "Holistic Wellness", "Nervous System Support", "Deep Relaxation", "Stress Reduction", "One-on-one Spinal Wellness"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-slate-100 text-foreground/80 text-sm rounded-lg border border-secondary/20">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Symptoms of Blocked Energy */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Signs of Blocked Spinal & Chakra Energy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When our nervous mind-body connection is disrupted, it manifests as physical tension and emotional blockages. *Note: The following describes chakra and energy-healing concepts, rather than medically established diagnoses.*
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Physical - Upper Body */}
            <div className="glass-heavy p-8 rounded-[32px] border-slate-100">
              <h3 className="text-xl font-heading font-bold text-primary mb-6">Upper Body & Head</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>• Headache, dizziness, feeling faint, pressure/heaviness in head</li>
                <li>• Migraine, chronic headaches (temples, sinuses, ears)</li>
                <li>• Eyesight problems, unequal pupil size</li>
                <li>• Difficulty concentrating or thyroid-related problems</li>
                <li>• Difficulty breathing and muscle pain</li>
                <li>• Weak arms, numbness, or pain in the arms</li>
                <li>• Fatigue and weakness</li>
                <li>• Swollen lymph nodes, low immunity</li>
                <li>• Chronic cough, shortness of breath, chest tightness/pain</li>
              </ul>
            </div>

            {/* Physical - Torso & Lower */}
            <div className="glass-heavy p-8 rounded-[32px] border-slate-100">
              <h3 className="text-xl font-heading font-bold text-primary mb-6">Torso & Lower Body</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>• Indigestion, abdominal pain, and bloating</li>
                <li>• Intestinal problems, chronic constipation</li>
                <li>• Rib pain, muscle problems, abnormal blood pressure</li>
                <li>• Enlarged blood vessels / varicose veins</li>
                <li>• Reproductive/sexual health problems, ovarian/pelvic pain</li>
                <li>• Abnormal hormone levels, menstrual irregularities</li>
                <li>• Lower-back pain, difficulty sitting</li>
                <li>• Heavy legs, knee, foot, hip, and ankle pain</li>
                <li>• Difficulty walking / severe weakness</li>
              </ul>
            </div>

            {/* Emotional & Energetic */}
            <div className="glass-heavy p-8 rounded-[32px] border-slate-100">
              <h3 className="text-xl font-heading font-bold text-primary mb-6">Emotional & Energetic</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>• Brain fog, lack of mental/inner clarity, low energy</li>
                <li>• Feeling easily overwhelmed or emotionally sensitive</li>
                <li>• Anxiety, depression, high stress, chronic fatigue</li>
                <li>• Feeling disconnected from the meaning of life</li>
                <li>• Isolation, inner emptiness, spiritual separation</li>
                <li>• Confusion, indecisiveness, lack of access to intuition</li>
                <li>• Fear of expressing oneself, inability to speak truth</li>
                <li>• Hiding true self, suppressing emotions, emotional closedness</li>
                <li>• Fear of vulnerability, rejection, and failure</li>
                <li>• Anger, resentment, and old emotional wounds</li>
                <li>• Lack of self-love, loneliness, lack of self-confidence</li>
                <li>• Existential insecurity, fear of future, lack of motivation</li>
                <li>• Feelings of guilt regarding one's own happiness</li>
              </ul>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center mt-20">
          <a href="/#contact" className="inline-block px-8 py-4 bg-primary text-background font-bold rounded-full transition-transform hover:scale-105">
            Book Personalized Spinal Sessions
          </a>
        </div>

      </div>
    </div>
  );
}
