// "use client";

// import { useState, useEffect, Suspense } from "react";
// import dynamic from "next/dynamic";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Slider } from "@/components/ui/slider";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Heart, Coffee, Film, Utensils, Clock } from "lucide-react";
// import confetti from "canvas-confetti";
// import ThemedCard from "@/components/ThemedCard";
// import Sparkles from "@/components/Sparkles";
// import FloatingOrbs from "@/components/FloatingOrbs";
// import FairyFooter from "@/components/FairyFooter";
// import StepCard from "@/components/StepCard";
// import SelectButton from "@/components/SelectButton";

// interface Answers {
//   isAvailable: boolean | null;
//   date: Date | null;
//   time: string;
//   food: string[];
//   movie: string;
//   excitement: number;
// }


// const HeartBackground = dynamic(() => import("@/components/HeartBackground"), {
//   ssr: false,
// });

// const fadeInUp = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
//   transition: { duration: 0.5 },
// };

// export default function EnchantingDateProposalApp() {
//   const [step, setStep] = useState(0);
//   const [answers, setAnswers] = useState<Answers>({
//     isAvailable: null,
//     date: null,
//     time: "",
//     food: [],
//     movie: "",
//     excitement: 50,
//   });

//   const [hour, setHour] = useState<string>("7");
//   const [minute, setMinute] = useState<string>("00");
//   const [ampm, setAmpm] = useState<string>("PM");

//   useEffect(() => {
//     setAnswers((prev) => ({ ...prev, time: `${hour}:${minute} ${ampm}` }));
//   }, [hour, minute, ampm]);

//   const handleAnswer = (key: keyof Answers, value: Answers[keyof Answers]) => {
//     setAnswers({ ...answers, [key]: value });
//     setStep(step + 1);
//   };

//   const triggerConfetti = () => {
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 },
//     });
//   };

//   const formatDate = (d: Date | null) => {
//     if (!d) return "";
//     try {
//       return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
//     } catch (e) {
//       return d.toDateString();
//     }
//   };

//   const steps = [
    
//     <motion.div key="step0" className="text-center" {...fadeInUp}>
//       <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-500">
//         Will you go on a date with me?
//       </h1>
//       <motion.img
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         src="https://media1.tenor.com/m/59regbBE_kwAAAAd/tkthao219-bubududu.gif"
//         alt="Cute bear proposal gif"
//         className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg"
//       />
//       <div className="space-x-4">
//         <Button
//           onClick={() => {
//             handleAnswer("isAvailable", true);
//             triggerConfetti();
//           }}
//           className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
//         >
//           Yes, I&apos;d love to!
//         </Button>
//         <Dialog>
//           <DialogTrigger asChild>
//             <Button
//               variant="outline"
//               className="border-pink-300 text-pink-500 hover:bg-pink-100 font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
//             >
//               No
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="bg-pink-50 border-2 border-pink-300">
//             <DialogHeader>
//               <DialogTitle className="text-2xl font-bold text-pink-600">
//                 There is no &quot;NOOOOOO&quot;
//               </DialogTitle>
//               <DialogDescription className="text-lg text-pink-500">
//                 You must come with me!
//               </DialogDescription>
//             </DialogHeader>
//             <motion.img
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               src="https://media1.tenor.com/m/2XJN2YEYbIAAAAAd/peach-and.gif"
//               alt="Excited bear gif"
//               className="w-full max-w-md mx-auto mb-4 rounded-lg shadow-lg"
//             />{" "}
//             <Button
//               onClick={() => {
//                 handleAnswer("isAvailable", true);
//                 triggerConfetti();
//               }}
//               className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105"
//             >
//               Okay, I&apos;ll come!
//             </Button>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </motion.div>,

    
//     <motion.div key="step1" className="text-center" {...fadeInUp}>
//       <StepCard stepNumber={1} totalSteps={6}>
//       <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-600">
//         YEYYYYYYYY, WHEN SHALL WE GO?
//       </h2>
//       <motion.img
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         src="https://media.tenor.com/WiQQRwR2QFAAAAAi/cute-panda.gif"
//         alt="Excited bear gif"
//         className="w-full max-w-md mx-auto mb-6 rounded-2xl shadow-2xl shadow-pink-300/30"
//       />
//       <div className="mb-6 p-4 bg-white rounded-lg shadow-lg">
//         <Calendar
//           mode="single"
//           selected={answers.date || undefined}
//           onSelect={(date) => setAnswers({ ...answers, date: date || null })}
//           className="mx-auto mb-4 w-full max-w-md"
//         />
//         <div className="flex gap-3 justify-center mt-4">
//           <Select onValueChange={(val) => setHour(val)}>
//             <SelectTrigger className="w-24 bg-pink-50 border-pink-200 text-pink-700">
//               <SelectValue placeholder="Hour" />
//             </SelectTrigger>
//             <SelectContent>
//               {Array.from({ length: 12 }, (_, i) => i + 1).map((h) => (
//                 <SelectItem key={h} value={`${h}`}>
//                   {h}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select onValueChange={(val) => setMinute(val)}>
//             <SelectTrigger className="w-20 bg-pink-50 border-pink-200 text-pink-700">
//               <SelectValue placeholder="Min" />
//             </SelectTrigger>
//             <SelectContent>
//               {['00', '15', '30', '45'].map((m) => (
//                 <SelectItem key={m} value={m}>
//                   {m}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>

