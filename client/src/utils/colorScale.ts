export default function colorScale(arr: number[]): string[] {
  const rule = [
    { threshold: 2, color: "transparent" },
    { threshold: 4, color: "#CBCBFF" },
    { threshold: 6, color: "#D0FCFA" },
    { threshold: 8, color: "#8AF8F4" },
    { threshold: 10, color: "#82F8C1" },
    { threshold: 12, color: "#26FC59" },
    { threshold: 14, color: "#00FF00" },
    { threshold: 16, color: "#78F700" },
    { threshold: 18, color: "#EBF100" },
    { threshold: 20, color: "#FFCA09" },
    { threshold: 22, color: "#FF9617" },
    { threshold: 24, color: "#FF3C12" },
    { threshold: 26, color: "#FF0000" },
    { threshold: 28, color: "#7F0000" },
    { threshold: 30, color: "#920011" },
    { threshold: 32, color: "#A60027" },
    { threshold: 34, color: "#BA0041" },
    { threshold: 36, color: "#CD0060" },
    { threshold: 38, color: "#E00084" },
    { threshold: 40, color: "#E000AC" },
  ];
  const result = arr.map((el) => {
    for (let i = 0; i < rule.length; i++) {
      if (el <= rule[i].threshold) {
        return rule[i].color;
      }
    }
    return "#E000AC";
  });

  return result;
}
