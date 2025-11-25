import { Hero } from './components/Hero';
import { TextSection } from './components/TextSection';
import { ImageGrid } from './components/ImageGrid';
import { ContactForm } from './components/ContactForm';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      {/* Around the Village Section */}
      <TextSection
        title="AROUND THE VILLAGE"
        subtitle="WILL BE DISPLAYED"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        align="left"
      />

      {/* First Image Grid */}
      <ImageGrid
        images={[
          { url: "https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjM5NjUyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Modern architecture" },
          { url: "https://images.unsplash.com/photo-1636951818627-0a40d2037e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZG9vciUyMHBpbmt8ZW58MXx8fHwxNzY0MDQyOTc3fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Pink door" }
        ]}
        layout="horizontal"
      />

      <TextSection
        title="CREATIVE COMMUNITY"
        subtitle="CREATIVE MEMBERS"
        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        align="left"
      />

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard 
            icon="✓"
            title="Creative Thinking"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
          />
          <FeatureCard 
            icon="✓"
            title="Individual Approach"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi."
          />
          <FeatureCard 
            icon="✓"
            title="Innovative Solutions"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
          />
          <FeatureCard 
            icon="✓"
            title="Professional Team"
            description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
          />
        </div>
      </div>

      <TextSection
        title="WORKING TOGETHER ACROSS"
        subtitle="ALL DISCIPLINES"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        align="right"
      />

      {/* Second Image Grid */}
      <ImageGrid
        images={[
          { url: "https://images.unsplash.com/photo-1758521540703-34409d1f4e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB3aXRoJTIwdnIlMjBoZWFkc2V0fGVufDF8fHx8MTc2NDA0Mjk3N3ww&ixlib=rb-4.1.0&q=80&w=1080", alt: "VR headset" },
          { url: "https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjM5NjUyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Architecture" },
          { url: "https://images.unsplash.com/photo-1630408912581-95141c0a768e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjBjb2ZmZWV8ZW58MXx8fHwxNzY0MDQyOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Workspace" }
        ]}
        layout="vertical"
      />

      <TextSection
        title="THE PROCESS"
        subtitle=""
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        align="left"
      />

      {/* Third Image Grid */}
      <ImageGrid
        images={[
          { url: "https://images.unsplash.com/photo-1625656006822-0f81e8380331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYmljeWNsZXxlbnwxfHx8fDE3NjM5MzI4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Bicycle" },
          { url: "https://images.unsplash.com/photo-1763608371590-cd15312b481b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGZsYWdzfGVufDF8fHx8MTY0MDQyOTc4fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Colorful flags" },
          { url: "https://images.unsplash.com/photo-1604652444031-031691441d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzYzOTUwNzY4fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Ocean" },
          { url: "https://images.unsplash.com/photo-1630408912581-95141c0a768e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc3BhY2UlMjBjb2ZmZWV8ZW58MXx8fHwxNzY0MDQyOTc5fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Coffee" }
        ]}
        layout="vertical"
      />

      <TextSection
        title="LOREM MOLLIS"
        subtitle=""
        description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        align="right"
      />

      {/* Fourth Image Grid */}
      <ImageGrid
        images={[
          { url: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjQwMTYyODV8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Mountain" },
          { url: "https://images.unsplash.com/photo-1723479813298-e1a50fea7458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHklMjBzdHJlZXR8ZW58MXx8fHwxNzY0MDEzNzczfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "City" },
          { url: "https://images.unsplash.com/photo-1613144332883-4a8848cb2b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW50ZXIlMjBzbm93JTIwc2NlbmV8ZW58MXx8fHwxNzYzOTU2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Snow" }
        ]}
        layout="vertical"
      />

      <TextSection
        title="RUN OLD MEMORIES"
        subtitle="THROUGH LENS"
        description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        align="left"
      />

      <ContactForm />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <h3 className="mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
