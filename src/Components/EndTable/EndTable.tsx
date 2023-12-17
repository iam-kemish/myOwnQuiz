// import React from "react";
// import "./EndTable.css";
// interface Question {
//   correctOption: number;
//   options: string[];
//   points: number;
//   question: string;
// }

// interface correct {
//   correctAnswers: Question[];
//   show: boolean;
//   setGame: (game: string) => void;
//   setOptionChoosen: (OptionChoosen: null) => void;
//   setScore: (score: number) => void;
//   setIndex: (index: number) => void;
//   setCorrectAnswers: (correctAnswer: Question[]) => void;
// }
// const EndTable: React.FC<correct> = ({
//   correctAnswers,
//   setGame,
//   setScore,
//   setIndex,
//   setOptionChoosen,
//   show,
//   setCorrectAnswers,
// }) => {

//   return (
//     <div className="endpage">
//       <table>
//         <thead>
//           <tr>
//             <th colSpan={2}>Questions</th>
//             <th>Points</th>
//           </tr>
//         </thead>
//         <tbody>
//           {show &&
//             correctAnswers.map((correct) => {
//               return (
//                 <tr key={correct.question}>
//                   <td colSpan={2}>{correct.question}</td>
//                   <td>{correct.points}</td>
//                 </tr>
//               );
//             })}
//         </tbody>
//       </table>
//       <button className="btn btn-ui" onClick={handleEnd}>
//         Restart quiz
//       </button>
//     </div>
//   );
// };

// export default EndTable;
