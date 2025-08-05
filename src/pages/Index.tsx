const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 120 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-primary/10 animate-pulse-border"
              style={{ animationDelay: `${(i % 12) * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center">
        
        {/* Header Section */}
        <div className="text-center mb-12 animate-float">
          {/* Event Title */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4 animate-glow">
              CODE-SPIRIT
            </h1>
            <div className="text-lg md:text-xl text-cyber-blue font-mono">
              &lt;/&gt; HACKATHON 2025 &lt;/&gt;
            </div>
          </div>

          {/* Organizer */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Organized by{' '}
            <span className="text-cyber-purple font-bold">
              Vardhaman College of Engineering
            </span>
          </p>
        </div>

        {/* Event Details Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-full max-w-6xl">
          
          {/* Date & Fee Card */}
          <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-glow">
            <div className="text-center">
              <div className="text-4xl mb-3">📅</div>
              <h3 className="text-xl font-bold text-cyber-purple mb-2">Event Date</h3>
              <p className="text-lg font-semibold text-foreground">25th August 2025</p>
              <div className="mt-4 pt-4 border-t border-primary/20">
                <div className="text-3xl mb-2">💰</div>
                <p className="text-lg">
                  <span className="text-cyber-green font-bold text-2xl">₹50</span>
                  <br />
                  <span className="text-sm text-muted-foreground">Registration Fee</span>
                </p>
              </div>
            </div>
          </div>

          {/* Round 1 Details */}
          <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-glow">
            <div className="text-center">
              <div className="text-4xl mb-3">🌐</div>
              <h3 className="text-xl font-bold text-cyber-blue mb-3">Round 1 - Online</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-cyber-purple">⏱️</span> Duration: 2 hours</p>
                <p><span className="text-cyber-purple">🧠</span> 3 coding questions</p>
                <p><span className="text-cyber-purple">🎯</span> Top 25% qualify</p>
                <p><span className="text-cyber-purple">💻</span> Online platform</p>
              </div>
            </div>
          </div>

          {/* Round 2 Details */}
          <div className="bg-card border border-primary/20 rounded-lg p-6 shadow-glow">
            <div className="text-center">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-xl font-bold text-cyber-green mb-3">Round 2 - Offline</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-cyber-purple">📍</span> At Vardhaman College</p>
                <p><span className="text-cyber-purple">✅</span> For qualified participants</p>
                <p><span className="text-cyber-purple">🏆</span> Final showdown</p>
                <p><span className="text-cyber-purple">⚡</span> Intense competition</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prizes Section */}
        <div className="bg-surface-dark border border-primary/30 rounded-xl p-8 mb-12 w-full max-w-4xl shadow-cyber">
          <h2 className="text-3xl font-bold text-center text-cyber-pink mb-8">
            🏆 PRIZES & REWARDS 🏆
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-glow rounded-lg border border-primary/20">
              <div className="text-3xl mb-2">🥇</div>
              <h4 className="font-bold text-cyber-purple mb-2">1st Place</h4>
              <p className="text-sm text-muted-foreground">Cash Prize</p>
            </div>
            <div className="text-center p-4 bg-gradient-glow rounded-lg border border-primary/20">
              <div className="text-3xl mb-2">🥈</div>
              <h4 className="font-bold text-cyber-blue mb-2">2nd Place</h4>
              <p className="text-sm text-muted-foreground">Cash Prize</p>
            </div>
            <div className="text-center p-4 bg-gradient-glow rounded-lg border border-primary/20">
              <div className="text-3xl mb-2">🥉</div>
              <h4 className="font-bold text-cyber-green mb-2">3rd Place</h4>
              <p className="text-sm text-muted-foreground">Cash Prize</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="text-center p-4 bg-muted/50 rounded-lg border border-primary/10">
              <div className="text-2xl mb-2">🏅</div>
              <h4 className="font-bold text-foreground mb-1">All Participants</h4>
              <p className="text-sm text-muted-foreground">Certificates</p>
            </div>
            <div className="text-center p-4 bg-muted/50 rounded-lg border border-primary/10">
              <div className="text-2xl mb-2">🎁</div>
              <h4 className="font-bold text-foreground mb-1">Special Goodies</h4>
              <p className="text-sm text-muted-foreground">Exciting Rewards</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="https://forms.gle/yourformlink" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-primary-foreground bg-gradient-primary rounded-xl shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-cyber border border-primary/50 animate-glow"
          >
            <span className="relative z-10 flex items-center gap-3">
              <span>🚀</span>
              REGISTER NOW
              <span>⚡</span>
            </span>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-blue p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-gradient-primary rounded-xl h-full w-full"></div>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-muted-foreground">
          <p className="text-sm font-mono">
            &lt;code&gt; Build. Compete. Conquer. &lt;/code&gt;
          </p>
          <p className="text-xs mt-2 opacity-70">
            © 2025 Vardhaman College of Engineering
          </p>
        </div>

      </div>

      {/* Additional floating elements */}
      <div className="absolute top-20 left-10 text-cyber-purple/30 text-6xl animate-float" style={{ animationDelay: '1s' }}>
        &lt;/&gt;
      </div>
      <div className="absolute bottom-32 right-16 text-cyber-blue/30 text-4xl animate-float" style={{ animationDelay: '2s' }}>
        { }
      </div>
      <div className="absolute top-1/3 right-8 text-cyber-green/30 text-5xl animate-float" style={{ animationDelay: '0.5s' }}>
        [ ]
      </div>
    </div>
  );
};

export default Index;