//           <Select onValueChange={(val) => setAmpm(val)}>
//             <SelectTrigger className="w-20 bg-pink-50 border-pink-200 text-pink-700">
//               <SelectValue placeholder="AM/PM" />
//             </SelectTrigger>
//             <SelectContent>
//               {['AM', 'PM'].map((ap) => (
//                 <SelectItem key={ap} value={ap}>
//                   {ap}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>
//       </div>
//       <Button
//         onClick={() => setStep(step + 1)}
//         disabled={!answers.date || !answers.time}
//         className="bg-gradient-to-r from-pink-500 to-rose-500 hover:brightness-95 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
//       >
//         <Clock className="mr-2 h-5 w-5" /> Set our date!{" "}
//         <Heart className="ml-2 h-5 w-5" />
//       </Button>
//       </StepCard>
//     </motion.div>,

  
//     <motion.div key="step2" className="text-center" {...fadeInUp}>
//       <StepCard stepNumber={2} totalSteps={6}>
//       <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-600">
//         What shall we feast on, my dear?
//       </h2>
//       <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
//         {[
//           { name: "Lasagna", icon: <Utensils className="w-6 h-6" /> },
//           { name: "Chicken Pie", icon: <Utensils className="w-6 h-6" /> },
//           { name: "Chicken Shawarma", icon: <Utensils className="w-6 h-6" /> },
//           { name: "Snack Platter", icon: <Coffee className="w-6 h-6" /> },
//           { name: "Mix rice", icon: <Utensils className="w-6 h-6" /> },
//         ].map(({ name, icon }) => (
//           <SelectButton
//             key={name}
//             icon={icon}
//             label={name}
//             isSelected={answers.food.includes(name)}
//             onClick={() => {
//               const newFood = answers.food.includes(name)
//                 ? answers.food.filter((f) => f !== name)
//                 : [...answers.food, name];
//               setAnswers({ ...answers, food: newFood });
//             }}
//           />
//         ))}
//       </div>
//       <Button
//         onClick={() => setStep(step + 1)}
//         disabled={answers.food.length === 0}
//         className="bg-gradient-to-r from-pink-500 to-rose-500 hover:brightness-95 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
//       >
//         Looks delicious! 🍽️
//       </Button>
//       </StepCard>
//     </motion.div>,

     
//     <motion.div key="step3" className="text-center" {...fadeInUp}>
//       <h2 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-600">
//         What shall we watch together?
//       </h2>
//       <div className="grid grid-cols-2 gap-6 mb-6">
//         {[
//           "The Notebook",
//           "La La Land",
//           "Titanic",
//           "Pride and Prejudice",
//           "Anyone But You",
//           "Past Lives",
//           "Love at First Sight",
//           "Through My Window 3",
//           "Something else",
//         ].map((movie) => (
//           <motion.button
//             key={movie}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-white text-pink-600 hover:bg-pink-100 font-bold py-4 px-6 rounded-lg shadow-md transition-colors duration-300"
//             onClick={() => {
//               if (movie === "Something else") {
//                 const customMovie = prompt(
//                   "What movie would you like to watch?"
//                 );
//                 if (customMovie) handleAnswer("movie", customMovie);
//               } else {
//                 handleAnswer("movie", movie);
//               }
//             }}
//           >
//             <Film className="mx-auto mb-2" />
//             {movie}
//           </motion.button>
//         ))}
//       </div>
//     </motion.div>,

    
//     <motion.div key="step4" className="text-center" {...fadeInUp}>
//       <StepCard stepNumber={4} totalSteps={6}>
//       <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-600">
//         How excited are you for our date?
//       </h2>
//       <div className="max-w-lg mx-auto mb-8 p-8 bg-gradient-to-b from-white/80 to-pink-50/60 rounded-2xl shadow-lg border border-pink-100">
//         <Slider
//           defaultValue={[50]}
//           max={100}
//           step={25}
//           onValueChange={(value) =>
//             setAnswers({ ...answers, excitement: value[0] })
//           }
//         />
//         <div className="flex justify-between mt-6 text-sm text-pink-600 font-semibold">
//           <span>😐 Can&apos;t wait!</span>
//           <span>🤩 Super duper excited!</span>
//         </div>
//       </div>
//       <motion.div
//         className="text-4xl font-playfair font-bold text-pink-600 mb-8"
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ type: "spring", stiffness: 260, damping: 20 }}
//       >
//         Excitement level: <span className="text-rose-500">{answers.excitement}%</span>
//       </motion.div>
//       <Button
//         onClick={() => {
//           setStep(step + 1);
//           setTimeout(triggerConfetti, 500);
//         }}
//         className="bg-gradient-to-r from-pink-500 to-rose-500 hover:brightness-95 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
//       >
//         Let&apos;s make it official! 💕
//       </Button>
//       </StepCard>
//     </motion.div>,

     
//     <motion.div key="step5" className="text-center" {...fadeInUp}>
//       <StepCard stepNumber={6} totalSteps={6}>
//       <h2 className="text-5xl sm:text-6xl font-playfair font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-500">
//         It&apos;s a date, my love!
//       </h2>
//       <p className="text-lg text-rose-500 mb-3 font-poppins">
//         I can&apos;t wait to see you on:
//       </p>
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.4 }}
//         className="inline-block bg-gradient-to-r from-pink-100 to-rose-100 px-6 py-4 rounded-2xl border border-pink-200 mb-8"
//       >
//         <p className="text-3xl font-playfair font-bold text-pink-700">
//           {formatDate(answers.date)} at {answers.time}
//         </p>
//       </motion.div>
//       <motion.img
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         src="https://media.tenor.com/yvUCU981VYoAAAAj/mochi-cat-goma.gif"
//         alt="Excited bear gif"
//         className="w-full max-w-md mx-auto mb-6 rounded-2xl shadow-2xl shadow-pink-300/30"
//       />
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 20 }}
//       >
//         <Heart className="text-red-500 w-16 h-16 mx-auto mt-6 animate-pulse" />
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 0.6 }}
//         className="mt-8 space-y-3 text-lg text-pink-600 font-poppins"
//       >
//         <p className="text-base">We&apos;ll enjoy some delicious <span className="font-semibold">{answers.food.join(", ")}</span>.</p>
//         <p className="text-base">Then we&apos;ll watch <span className="font-semibold italic">&quot;{answers.movie}&quot;</span> together.</p>
//         <p className="text-xl font-playfair font-bold mt-6">
//           Your excitement level: <span className="text-rose-600">{answers.excitement}/100</span>
//         </p>
//       </motion.div>
//       </StepCard>
//     </motion.div>,
//   ];

