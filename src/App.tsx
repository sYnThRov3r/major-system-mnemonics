import React, { useState, useEffect } from 'react';
import {
  GlobalStyle,
  Container,
  Title,
  Input,
  ColumnsContainer,
  Column,
  ColumnTitle,
  WordList,
  WordItem,
  ErrorMessage,
  colors,
} from './styles';
import { WordType, wordLists } from './types';

const MAX_WORDS_PER_CATEGORY = 10;

function App() {
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const [matchingWords, setMatchingWords] = useState<{ [key in WordType]: string[] }>({
    person: [],
    action: [],
    object: []
  });

  const validateNumber = (value: string) => {
    if (value.length === 0) return true;
    return /^\d{0,2}$/.test(value);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (validateNumber(value)) {
      setNumber(value);
      setError('');
    } else {
      setError('Please enter two-digit number (00-99)');
    }
  };

  useEffect(() => {
    if (number.length === 2) {
      setMatchingWords({
        person: wordLists.person[number] || [],
        action: wordLists.action[number] || [],
        object: wordLists.object[number] || []
      });
    } else {
      setMatchingWords({
        person: [],
        action: [],
        object: []
      });
    }
  }, [number]);

  const columnConfig: { type: WordType; title: string }[] = [
    { type: 'person', title: 'Person' },
    { type: 'action', title: 'Action' },
    { type: 'object', title: 'Object' }
  ];

  const renderWordList = (words: string[], title: string) => {
    if (words.length === 0) {
      return <ErrorMessage>No matching {title.toLowerCase()} found for {number}</ErrorMessage>;
    }

    const displayedWords = words.slice(0, MAX_WORDS_PER_CATEGORY);
    const remainingCount = words.length - MAX_WORDS_PER_CATEGORY;

    return (
      <>
        {displayedWords.map((word, index) => (
          <WordItem key={index}>{word}</WordItem>
        ))}
        {remainingCount > 0 && (
          <WordItem style={{ color: colors.base01, fontStyle: 'italic' }}>
            +{remainingCount} more {title.toLowerCase()}...
          </WordItem>
        )}
      </>
    );
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Major System Word Finder</Title>
        
        <Input
          type="text"
          value={number}
          onChange={handleNumberChange}
          placeholder="Enter a two-digit number"
          maxLength={2}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <ColumnsContainer>
          {columnConfig.map(({ type, title }) => (
            <Column key={type}>
              <ColumnTitle>{title}</ColumnTitle>
              <WordList>
                {number.length === 2 && renderWordList(matchingWords[type], title)}
              </WordList>
            </Column>
          ))}
        </ColumnsContainer>
      </Container>
    </>
  );
}

export default App; 