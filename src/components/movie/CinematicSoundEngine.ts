'use client';

class CinematicSoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private masterGain: GainNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private droneFilter: BiquadFilterNode | null = null;
  private currentSceneIdx: number = 0;

  // Scene Chord Frequencies (Fundamental, 5th, Octave, Color note) for 9 Scenes
  private sceneChords: number[][] = [
    [73.42, 110.0, 146.83, 185.0],    // Scene 1: D Major Dawn (The Beginning)
    [98.0, 146.83, 196.0, 246.94],    // Scene 2: G Major Collegiate (University)
    [110.0, 164.81, 220.0, 261.63],   // Scene 3: A Minor Cybernetic (Learning & Tech)
    [87.31, 130.81, 174.61, 220.0],   // Scene 4: F Major Foundry (CampusOS AI)
    [103.83, 155.56, 207.65, 246.94], // Scene 5: G# Minor Socratic AI (Gyanix)
    [92.5, 138.59, 185.0, 233.08],    // Scene 6: F# Minor Advanced Systems (Other Projects)
    [82.41, 123.47, 164.81, 207.65],  // Scene 7: E Major Robotics (Internship)
    [73.42, 110.0, 146.83, 220.0],    // Scene 8: D Major Summit (Anveshan Hackathon)
    [65.41, 98.0, 130.81, 164.81]     // Scene 9: C Major Metropolis Finale (The Final Destination)
  ];

  public init() {
    if (this.ctx) return;
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.15, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // Low-pass drone filter
      this.droneFilter = this.ctx.createBiquadFilter();
      this.droneFilter.type = 'lowpass';
      this.droneFilter.frequency.setValueAtTime(280, this.ctx.currentTime);
      this.droneFilter.connect(this.masterGain);

      // Sub-bass continuous drone
      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc1.type = 'sine';
      this.droneOsc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 sub
      this.droneOsc1.connect(this.droneFilter);
      this.droneOsc1.start();

      this.droneOsc2 = this.ctx.createOscillator();
      this.droneOsc2.type = 'triangle';
      this.droneOsc2.frequency.setValueAtTime(82.4, this.ctx.currentTime); // E2
      this.droneOsc2.connect(this.droneFilter);
      this.droneOsc2.start();
    } catch {
      // Web Audio API unavailable
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (!this.ctx) {
      if (!muted) this.init();
    }
    if (this.ctx && this.masterGain) {
      if (this.ctx.state === 'suspended' && !muted) {
        this.ctx.resume();
      }
      const targetGain = muted ? 0.0001 : 0.14;
      this.masterGain.gain.exponentialRampToValueAtTime(targetGain, this.ctx.currentTime + 0.3);
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public onSceneChange(sceneIndex: number) {
    if (this.currentSceneIdx === sceneIndex) return;
    this.currentSceneIdx = sceneIndex;
    if (!this.ctx || this.isMuted) return;

    try {
      const chord = this.sceneChords[sceneIndex] || this.sceneChords[0];
      const now = this.ctx.currentTime;

      // Play soft transition chord
      chord.forEach((freq, i) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.035 / (i + 1), now + 0.8);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 4.5);
      });

      // Modulate drone filter
      if (this.droneFilter) {
        this.droneFilter.frequency.exponentialRampToValueAtTime(
          sceneIndex === 2 || sceneIndex === 3 ? 550 : 260,
          now + 1.2
        );
      }
    } catch {
      // Audio error
    }
  }

  public playWhoosh() {
    if (!this.ctx || this.isMuted || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(560, now + 0.4);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.8);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.8);
    } catch {}
  }

  public playInteractionChime(freq = 660) {
    if (!this.ctx || this.isMuted || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.setValueAtTime(freq * 1.5, now + 0.08);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.6);
    } catch {}
  }

  public playRevealPulse(freq = 520) {
    if (!this.ctx || this.isMuted || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.25, now + 0.4);

      gain.gain.setValueAtTime(0.025, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.9);
    } catch {}
  }

  public playKeyClick() {
    if (!this.ctx || this.isMuted || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800 + Math.random() * 400, now);

      gain.gain.setValueAtTime(0.008, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.035);
    } catch {}
  }

  public playFootstep() {
    if (!this.ctx || this.isMuted || !this.masterGain) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(95 + Math.random() * 20, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.05);

      gain.gain.setValueAtTime(0.006, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch {}
  }
}

export const soundEngine = new CinematicSoundEngine();