//   useEffect(() => {
//     const saveAnswers = async () => {
//       console.log('Saved answers:', answers);
      
//       // Save to localStorage
//       localStorage.setItem('dateProposalAnswers', JSON.stringify(answers));

//       // Send to your email
//       try {
//         await fetch('/api/send-response', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(answers)
//         });
//       } catch (error) {
//         console.error('Failed to send response:', error);
//       }
//     };

//     if (step === steps.length - 1) {
//       saveAnswers();
//     }
//   }, [step, answers, steps.length]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100 flex items-center justify-center p-6">
//       <Suspense fallback={null}>
//         <HeartBackground />
//       </Suspense>
//       <div className="relative w-full max-w-3xl">
//         <FloatingOrbs />
//         <ThemedCard>
//           <Sparkles count={18} />
//           <AnimatePresence mode="wait">{steps[step]}</AnimatePresence>
//         </ThemedCard>
//         <FairyFooter />
//       </div>
//     </div>
//   );
// }

'use client';

import { useMemo, useState } from 'react';

type Option = { label: string; value: string };

type Step =
  | { type: 'welcome'; title: string; subtitle: string }
  | { type: 'question'; title: string; options: Option[]; key: string }
  | { type: 'date'; title: string; keyDate: string; keyFallback: string; fallbackLabel: string }
  | { type: 'brainSlider'; title: string; key: string; min: number; max: number }
  | { type: 'cactusSlider'; title: string; key: string; min: number; max: number }
  | { type: 'final'; title: string; subtitle: string; cta: string; href: string };

