'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

export const CosmicAudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodeRef = useRef<GainNode | null>(null);

  const toggleSound = () => {
    if (isPlaying) {
      // Stop
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch (e) {
              // ignore if already stopped
            }
          });
          oscillatorsRef.current = [];
          setIsPlaying(false);
        }, 500);
      } else {
        setIsPlaying(false);
      }
    } else {
      // Start Cosmic Drone (Warm 432Hz ambient chord: D minor / Cosmic 5th)
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        if (ctx.state === 'suspended') {
          ctx.resume();
        }

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.5);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Frequencies for a warm cosmic chord: D2 (73.4Hz), A2 (110Hz), D3 (146.8Hz), F3 (174.6Hz), A3 (220Hz)
        const frequencies = [73.4, 110.0, 146.83, 174.61, 220.0];
        const oscs: OscillatorNode[] = [];

        frequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
          const oscGain = ctx.createGain();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle frequency drift
          osc.detune.setValueAtTime((Math.random() - 0.5) * 8, ctx.currentTime);

          oscGain.gain.value = idx === 0 ? 0.35 : 0.15;

          if (panner) {
            panner.pan.value = (idx / frequencies.length) * 1.6 - 0.8;
            osc.connect(oscGain);
            oscGain.connect(panner);
            panner.connect(masterGain);
          } else {
            osc.connect(oscGain);
            oscGain.connect(masterGain);
          }

          osc.start();
          oscs.push(osc);
        });

        oscillatorsRef.current = oscs;
        setIsPlaying(true);
      } catch (err) {
        console.error('Audio initialization error:', err);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch (e) {
          // ignore
        }
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-medium text-neutral-300 transition-all hover:border-purple-500/40 hover:bg-white/10">
      <button
        onClick={toggleSound}
        className="flex items-center gap-2 focus:outline-none group"
        aria-label={isPlaying ? 'Mute Cosmic Ambient Sound' : 'Play Cosmic Ambient Sound'}
      >
        <span className="relative flex h-2 w-2">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-purple-500' : 'bg-neutral-500'}`}></span>
        </span>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-purple-400 animate-pulse" />
        ) : (
          <VolumeX className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
        )}

        <span className="text-neutral-300 group-hover:text-white transition-colors font-sans">
          {isPlaying ? 'Cosmic Frequency: Active' : 'Space Ambience'}
        </span>
      </button>

      {/* Animated Equalizer Visualizer */}
      {isPlaying ? (
        <div className="flex items-end gap-0.5 h-3">
          <span className="w-0.5 bg-purple-400 animate-[pulse_0.6s_ease-in-out_infinite] h-3 rounded-full" />
          <span className="w-0.5 bg-indigo-400 animate-[pulse_0.8s_ease-in-out_infinite_0.2s] h-2 rounded-full" />
          <span className="w-0.5 bg-cyan-400 animate-[pulse_0.5s_ease-in-out_infinite_0.4s] h-3.5 rounded-full" />
          <span className="w-0.5 bg-pink-400 animate-[pulse_0.7s_ease-in-out_infinite_0.1s] h-1.5 rounded-full" />
        </div>
      ) : (
        <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
      )}
    </div>
  );
};
