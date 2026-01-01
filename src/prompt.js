export function buildPrompt(topic, level) {
  const levels = {
    simple: "Explain this like to a middle school student using simple language and examples.",
    normal: "Explain this clearly at a high school level.",
    honors: "Explain this at an AP / Honors high school level with correct terminology.",
    advanced: "Explain this at a college level with depth and technical accuracy."
  };

  return `
Topic: ${topic}

${levels[level]}

Keep it structured and easy to understand.
`;
}

