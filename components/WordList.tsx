// components/WordList.tsx
interface WordListProps {
    words: string[];
  }
  
  const WordList: React.FC<WordListProps> = ({ words }) => {
    return (
      <div>
        <h2>Word List</h2>
        <ul>
          {words.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default WordList;
  