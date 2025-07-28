import React, { useEffect, useState } from "react";

type LeetCodeStats = {
  solvedProblem: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
};

const LeetCodeCard = () => {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);

  useEffect(() => {
    fetch("https://alfa-leetcode-api.onrender.com/RavikiranAithal/solved")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setStats(null));
  }, []);

  return (
    <div className="glass p-6 rounded-xl hover-lift group animate-slide-up flex flex-col h-full">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-lg bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform duration-300">
          <img
            src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
            alt="LeetCode"
            className="w-8 h-8"
          />
        </div>
        <h3 className="text-xl font-semibold ml-4 group-hover:text-primary transition-colors">
          LeetCode
        </h3>
      </div>
      {stats ? (
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Total</span>
            <span className="font-semibold">{stats.solvedProblem}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-500">Easy</span>
            <span>{stats.easySolved}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-yellow-500">Medium</span>
            <span>{stats.mediumSolved}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-red-500">Hard</span>
            <span>{stats.hardSolved}</span>
          </div>
        </div>
      ) : (
        <div className="text-sm text-muted-foreground flex-1">Loading...</div>
      )}
      <a
        href="https://leetcode.com/RavikiranAithal/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-3 py-1 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition text-center"
      >
        Profile
      </a>
    </div>
  );
};

export default LeetCodeCard;