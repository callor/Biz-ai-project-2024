"use client";

import { useCallback } from "react";

const ViewResultPage = ({ resultText }) => {
  // 문자열 결과를 보기 좋게 편집하기
  const textToHtml = useCallback((text) => {
    const textList = text.split("\n");

    let flag = false;

    const result = textList.map((t) => {
      if (!flag && t.trim().startsWith("```")) {
        flag = true;
        return `<pre class="mermaid_code">`;
      } else if (flag && t.trim().startsWith("```")) {
        flag = false;
        return "</pre>";
      } else if (flag) {
        return `${t}\n`;
      }
      return `${t}<br/>`;
    });
    return result.join("");
  });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: textToHtml(resultText) }}
    ></div>
  );
};

export default ViewResultPage;
