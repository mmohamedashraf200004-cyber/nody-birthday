import React, { useState } from 'react';

export default function BirthdayWebsite() {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState({ q1: '', q2: '' });
  const [result, setResult] = useState('');
  const [instantFeedback, setInstantFeedback] = useState({ q1: '', q2: '' });
  const [showMemories, setShowMemories] = useState(false);

  const handleConfirm = () => {
    const q1Correct = answers.q1 === 'مودي';
    const q2Correct = answers.q2 === 'فداك الف ميكب';

    if (q1Correct && q2Correct) {
      setResult('صح 😌❤️ شطورة يا نودي');
      setTimeout(() => setShowMemories(true), 1500);
    } else {
      setResult('غلط 😠 جربي تاني يا نودي');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-950 via-pink-900 to-rose-700 text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`floating-${i}`}
            className="absolute animate-bounce opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 4}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            💖
          </div>
        ))}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 35 + 15}px`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {showMemories ? (
        <div className="relative z-10 min-h-screen px-6 py-16 flex items-center justify-center">
          <div className="max-w-5xl w-full bg-gradient-to-b from-pink-50 to-rose-100 rounded-[3rem] p-8 shadow-2xl text-center overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {Array.from({ length: 60 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-pulse text-pink-300 opacity-60"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    fontSize: `${15 + Math.random() * 25}px`,
                  }}
                >
                  ✨
                </div>
              ))}

              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={`heart-${i}`}
                  className="absolute text-pink-400 animate-bounce"
                  style={{
                    bottom: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                    fontSize: `${20 + Math.random() * 30}px`,
                  }}
                >
                  ❤️
                </div>
              ))}
            </div>
            <div className="animate-pulse text-pink-300 text-2xl mb-4">
              ✨ ❤️ ✨ ❤️ ✨
            </div>

            <p className="uppercase tracking-[6px] text-rose-400 text-sm mb-3 font-semibold">
              Memories
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-rose-900 mb-10 leading-tight">
              Our <span className="italic text-pink-600">Beautiful</span> Moments
            </h1>

            <audio controls autoPlay loop className="mx-auto mb-10 w-full max-w-xl rounded-full shadow-[0_0_50px_rgba(255,105,180,0.5)] animate-pulse">
              <source src="/song.mp3" type="audio/mpeg" />
            </audio>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[1,2,3,4].map((img) => (
                <div key={img} className="rounded-[2rem] overflow-hidden shadow-xl bg-white hover:scale-110 hover:rotate-1 transition duration-500 animate-pulse">
                  <img
                    src={`/images/${img}.jpeg`}
                    alt="memory"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-lg border border-pink-100 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-rose-700 mb-5">
                💌 رسالة ليكي
              </h2>

              <p className="text-xl text-rose-900 leading-10 font-medium animate-pulse">
                بحبك يا نودي يا كل حياتي وروحي كلها وبعشقك وبموت فيكي يا أجمل وأحلى وأرق بنوتة في العالم كله ❤️
                <br /><br />
                بحبك يا مراتي 💋💋
                <br /><br />
                وإن شاء الله كمان كام شهر نكون مخطوبين ونتجوز في أسرع وقت يا حياتي كلها 😍😍💋🌎
              </p>
            </div>
          </div>
        </div>
      ) : !started ? (
        <div className="min-h-screen flex items-center justify-center px-6 relative z-10">
          <div className="text-center bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 shadow-2xl max-w-lg">
            <h1 className="text-5xl md:text-7xl font-black text-pink-100 leading-tight mb-6 drop-shadow-lg">
              بحبك يا نودي
              <br />
              يا عمري ❤️
            </h1>

            <p className="text-pink-200 text-xl mb-8">
              ✨ عندي مفاجأة صغيرة ليكي ✨
            </p>

            <button
              onClick={() => setStarted(true)}
              className="bg-gradient-to-r from-pink-500 to-rose-600 hover:scale-110 transition duration-300 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-[0_0_50px_rgba(255,105,180,0.5)]"
            >
              ابدأ المفاجأة 🎁
            </button>
          </div>
        </div>
      ) : (
        <div className="relative z-10 px-4 py-12 flex justify-center">
          <div className="w-full max-w-3xl bg-pink-50/95 rounded-[3rem] p-8 shadow-[0_0_60px_rgba(255,192,203,0.5)] text-rose-900">
            <h1 className="text-center text-5xl font-black text-pink-700 mb-2">
              ❤️ بحبك يا نودي ❤️
            </h1>
            <p className="text-center text-pink-500 mb-10 text-lg">
              كل لحظة معاكي حاجة تانية ✨
            </p>

            <div className="space-y-10">
              <div className="bg-white rounded-[2rem] p-6 shadow-lg border border-pink-200">
                <h2 className="text-3xl font-bold mb-5 text-center">
                  السؤال الأول ❤️<br />
                  بتحبي ايه أكتر؟
                </h2>

                <div className="space-y-3">
                  {['الميكب', 'الأكل', 'مودي'].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setAnswers((prev) => ({ ...prev, q1: item }));
                        setInstantFeedback((prev) => ({
                          ...prev,
                          q1: item === 'مودي' ? 'صح 😌❤️' : 'غلط 😠'
                        }));
                      }}
                      className={`w-full rounded-3xl p-5 text-2xl border transition ${answers.q1 === item ? 'bg-pink-200 border-pink-500' : 'bg-white border-pink-200 hover:bg-pink-100'}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {instantFeedback.q1 && (
                  <div className="text-center mt-4 text-3xl font-black text-pink-600">
                    {instantFeedback.q1}
                  </div>
                )}
              </div>

              <div className="bg-white rounded-[2rem] p-6 shadow-lg border border-pink-200">
                <h2 className="text-3xl font-bold mb-5 text-center leading-relaxed">
                  السؤال التاني ❤️<br />
                  لو مسكت الميكب بتاعك وكسرت حاجة منه هتقوليلي ايه؟
                </h2>

                <div className="space-y-3">
                  {['فداك الف ميكب', 'هتعيطي', 'هتنكدي'].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setAnswers((prev) => ({ ...prev, q2: item }));
                        setInstantFeedback((prev) => ({
                          ...prev,
                          q2: item === 'فداك الف ميكب' ? 'صح 😌❤️' : 'غلط 😠'
                        }));
                      }}
                      className={`w-full rounded-3xl p-5 text-2xl border transition ${answers.q2 === item ? 'bg-pink-200 border-pink-500' : 'bg-white border-pink-200 hover:bg-pink-100'}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {instantFeedback.q2 && (
                  <div className="text-center mt-4 text-3xl font-black text-pink-600">
                    {instantFeedback.q2}
                  </div>
                )}
              </div>
            </div>

            <div className="text-center mt-10">
              <button
                onClick={handleConfirm}
                className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-12 py-5 rounded-full text-2xl font-bold hover:scale-105 transition shadow-[0_0_50px_rgba(255,105,180,0.5)]"
              >
                ❤️ تأكيد الإجابات
              </button>

              {result && (
                <div className="mt-8 text-4xl font-black text-pink-700">
                  {result}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