export default function Page() {
  const steps: Step[] = useMemo(
    () => [
      {
        type: 'welcome',
        title: '🧠 Quick intelligence test!',
        subtitle: 'Please answer honestly.',
      },
      {
        type: 'question',
        key: 'q1',
        title: 'Do you have a brain?',
        options: [
          { label: '✅ Yes', value: 'yes' },
          { label: '🤔 I think so', value: 'think-so' },
          { label: '❌ Not sure', value: 'not-sure' },
        ],
      },
      {
        type: 'brainSlider',
        key: 'brainSize',
        title: 'Select your brain size',
        min: 1,
        max: 100,
      },
      {
        type: 'date',
        title: 'When was the last time you sent me pictures?',
        keyDate: 'lastDate',
        keyFallback: 'dateFallback',
        fallbackLabel: "I'm too dumb to remember",
      },
      {
        type: 'question',
        key: 'timesAsked',
        title: 'How many times person asked for it??',
        options: [
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' },
          { label: 'None', value: 'none' },
          { label: 'Too dumb to remember', value: 'dont-remember' },
        ],
      },
      {
        type: 'question',
        key: 'smartPerson',
        title: 'Would a smart person send me those photos?',
        options: [
          { label: '😎 Obviously', value: 'obviously' },
          { label: '👍 Yes', value: 'yes' },
          { label: '🤷 Maybe', value: 'maybe' },
          { label: '🔥 hell naah', value: 'hell-naah' },
        ],
      },
      {
        type: 'cactusSlider',
        key: 'genieSize',
        title: "To verify it's you, please confirm your genie size",
        min: 1,
        max: 8,
      },
      {
        type: 'final',
        title: '🎉 Congratulations!',
        subtitle:
          'Your brain has been successfully verified.\nOne final step remains...\n📷 Share photos if you want!',
        cta: 'Open Your Instagram',
        href: 'https://instagram.com/',
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({
    brainSize: '50',
    genieSize: '4',
  });

  const current = steps[index];

  const setAnswer = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const canNext = (() => {
    if (current.type === 'welcome' || current.type === 'final') return true;
    if (current.type === 'question') return !!answers[current.key];
    if (current.type === 'brainSlider') return !!answers[current.key];
    if (current.type === 'cactusSlider') return !!answers[current.key];
    if (current.type === 'date') return !!answers[current.keyDate] || answers[current.keyFallback] === 'true';
    return false;
  })();

  const next = () => {
    if (index < steps.length - 1 && canNext) setIndex((i) => i + 1);
  };

  const questionNumber = steps.slice(0, index + 1).filter((s) => s.type !== 'welcome' && s.type !== 'final').length;

  const brainScale = Number(answers.brainSize || 50);
  const cactusScale = Number(answers.genieSize || 4);
  const showCactusWarning = cactusScale > 6;

  return (
    <main style={styles.page}>
      <div style={styles.card}>
        {current.type === 'welcome' && (
          <>
            <h1 style={styles.title}>Welcome</h1>
            <h2 style={styles.subtitle}>{current.title}</h2>
            <p style={styles.text}>{current.subtitle}</p>
          </>
        )}

        {current.type === 'question' && (
          <>
            <h2 style={styles.subtitle}>{`Question ${questionNumber}`}</h2>
            <p style={styles.text}>{current.title}</p>
            <div style={styles.options}>
              {current.options.map((opt) => {
                const active = answers[current.key] === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setAnswer(current.key, opt.value)}
                    style={{ ...styles.optionBtn, ...(active ? styles.optionBtnActive : {}) }}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {current.type === 'brainSlider' && (
          <>
            <h2 style={styles.subtitle}>{`Question ${questionNumber}`}</h2>
            <p style={styles.text}>{current.title}</p>
            <div style={styles.sliderWrap}>
              <input
                type="range"
                min={current.min}
                max={current.max}
                value={answers[current.key] ?? '50'}
                onChange={(e) => setAnswer(current.key, e.target.value)}
                style={styles.slider}
              />
              <p style={styles.valueText}>Size: {answers[current.key]} / 100</p>
              <div
                style={{
                  ...styles.emojiGrow,
                  fontSize: `${50 + brainScale * 1.1}px`,
                }}
              >
                🧠
              </div>
            </div>
          </>
        )}

        {current.type === 'date' && (
          <>
            <h2 style={styles.subtitle}>{`Question ${questionNumber}`}</h2>
            <p style={styles.text}>{current.title}</p>
            <div style={styles.options}>
              <input
                type="date"
                value={answers[current.keyDate] ?? ''}
                onChange={(e) => {
                  setAnswer(current.keyDate, e.target.value);
                  if (e.target.value) setAnswer(current.keyFallback, 'false');
                }}
                style={styles.dateInput}
              />
              <button
                onClick={() => {
                  setAnswer(current.keyDate, '');
                  setAnswer(current.keyFallback, 'true');
                }}
                style={{
                  ...styles.optionBtn,
                  ...(answers[current.keyFallback] === 'true' ? styles.optionBtnActive : {}),
                }}
              >
                {current.fallbackLabel}
              </button>
            </div>
          </>
        )}

        {current.type === 'cactusSlider' && (
          <>
            <h2 style={styles.subtitle}>{`Question ${questionNumber}`}</h2>
            <p style={styles.text}>{current.title}</p>
            <div style={styles.sliderWrap}>
              <input
                type="range"
                min={current.min}
                max={current.max}
                step={1}
                value={answers[current.key] ?? '4'}
                onChange={(e) => setAnswer(current.key, e.target.value)}
                style={styles.slider}
              />
              <p style={styles.valueText}>Size: {answers[current.key]} inches</p>
              {showCactusWarning && <p style={styles.warning}>⚠️ are you sure??</p>}
              <div
                style={{
                  ...styles.emojiGrow,
                  fontSize: `${45 + cactusScale * 12}px`,
                }}
              >
                🌵
              </div>
            </div>
          </>
        )}

        {current.type === 'final' && (
          <>
            <h2 style={styles.subtitle}>{current.title}</h2>
            <p style={{ ...styles.text, whiteSpace: 'pre-line' }}>{current.subtitle}</p>
            <div style={{ fontSize: 90, textAlign: 'center', marginBottom: 10 }}>🐶</div>
            <a href={current.href} target="_blank" rel="noreferrer" style={styles.linkWrap}>
              <button style={styles.ctaBtn}>{current.cta}</button>
            </a>
          </>
        )}

        <div style={styles.nav}>
          {index < steps.length - 1 && (
            <button onClick={next} disabled={!canNext} style={styles.navBtn}>
              Sure, why not
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: 16,
    color: '#fff',
    fontFamily: 'Inter, Arial, sans-serif',
    backgroundImage:
      "linear-gradient(rgba(10,10,25,0.55), rgba(10,10,25,0.55)), url('https://cdn.wallpapersafari.com/30/0/n0HOqk.gif')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  card: {
    width: '100%',
    maxWidth: 700,
    background: 'rgba(255,255,255,0.12)',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: 24,
    padding: 24,
    boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
    backdropFilter: 'blur(10px)',
  },
  title: { margin: 0, fontSize: 40, fontWeight: 800, textAlign: 'center' },
  subtitle: { marginTop: 10, marginBottom: 8, fontSize: 34, fontWeight: 800, lineHeight: 1.2, textAlign: 'center' },
  text: { margin: '8px 0 18px', color: '#f4f6ff', lineHeight: 1.6, fontSize: 22, textAlign: 'center' },
  options: { display: 'grid', gap: 12, marginTop: 8, justifyItems: 'center' },
  optionBtn: {
    textAlign: 'center',
    padding: '14px 16px',
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.25)',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 22,
    fontWeight: 700,
    transition: 'all 0.2s ease',
    width: '100%',
    maxWidth: 520,
  },
  optionBtnActive: {
    border: '1px solid #fff',
    background: 'linear-gradient(135deg, #ff4fd8, #7c5cff)',
    transform: 'translateY(-1px)',
    boxShadow: '0 10px 25px rgba(124,92,255,0.45)',
  },
  sliderWrap: { display: 'grid', gap: 12, justifyItems: 'center' },
  slider: { width: '100%', maxWidth: 520, accentColor: '#00f0ff' },
  valueText: { margin: 0, fontSize: 20, fontWeight: 700, textAlign: 'center' },
  emojiGrow: { lineHeight: 1, transition: 'font-size .2s ease' },
  warning: { margin: 0, color: '#ffef7a', fontWeight: 800, fontSize: 20 },
  dateInput: {
    width: '100%',
    maxWidth: 520,
    padding: '14px 16px',
    borderRadius: 14,
    border: '1px solid rgba(255,255,255,0.35)',
    background: 'rgba(20,20,40,0.55)',
    color: '#fff',
    fontSize: 18,
  },
  nav: { display: 'flex', justifyContent: 'center', marginTop: 22 },
  navBtn: {
    padding: '12px 22px',
    borderRadius: 14,
    border: '1px solid #00f0ff',
    background: 'linear-gradient(90deg, #00f0ff, #00ffa3)',
    color: '#041019',
    cursor: 'pointer',
    minWidth: 220,
    fontWeight: 900,
    fontSize: 22,
    boxShadow: '0 0 8px #00f0ff, 0 0 18px #00f0ff, 0 0 30px rgba(0,240,255,0.6)',
  },
  ctaBtn: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 14,
    border: 'none',
    background: 'linear-gradient(90deg, #ff3cac, #784ba0, #2b86c5)',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 800,
    fontSize: 20,
    letterSpacing: 0.2,
    boxShadow: '0 12px 28px rgba(43,134,197,0.45)',
  },
  linkWrap: { textDecoration: 'none' },
};